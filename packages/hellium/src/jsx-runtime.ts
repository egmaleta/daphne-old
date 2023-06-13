import { h } from "./";
import type { Component } from "./lib/types/component";
import type { Tag, VNodeChild, VNodeChildren } from "./lib/types/vnode";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsx<T extends Tag | Component, P extends Record<string, any>>(
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

  if (typeof type !== "function") {
    return h(type, rest, ...children);
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

function Fragment(props: { children: VNodeChildren }) {
  return props.children;
}

export { jsx, jsx as jsxs, Fragment };
export type { JSXInternal as JSX } from "./lib/types/jsx";
