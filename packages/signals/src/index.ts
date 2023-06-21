import {
  Signal as SignalClass,
  ComputedSignal as ComputedClass,
} from "./lib/signals";
import Effect from "./lib/effect";
import type { ReadonlySignal, Signal, UpdateFunction } from "./lib/types";

export type { Signal, ReadonlySignal };

export const signal = <T extends any>(initialValue: T): Signal<T> => {
  const signal = new SignalClass(initialValue);

  const getter = () => signal.get();
  const writter = {
    set: (newValue: T) => signal.set(newValue),
    update: (updateFunc: UpdateFunction<T>) => signal.update(updateFunc),
  };
  return Object.assign(getter, writter);
};

export const computed = <T extends any>(
  computation: () => T
): ReadonlySignal<T> => {
  const computed = new ComputedClass(computation);

  return () => computed.get();
};

export const effect = (computation: () => any) => {
  new Effect(computation);
};
