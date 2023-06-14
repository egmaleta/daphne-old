import {
  getCurrentComputation,
  setCurrentComputation,
} from "./current-computation";
import type {
  SignalGetter,
  SignalPublisher,
  SignalSubscriber,
  TargetType,
} from "./types";

export default class ComputedSignal<T extends TargetType>
  implements SignalGetter<T>, SignalSubscriber, SignalPublisher
{
  private value?: T;
  private computation: () => T;
  private needsToRecompute: boolean;
  subs: SignalSubscriber[];

  constructor(computation: () => T) {
    this.computation = computation;
    this.needsToRecompute = true;
    this.subs = [];
  }

  private recompute() {
    this.value = this.computation();
    this.needsToRecompute = false;
    this.publish();
  }

  publish() {
    this.subs.forEach((sub) => sub.stale());
  }

  addSubscriber(sub: SignalSubscriber) {
    if (!this.subs.includes(sub)) {
      this.subs.push(sub);
    }
  }

  get() {
    const current = getCurrentComputation();
    if (current) {
      this.addSubscriber(current);
    }

    if (this.needsToRecompute) {
      const temp = getCurrentComputation();
      setCurrentComputation(this);
      this.recompute();
      setCurrentComputation(temp);
    }
    return this.value as T;
  }

  stale() {
    this.needsToRecompute = true;
    this.publish();
  }
}
