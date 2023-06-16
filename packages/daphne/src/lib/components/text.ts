import type { JSXInternal } from "../types/jsx";

interface TextProps {
  children?: JSXInternal.TextVNodeChild;
}

export default function (props: TextProps): JSXInternal.TextVNode {
  return { tag: "text", children: props.children };
}
