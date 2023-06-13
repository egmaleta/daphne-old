import { COMPUTATION } from "./current-computation";
import { SignalSubscriber } from "./types";

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
    COMPUTATION.current = this;
    this.computation();
    COMPUTATION.current = null;
    this.computing = false;
  }

  stale() {
    if (!this.computing) {
      this.recompute();
    }
  }
}
