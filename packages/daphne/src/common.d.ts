import type { JSXInternal } from "./lib/types/jsx";

export type { JSXInternal as JSX };

export declare function Fragment(props: {
  children?: JSXInternal.Element | JSXInternal.Element[];
}): JSXInternal.Element;

export declare function jsx<
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element;
