import type { JSXInternal } from "./types/jsx";
import { isTagVNode } from "./util";

let TRIGGERS: {
  mount?: () => any;
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

export function onMount(callback: () => any) {
  TRIGGERS.mount = callback;
}

export function triggerOnMount(vnode: JSXInternal.TagVNode, recursive = true) {
  const trigger = vnode.triggers?.mount;
  trigger && trigger();

  recursive &&
    vnode.children.forEach((child) => {
      isTagVNode(child) && triggerOnMount(child, recursive);
    });
}
