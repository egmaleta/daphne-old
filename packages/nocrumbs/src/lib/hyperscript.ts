import type { Component } from "./types/component";
import type { Tag, VNodeChild, VNodeChildren } from "./types/vnode";
import { flatten } from "./util";

export function h<T extends Tag | Component, P extends Record<string, any>>(
  type: T,
  props: P & { children?: VNodeChild | VNodeChildren }
): VNodeChild | VNodeChildren {
  // eslint-disable-next-line prefer-const
  let { children, ...rest } = props;

  // make sure children is a list
  if (!children) {
    children = [];
  } else if (!Array.isArray(children)) {
    children = [children];
  }

  // flatten children
  children = [...flatten(children)];

  if (typeof type !== "function") {
    return { tag: type, props: rest, children };
  }

  // type is a function => jsx expr is a component
  const componentFunction = type as Component;

  // look for slotted children by filtering children
  // if a child has a slot prop, filter it out
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slottedChildren: Record<string, any> = {};
  children = children.filter((child) => {
    if (typeof child === "object" && child !== null) {
      const { slot, ...childRest } = child.props;
      child.props = childRest;

      if (slot) {
        slottedChildren[slot] = child;
        return false;
      }
    }
    return true;
  });

  const componentProps = Object.assign(rest, { children, ...slottedChildren });

  return componentFunction(componentProps);
}
