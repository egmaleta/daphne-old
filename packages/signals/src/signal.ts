import { COMPUTATION } from "./current-computation";
import {
  SignalGetter,
  SignalPublisher,
  SignalSubscriber,
  TargetType,
  UpdateFunction,
  SignalWriter,
} from "./types";

export default class Signal<T extends TargetType>
  implements SignalGetter<T>, SignalWriter<T>, SignalPublisher
{
  private value: T;
  subs: SignalSubscriber[];

  constructor(initialValue: T) {
    this.value = initialValue;
    this.subs = [];
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
    return this.value;
  }

  set(newValue: T) {
    if (newValue !== this.value) {
      this.value = newValue;
      this.publish();
    }
  }

  update(updateFunction: UpdateFunction<T>) {
    this.set(updateFunction(this.value));
  }
}
