import { effect } from "@daphnejs/signals";
import type { JSXInternal } from "./types/jsx";
import { triggerHook } from "./hooks";
import { flatten, isTagVNode, isVNode, purge } from "./util";

const EVENT_LISTENER_PREFIX = "on";

function addEventListener(
  target: EventTarget,
  eventName: string,
  listener: any
) {
  if (typeof listener === "function") {
    target.addEventListener(eventName, listener);
  } else {
    target.addEventListener(eventName, listener.handler, listener.options);
  }
}

function setAttribute(element: HTMLElement, attrName: string, attr: any) {
  if (typeof attr !== "boolean") {
    element.setAttribute(attrName, attr);
  } else if (attr) {
    element.setAttribute(attrName, "");
  } else {
    element.removeAttribute(attrName);
  }
}

function createElement(vnode: JSXInternal.VNode) {
  if (isTagVNode(vnode)) {
    const element = document.createElement(vnode.tag);

    // append event listeners and attributes
    Object.entries(vnode.props).forEach(([attrName, attr]) => {
      if (attrName === "ref") {
        attr && attr.set(element);
      } else if (attrName.startsWith(EVENT_LISTENER_PREFIX)) {
        attrName = attrName.slice(EVENT_LISTENER_PREFIX.length);
        if (Array.isArray(attr)) {
          for (const listener of attr) {
            addEventListener(element, attrName, listener);
          }
        } else {
          addEventListener(element, attrName, attr);
        }
      } else if (typeof attr !== "function") {
        setAttribute(element, attrName, attr);
      } else {
        // attr is a computation or a signal => create a effect
        effect(() => {
          const computedAttr = attr();
          setAttribute(element, attrName, computedAttr);
          triggerHook(vnode, "update");
        });
      }
    });

    // since h filtered out null|undefined|boolean
    // and transformed renderizable in text nodes
    // we can pass children as VNode[]
    appendChildren(element, vnode.children as JSXInternal.VNode[]);

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

function appendChildren(
  parentElement: HTMLElement,
  children: JSXInternal.VNode[]
) {
  return parentElement.append(...children.map((child) => createElement(child)));
}

export default function (
  parentElement: HTMLElement | null,
  vnode: JSXInternal.Element
) {
  if (parentElement) {
    if (Array.isArray(vnode)) {
      vnode = purge([...flatten(vnode)]);
      appendChildren(parentElement, vnode as JSXInternal.VNode[]);

      vnode.forEach((child) => {
        isTagVNode(child) && triggerHook(child, "mount", true);
      });
    } else if (isVNode(vnode)) {
      const child = createElement(vnode);
      parentElement.appendChild(child);

      isTagVNode(vnode) && triggerHook(vnode, "mount", true);
    }
  }
}
