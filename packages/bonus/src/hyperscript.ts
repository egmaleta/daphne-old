import type { Props, Tag, VNode, VNodeChildren } from "./lib/types/vnode";
import { flatten } from "./lib/util";

export function html<T extends Tag>(
  tag: T,
  props: Props<T>,
  ...children: VNodeChildren
): VNode<T> {
  // flatten children
  children = [...flatten(children)];

  return { tag, props, children };
}

export type { Props, Tag, VNodeChildren };
