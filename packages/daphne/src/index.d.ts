import type { JSXInternal } from "./lib/types/jsx";

export declare function Fragment(props: {
  children: JSXInternal.VNodeChildren;
}): JSXInternal.VNodeChildren;

export declare function render(
  parentElement: HTMLElement,
  vnode: JSXInternal.Element
): void;
