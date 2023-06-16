import h from "./lib/h";
import type { JSXInternal } from "./lib/types/jsx";

function Fragment(props: { children: JSXInternal.VNodeChildren }) {
  return props.children;
}

export { h as jsx, h as jsxs, Fragment };
export { JSXInternal as JSX };
