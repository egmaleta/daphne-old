import type { VNodeChild, VNodeChildren } from "./vnode";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<
  P extends Record<string, any> = object,
  C extends VNodeChildren | VNodeChild = VNodeChildren | VNodeChild
> = (props: P & { children?: C }) => VNodeChildren | VNodeChild;
