export * from "@daphnejs/signals";
import { signal } from "@daphnejs/signals";

export function reference<T extends Node = Node>(initialValue: T | null) {
  return signal(initialValue);
}
