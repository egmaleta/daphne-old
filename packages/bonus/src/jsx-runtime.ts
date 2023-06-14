import h from "./lib/h";
import type { VNodeChildren } from "./lib/types/vnode";

function Fragment(props: { children: VNodeChildren }) {
  return props.children;
}

export { h as jsx, h as jsxs, Fragment };
export type { JSXInternal as JSX } from "./lib/types/jsx";
