export type SignalLikeOrComputed<T> = T | (() => T);

export type TypedEvent<T extends EventTarget, E extends Event> = Omit<
  E,
  "currentTarget"
> & {
  currentTarget: T;
};
