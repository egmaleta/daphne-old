import { type Signal, effect, signal } from "@bonusjs/signals";
import type { JSXInternal } from "./types/jsx";
import { isTagVNode } from "./util";

let GUARDS: {
  mount?: Signal<boolean>;
} = {};

export function attachLifecycleHookTriggers(
  component: JSXInternal.FunctionComponent,
  props: Record<string, any>
) {
  const temp = { ...GUARDS };
  GUARDS = {};

  const result = component(props);
  if (!Array.isArray(result) && isTagVNode(result)) {
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
  vnode: JSXInternal.TagVNode,
  triggerName: "mounted",
  recursive = true
) {
  const trigger = vnode[triggerName];
  trigger && trigger();

  recursive &&
    vnode.children.forEach((child) => {
      isTagVNode(child) && triggerLifecycleHook(child, triggerName, recursive);
    });
}
