import type { JSXInternal } from "../types/jsx";

export default function (props: { children: JSXInternal.VNodeChildren }) {
  return props.children;
}
