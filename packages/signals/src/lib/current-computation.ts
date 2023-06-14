import type { SignalSubscriber } from "./types";

const PROPERTY_NAME = "BONUS_CURRENT_COMPUTATION";

if (typeof (globalThis as any)[PROPERTY_NAME] === "undefined") {
  Object.defineProperty(globalThis, PROPERTY_NAME, {
    writable: true,
    configurable: false,
    enumerable: false,
    value: null,
  });
}

export function getCurrentComputation() {
  return (globalThis as any)[PROPERTY_NAME] as SignalSubscriber | null;
}

export function setCurrentComputation(value: SignalSubscriber | null) {
  (globalThis as any)[PROPERTY_NAME] = value;
}
