import SignalClass from "./signal";
import ComputedClass from "./computed-signal";
import Effect from "./effect";
import { ReadonlySignal, Signal, TargetType, UpdateFunction } from "./types";

export type { Signal, ReadonlySignal };

export const signal = <T extends TargetType>(initialValue: T): Signal<T> => {
  const signal = new SignalClass(initialValue);

  const getter = () => signal.get();
  const writter = {
    set: (newValue: T) => signal.set(newValue),
    update: (updateFunc: UpdateFunction<T>) => signal.update(updateFunc),
  };
  return Object.assign(getter, writter);
};

export const computed = <T extends TargetType>(
  computation: () => T
): ReadonlySignal<T> => {
  const computed = new ComputedClass(computation);

  return () => computed.get();
};

export const effect = (computation: () => void) => {
  new Effect(computation);
};
