import type { VNodeChild, VNodeChildren } from "./vnode";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<P extends Record<string, any> = object> = (
  props: P & { children?: VNodeChildren }
) => VNodeChildren | VNodeChild;
