import { JSXInternal } from "./lib/types/jsx";

// index jsx-runtime jsx-dev-runtime
export declare function Fragment(props: {
  children: JSXInternal.VNodeChildren;
}): JSXInternal.VNodeChildren;

// index
export declare function render(
  parentElement: HTMLElement,
  vnode: JSXInternal.Element
): void;

// hyperscript
export declare function html<T extends JSXInternal.Tag>(
  tag: T,
  props: JSXInternal.Props<T>,
  ...children: JSXInternal.VNodeChildren
): JSXInternal.VNode<T>;

// jsx-runtime jsx-dev-runtime
export type { JSXInternal as JSX };

// jsx-runtime

export declare function jsx<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;

export declare function jsxs<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;

// jsx-dev-runtime
export declare function jsxDEV<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;

// lifecycle
export declare function onMount(callback: () => void): void;

// signals

export * from "@daphnejs/signals";

export declare function reference<T extends Node = Node>(
  initialValue: T | null
): import("@daphnejs/signals").Signal<T | null>;
