import type { TagVNode, TextVNode, VNode, VNodeChild } from "./types/vnode";

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

export function isVNode(vnode: VNodeChild): vnode is VNode {
  return vnode !== null && typeof vnode === "object";
}

export function isTagVNode(vnode: VNodeChild): vnode is TagVNode {
  return isVNode(vnode) && vnode.tag !== "text";
}

export function isTextVNode(vnode: VNodeChild): vnode is TextVNode {
  return isVNode(vnode) && vnode.tag === "text";
}
