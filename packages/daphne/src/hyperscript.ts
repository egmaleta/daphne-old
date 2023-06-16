import type { JSXInternal } from "./lib/types/jsx";
import { flatten } from "./lib/util";

export function html<T extends JSXInternal.Tag>(
  tag: T,
  props: JSXInternal.Props<T>,
  ...children: JSXInternal.VNodeChildren
): JSXInternal.VNode<T> {
  // flatten children
  children = [...flatten(children)];

  return { tag, props, children };
}
