import { h } from "./lib/hyperscript";
import type { VNodeChildren } from "./lib/types/vnode";

function Fragment(props: { children: VNodeChildren }) {
  return props.children;
}

export { h, h as jsx, h as jsxs, Fragment };
export type { JSXInternal as JSX } from "./lib/types/jsx";
