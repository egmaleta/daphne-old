import { effect } from "@heliumjs/signals";
import type {
  ComputedVNodeChild,
  VNode,
  VNodeChild,
  VNodeChildren,
} from "./types/vnode";

const EVENT_LISTENER_PREFIX = "on";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const element = document.createElement(vnode.tag);

  // append event listeners and attributes
  Object.entries(vnode.props).forEach(([attrName, attr]) => {
    if (attrName === "ref") {
      return;
    }
    const isEventListener = attrName.startsWith(EVENT_LISTENER_PREFIX);
    if (isEventListener) {
      attrName = attrName.slice(EVENT_LISTENER_PREFIX.length);
      element.addEventListener(attrName, attr as EventListener);
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
  if (typeof vnode === "object" && vnode !== null) {
    return createElement(vnode);
  }

  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(`${vnode}`);
  }

  return;
}

export default function (
  parentElement: HTMLElement,
  vnode: Exclude<VNodeChild, ComputedVNodeChild> | VNodeChildren
) {
  if (Array.isArray(vnode)) {
    appendVNodeChildren(parentElement, vnode);
  } else {
    const child = renderVNode(vnode);
    child && parentElement.appendChild(child);
  }
}
