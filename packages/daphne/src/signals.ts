import { signal, computed, effect } from "@daphnejs/signals";

export function reference<T extends Node = Node>(initialValue: T | null) {
  return signal(initialValue);
}

export { signal, computed, effect };
