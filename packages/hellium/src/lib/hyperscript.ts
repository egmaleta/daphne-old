import type { Props, Tag, VNode, VNodeChildren } from "./types/vnode";
import { flatten } from "./util";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function h<T extends Tag>(
  tag: T,
  props: Props<T>,
  ...children: VNodeChildren
): VNode<T> {
  // flatten children
  children = [...flatten(children)];

  return { tag, props, children };
}
