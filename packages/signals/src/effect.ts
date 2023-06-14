import { setCurrentComputation } from "./current-computation";
import type { SignalSubscriber } from "./types";

export default class Effect implements SignalSubscriber {
  private computation: () => void;
  private computing: boolean;

  constructor(computation: () => void) {
    this.computation = computation;
    this.computing = false;
    this.recompute();
  }

  private recompute() {
    this.computing = true;
    setCurrentComputation(this);
    this.computation();
    setCurrentComputation(null);
    this.computing = false;
  }

  stale() {
    if (!this.computing) {
      this.recompute();
    }
  }
}
