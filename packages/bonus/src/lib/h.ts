import { attachLifecycleHookTriggers } from "./lifecycle";
import type { Component } from "./types/component";
import type { Tag, VNodeChild, VNodeChildren } from "./types/vnode";
import { flatten } from "./util";

export default function <
  T extends Tag | Component,
  P extends Record<string, any>
>(
  type: T,
  props: P & { children?: VNodeChild | VNodeChildren }
): VNodeChild | VNodeChildren {
  if (typeof type !== "function") {
    let { children, ...rest } = props;

    // make sure children is a list
    if (!children) {
      children = [];
    } else if (!Array.isArray(children)) {
      children = [children];
    } else {
      // flatten children
      children = [...flatten(children)];
    }

    return { tag: type, props: rest, children };
  }

  // type is a function => jsx expr is a component
  const component = type as Component;
  return attachLifecycleHookTriggers(component, props);
}
