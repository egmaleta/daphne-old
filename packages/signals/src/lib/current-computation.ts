import type { SignalConsumer } from "./types";

const PROPERTY_NAME = "DAPHNE_CURRENT_COMPUTATION";

if (typeof (globalThis as any)[PROPERTY_NAME] === "undefined") {
  Object.defineProperty(globalThis, PROPERTY_NAME, {
    writable: true,
    configurable: false,
    enumerable: false,
    value: null,
  });
}

export function getCurrentComputation() {
  return (globalThis as any)[PROPERTY_NAME] as SignalConsumer | null;
}

export function setCurrentComputation(value: SignalConsumer | null) {
  (globalThis as any)[PROPERTY_NAME] = value;
}
