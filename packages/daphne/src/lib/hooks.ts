import { effect, signal } from "@daphnejs/signals";
import type { JSXInternal } from "./types/jsx";
import { isTagVNode } from "./util";

let TRIGGERS: {
  mount?: () => any;
  update?: () => any;
} = {};

export function attachHooks(
  component: JSXInternal.FunctionComponent,
  props: Record<string, any>
) {
  const temp = { ...TRIGGERS };
  TRIGGERS = {};

  const vnode = component(props);
  if (!Array.isArray(vnode) && isTagVNode(vnode)) {
    vnode.triggers = TRIGGERS;
  }

  TRIGGERS = temp;

  return vnode;
}

export function triggerHook(
  vnode: JSXInternal.TagVNode,
  name: keyof typeof TRIGGERS,
  recursive = false
) {
  const trigger = vnode.triggers && vnode.triggers[name];
  trigger && trigger();

  recursive &&
    vnode.children.forEach((child) => {
      isTagVNode(child) && triggerHook(child, name, recursive);
    });
}

export function onMount(callback: () => any) {
  TRIGGERS.mount = callback;
}

export function onUpdate(callback: () => any) {
  // reasons to use a trigger signal:
  //
  // 1- callback needs tu run whenever its vnode state changes
  // not only when captured signals inside the callback change
  // so callback dependencies need to be controlled
  //
  // 2- functions that run when vnode state changes are inside
  // effects, so, running callback inside those functions could
  // lead to those effects running unneccesarily
  const triggerSignal = signal(false);
  effect(callback, triggerSignal);

  TRIGGERS.update = () => triggerSignal.update((v) => !v);
}
