import type { VNodeChild, VNodeChildren } from "./vnode";

export type Component<
  P extends Record<string, any> = object,
  C extends VNodeChildren | VNodeChild = VNodeChildren | VNodeChild
> = (props: P & { children?: C }) => VNodeChildren | VNodeChild;
