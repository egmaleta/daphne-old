import type { JSXInternal } from "./jsx";

export type Tag = keyof JSXInternal.IntrinsicElements;
export type Props<T extends Tag> = JSXInternal.IntrinsicElements[T];

export type ComputedVNodeChild = () => string | number | VNode;
export type VNodeChild =
  | string
  | number
  | boolean
  | null
  | undefined
  | VNode
  | ComputedVNodeChild;
export type VNodeChildren = VNodeChild[];

export type VNode<T extends Tag = Tag> = {
  tag: T;
  props: Props<T>;
  children: VNodeChildren;
};
