import { attachLifecycleHookTriggers } from "./lifecycle";
import type { JSXInternal } from "./types/jsx";
import { flatten, purge } from "./util";

export default function <
  T extends JSXInternal.Tag | JSXInternal.FunctionComponent,
  P extends Record<string, any> & { children?: JSXInternal.Element }
>(type: T, props: P): JSXInternal.Element {
  if (typeof type !== "function") {
    let { children, ...rest } = props;

    // make sure children is a list
    if (!children) {
      children = [];
    } else if (!Array.isArray(children)) {
      children = [children];
    } else {
      // flatten children
      children = [...flatten(children)];
    }

    children = purge(children);

    return { tag: type, props: rest, children };
  }

  // type is a function => jsx expr is a component
  const component = type as JSXInternal.FunctionComponent;

  // flatten children if array
  if (Array.isArray(props.children)) {
    props.children = [...flatten(props.children)];
  }

  return attachLifecycleHookTriggers(component, props);
}
