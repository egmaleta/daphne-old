import {
  Signal as SignalClass,
  ComputedSignal as ComputedClass,
} from "./lib/signals";
import Effect from "./lib/effect";
import type {
  Callback,
  ReadonlySignal,
  Signal,
  SignalConsumer,
  UpdateFunction,
} from "./lib/types";

export type { Signal, ReadonlySignal };

export const signal = <T extends any>(initialValue: T): Signal<T> => {
  const signal = new SignalClass(initialValue);

  const getter = () => signal.get();
  const writter = {
    set: (newValue: T) => signal.set(newValue),
    update: (updateFunc: UpdateFunction<T>) => signal.update(updateFunc),
  };
  const sender = {
    subscribe: (sub: SignalConsumer | Callback) => signal.subscribe(sub),
  };

  return Object.assign(getter, writter, sender);
};

export const computed = <T extends any>(
  computation: () => T
): ReadonlySignal<T> => {
  const computed = new ComputedClass(computation);

  const getter = () => computed.get();
  const sender = {
    subscribe: (sub: SignalConsumer | Callback) => computed.subscribe(sub),
  };

  return Object.assign(getter, sender);
};

export const effect = (
  computation: () => any,
  ...dependencies: ReadonlySignal[]
) => {
  if (dependencies.length) {
    for (const dependency of dependencies) {
      dependency.subscribe(computation);
    }
  } else {
    new Effect(computation);
  }
};
