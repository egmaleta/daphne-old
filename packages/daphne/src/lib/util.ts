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

export function purge(vnodes: JSXInternal.VNodeChildren) {
  // filter out null, undefined and boolean children
  vnodes = vnodes.filter((vnode) => vnode && typeof vnode !== "boolean");

  // transform renderizable children in text nodes
  vnodes = vnodes.map((vnode) =>
    isVNode(vnode)
      ? vnode
      : ({ tag: "text", children: vnode } as JSXInternal.TextVNode)
  );

  return vnodes as JSXInternal.VNode[];
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
