import { effect } from "@bonusjs/signals";
import type {
  ComputedVNodeChild,
  VNode,
  VNodeChild,
  VNodeChildren,
} from "./types/vnode";
import { triggerLifecycleHook } from "./lifecycle";
import { flatten, isTagVNode, isVNode } from "./util";
import type { EVENT_LISTENER_PREFIX } from "./types/util";

const EVENT_LISTENER_PREFIX: EVENT_LISTENER_PREFIX = "on";

function setAttribute(element: HTMLElement, attrName: string, attr: any) {
  if (typeof attr !== "boolean") {
    element.setAttribute(attrName, attr);
  } else if (attr) {
    element.setAttribute(attrName, "");
  } else {
    element.removeAttribute(attrName);
  }
}

function createElement(vnode: VNode) {
  if (isTagVNode(vnode)) {
    const element = document.createElement(vnode.tag);

    // append event listeners and attributes
    Object.entries(vnode.props).forEach(([attrName, attr]) => {
      if (attrName === "ref") {
        return;
      }
      const isEventListener = attrName.startsWith(EVENT_LISTENER_PREFIX);
      if (isEventListener) {
        attrName = attrName.slice(EVENT_LISTENER_PREFIX.length);
        element.addEventListener(attrName, attr);
      } else if (typeof attr !== "function") {
        setAttribute(element, attrName, attr);
      } else {
        // attr is a computation or a signal => create a effect
        effect(() => {
          const computedAttr = attr();
          setAttribute(element, attrName, computedAttr);
        });
      }
    });

    appendVNodeChildren(element, vnode.children);

    return element;
  }

  const text = document.createTextNode("");

  const data = vnode.children;
  if (data) {
    if (typeof data !== "function") {
      text.replaceData(0, text.length, `${data}`);
    } else {
      effect(() => {
        text.replaceData(0, text.length, `${data()}`);
      });
    }
  }

  return text;
}

function appendVNodeChildren(
  parentElement: HTMLElement,
  vnodes: VNodeChildren
) {
  const children: (Node | undefined)[] = new Array(vnodes.length);
  const computedVNodes: (ComputedVNodeChild | undefined)[] = new Array(
    vnodes.length
  );

  // first render of children
  vnodes.forEach((vnode, i) => {
    if (typeof vnode === "function") {
      computedVNodes[i] = vnode;
    } else {
      children[i] = renderVNode(vnode);
    }
  });

  let firstRender = true;
  for (let i = 0; i < vnodes.length; i++) {
    const child = children[i];
    const vnode = computedVNodes[i];

    if (!vnode) {
      children[i] = child && parentElement.appendChild(child);
    } else {
      effect(() => {
        const node = renderVNode(vnode()); // subscription
        if (firstRender) {
          children[i] = node && parentElement.appendChild(node);
        } else {
          // remove old node if exists
          const oldNode = children[i];
          oldNode && parentElement.removeChild(oldNode);

          // append new node if exists
          if (node) {
            const childNode = children.find((node, j) => j > i && node);
            children[i] = parentElement.insertBefore(node, childNode ?? null);
          } else {
            children[i] = undefined;
          }
        }
      });
    }
  }
  firstRender = false;
}

function renderVNode(vnode: Exclude<VNodeChild, ComputedVNodeChild>) {
  if (isVNode(vnode)) {
    return createElement(vnode);
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(`${vnode}`);
  }
}

export default function (
  parentElement: HTMLElement,
  vnode: Exclude<VNodeChild, ComputedVNodeChild> | VNodeChildren
) {
  if (Array.isArray(vnode)) {
    vnode = [...flatten(vnode)];

    appendVNodeChildren(parentElement, vnode);
    vnode.forEach((child) => {
      isTagVNode(child) && triggerLifecycleHook(child, "mounted");
    });
  } else {
    const child = renderVNode(vnode);
    child && parentElement.appendChild(child);

    isTagVNode(vnode) && triggerLifecycleHook(vnode, "mounted");
  }
}
