import { SignalSubscriber } from "./types";

export const COMPUTATION: { current: SignalSubscriber | null } = {
  current: null,
};
