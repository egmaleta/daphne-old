export type UpdateFunction<T> = (value: T) => T;

export type TargetType = any;

export interface SignalGetter<T extends TargetType> {
  get: () => T;
}
export interface SignalWriter<T extends TargetType> {
  set: (newValue: T) => void;
  update: (updateFunction: UpdateFunction<T>) => void;
}
export interface SignalSubscriber {
  stale: () => void;
}
export interface SignalPublisher {
  subs: SignalSubscriber[];
  addSubscriber: (sub: SignalSubscriber) => void;
  publish: () => void;
}

export type ReadonlySignal<T extends TargetType> = SignalGetter<T>["get"];
export type Signal<T extends TargetType> = ReadonlySignal<T> & SignalWriter<T>;
