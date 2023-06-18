import type { JSXInternal } from "./lib/types/jsx";

export { Fragment } from "./common";

export declare function render(
  parentElement: HTMLElement | null,
  vnode: JSXInternal.Element
): void;
