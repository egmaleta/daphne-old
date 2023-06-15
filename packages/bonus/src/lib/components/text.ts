import type { TextVNode, TextVNodeChild } from "../types/vnode";

interface TextProps {
  children?: TextVNodeChild;
}

export default function (props: TextProps): TextVNode {
  return { tag: "text", children: props.children };
}
