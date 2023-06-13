import { COMPUTATION } from "./current-computation";
import {
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
    if (COMPUTATION.current) {
      this.addSubscriber(COMPUTATION.current);
    }

    if (this.needsToRecompute) {
      const temp = COMPUTATION.current;
      COMPUTATION.current = this;
      this.recompute();
      COMPUTATION.current = temp;
    }
    return this.value as T;
  }

  stale() {
    this.needsToRecompute = true;
    this.publish();
  }
}
