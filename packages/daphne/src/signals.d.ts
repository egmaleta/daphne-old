export * from "@daphnejs/signals";

export declare function reference<T extends Node = Node>(
  initialValue: T | null
): import("@daphnejs/signals").Signal<T | null>;
