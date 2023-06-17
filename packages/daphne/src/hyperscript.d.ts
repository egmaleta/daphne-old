import type { JSXInternal } from "./lib/types/jsx";

export declare function html<T extends JSXInternal.Tag>(
  tag: T,
  props: JSXInternal.Props<T>,
  ...children: JSXInternal.VNodeChildren
): JSXInternal.VNode<T>;
