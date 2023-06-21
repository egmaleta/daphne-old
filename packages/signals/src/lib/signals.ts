import {
  getCurrentComputation,
  setCurrentComputation,
} from "./current-computation";
import type {
  Callback,
  SignalConsumer,
  SignalGetter,
  SignalSender,
  SignalWriter,
  UpdateFunction,
} from "./types";

class SignalSenderGetter<T extends any>
  implements SignalSender, SignalGetter<T>
{
  protected value?: T;
  private subs: (SignalConsumer | Callback)[];

  constructor(initialValue?: T) {
    this.value = initialValue;
    this.subs = [];
  }

  send() {
    for (const sub of this.subs) {
      if (typeof sub !== "function") {
        sub.stale();
      } else {
        sub();
      }
    }
  }

  subscribe(sub: SignalConsumer | Callback) {
    if (!this.subs.includes(sub)) {
      this.subs.push(sub);
    }
  }

  get() {
    const current = getCurrentComputation();
    if (current) {
      this.subscribe(current);
    }
    return this.value as T;
  }
}

export class Signal<T extends any>
  extends SignalSenderGetter<T>
  implements SignalWriter<T>
{
  set(newValue: T) {
    if (newValue !== this.value) {
      this.value = newValue;
      this.send();
    }
  }

  update(updateFunction: UpdateFunction<T>) {
    this.set(updateFunction(this.value as T));
  }
}

export class ComputedSignal<T extends any>
  extends SignalSenderGetter<T>
  implements SignalConsumer
{
  private computation: () => T;
  private staling: boolean;

  constructor(computation: () => T) {
    super();
    this.computation = computation;
    this.staling = true;
  }

  private compute() {
    this.value = this.computation();
    this.staling = false;
    this.send();
  }

  get() {
    super.get();

    if (this.staling) {
      const temp = getCurrentComputation();
      setCurrentComputation(this);
      this.compute();
      setCurrentComputation(temp);
    }
    return this.value as T;
  }

  stale() {
    this.staling = true;
    this.send();
  }
}
