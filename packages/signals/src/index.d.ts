import type { ReadonlySignal, Signal } from "./lib/types";
export type { Signal, ReadonlySignal };
export declare const signal: <T extends unknown>(initialValue: T) => Signal<T>;
export declare const computed: <T extends unknown>(
  computation: () => T
) => ReadonlySignal<T>;
export declare const effect: (computation: () => any) => void;
