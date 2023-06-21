import type { JSXInternal } from "./types/jsx";
import { isTagVNode } from "./util";

let CALLBACKS: {
  mounted?: () => any;
} = {};

export function attachHooks(
  component: JSXInternal.FunctionComponent,
  props: Record<string, any>
) {
  const temp = { ...CALLBACKS };
  CALLBACKS = {};

  const result = component(props);
  if (!Array.isArray(result) && isTagVNode(result)) {
    result.mounted = CALLBACKS.mounted;
  }

  CALLBACKS = temp;

  return result;
}

export function onMount(callback: () => any) {
  CALLBACKS.mounted = callback;
}

export function triggerHook(
  vnode: JSXInternal.TagVNode,
  triggerName: "mounted",
  recursive = true
) {
  const trigger = vnode[triggerName];
  trigger && trigger();

  recursive &&
    vnode.children.forEach((child) => {
      isTagVNode(child) && triggerHook(child, triggerName, recursive);
    });
}
