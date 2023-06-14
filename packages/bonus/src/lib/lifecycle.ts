import { type Signal, effect, signal } from "@bonusjs/signals";
import type { Component } from "./types/component";
import type { VNode } from "./types/vnode";

let GUARDS: {
  mount?: Signal<boolean>;
} = {};

export function attachLifecycleHookTriggers(
  component: Component,
  props: Record<string, any>
) {
  const temp = { ...GUARDS };
  GUARDS = {};

  const result = component(props);
  if (result && typeof result === "object" && !Array.isArray(result)) {
    const { mount } = GUARDS;
    result.mounted = mount && (() => mount.set(true));
  }

  GUARDS = temp;

  return result;
}

export function onMount(callback: () => void) {
  const guard = signal(false);
  GUARDS.mount = guard;

  effect(() => guard() && callback());
}

export function triggerLifecycleHook(
  vnode: VNode,
  triggerName: "mounted",
  recursive = true
) {
  const trigger = vnode[triggerName];
  trigger && trigger();

  recursive &&
    vnode.children.forEach((child) => {
      child &&
        typeof child === "object" &&
        triggerLifecycleHook(child, triggerName, recursive);
    });
}
