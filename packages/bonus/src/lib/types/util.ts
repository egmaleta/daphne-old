export type Computed<T extends {}> = {
  [K in keyof T]: T[K] | (() => T[K]);
};

export type EVENT_LISTENER_PREFIX = "on";
