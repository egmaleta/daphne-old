import type { JSXInternal } from "./types/jsx";

export function* flatten<T>(list: T | T[]): Generator<T> {
  if (Array.isArray(list)) {
    for (const elementOrList of list) {
      for (const element of flatten(elementOrList)) {
        yield element;
      }
    }
  } else {
    yield list;
  }
}

export function isVNode(
  vnode: JSXInternal.VNodeChild
): vnode is JSXInternal.VNode {
  return vnode !== null && typeof vnode === "object";
}

export function isTagVNode(
  vnode: JSXInternal.VNodeChild
): vnode is JSXInternal.TagVNode {
  return isVNode(vnode) && vnode.tag !== "text";
}

export function isTextVNode(
  vnode: JSXInternal.VNodeChild
): vnode is JSXInternal.TextVNode {
  return isVNode(vnode) && vnode.tag === "text";
}
