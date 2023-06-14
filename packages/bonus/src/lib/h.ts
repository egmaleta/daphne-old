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
  // make sure children is a list
  if (!props.children) {
    props.children = [];
  } else if (!Array.isArray(props.children)) {
    props.children = [props.children];
  } else {
    // flatten children
    props.children = [...flatten(props.children)];
  }

  if (typeof type !== "function") {
    const { children, ...rest } = props;
    return { tag: type, props: rest, children };
  }

  // type is a function => jsx expr is a component
  const component = type as Component;
  return attachLifecycleHookTriggers(component, props);
}
