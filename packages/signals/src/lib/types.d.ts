export type UpdateFunction<T> = (value: T) => T;

export type Callback = () => any;

export interface SignalGetter<T extends any> {
  get: () => T;
}
export interface SignalWriter<T extends any> {
  set: (newValue: T) => void;
  update: (updateFunction: UpdateFunction<T>) => void;
}
export interface SignalConsumer {
  stale: () => void;
}
export interface SignalSender {
  send: () => void;
  subscribe: (sub: SignalConsumer | Callback) => void;
}

export type ReadonlySignal<T extends any> = SignalGetter<T>["get"];
export type Signal<T extends any> = ReadonlySignal<T> & SignalWriter<T>;
