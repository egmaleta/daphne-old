import { setCurrentComputation } from "./current-computation";
import type { SignalConsumer } from "./types";

export default class Effect implements SignalConsumer {
  private computation: () => any;
  private staling: boolean;

  constructor(computation: () => any) {
    this.computation = computation;
    this.staling = false;

    this.compute();
  }

  private compute() {
    this.staling = true;
    setCurrentComputation(this);
    this.computation();
    setCurrentComputation(null);
    this.staling = false;
  }

  stale() {
    if (!this.staling) {
      this.compute();
    }
  }
}
