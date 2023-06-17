import type { JSXInternal } from "./lib/types/jsx";

export declare function Fragment(props: {
  children: JSXInternal.VNodeChildren;
}): JSXInternal.VNodeChildren;

export declare function jsx<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;

export declare function jsxs<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;

export type { JSXInternal as JSX };
