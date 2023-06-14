import type { Signal } from "@bonusjs/signals";
import type { SignalLikeOrComputed, TypedEvent } from "./util";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace JSXInternal {
  interface EventHandlers<T extends EventTarget = EventTarget> {
    onabort?: (ev: TypedEvent<T, UIEvent>) => void;
    onanimationcancel?: (ev: TypedEvent<T, AnimationEvent>) => void;
    onanimationend?: (ev: TypedEvent<T, AnimationEvent>) => void;
    onanimationiteration?: (ev: TypedEvent<T, AnimationEvent>) => void;
    onanimationstart?: (ev: TypedEvent<T, AnimationEvent>) => void;
    onauxclick?: (ev: TypedEvent<T, MouseEvent>) => void;
    onbeforeinput?: (ev: TypedEvent<T, InputEvent>) => void;
    onblur?: (ev: TypedEvent<T, FocusEvent>) => void;
    oncancel?: (ev: TypedEvent<T, Event>) => void;
    oncanplay?: (ev: TypedEvent<T, Event>) => void;
    oncanplaythrough?: (ev: TypedEvent<T, Event>) => void;
    onchange?: (ev: TypedEvent<T, Event>) => void;
    onclick?: (ev: TypedEvent<T, MouseEvent>) => void;
    onclose?: (ev: TypedEvent<T, Event>) => void;
    oncompositionend?: (ev: TypedEvent<T, CompositionEvent>) => void;
    oncompositionstart?: (ev: TypedEvent<T, CompositionEvent>) => void;
    oncompositionupdate?: (ev: TypedEvent<T, CompositionEvent>) => void;
    oncontextmenu?: (ev: TypedEvent<T, MouseEvent>) => void;
    oncopy?: (ev: TypedEvent<T, ClipboardEvent>) => void;
    oncuechange?: (ev: TypedEvent<T, Event>) => void;
    oncut?: (ev: TypedEvent<T, ClipboardEvent>) => void;
    ondblclick?: (ev: TypedEvent<T, MouseEvent>) => void;
    ondrag?: (ev: TypedEvent<T, DragEvent>) => void;
    ondragend?: (ev: TypedEvent<T, DragEvent>) => void;
    ondragenter?: (ev: TypedEvent<T, DragEvent>) => void;
    ondragleave?: (ev: TypedEvent<T, DragEvent>) => void;
    ondragover?: (ev: TypedEvent<T, DragEvent>) => void;
    ondragstart?: (ev: TypedEvent<T, DragEvent>) => void;
    ondrop?: (ev: TypedEvent<T, DragEvent>) => void;
    ondurationchange?: (ev: TypedEvent<T, Event>) => void;
    onemptied?: (ev: TypedEvent<T, Event>) => void;
    onended?: (ev: TypedEvent<T, Event>) => void;
    onerror?: (ev: TypedEvent<T, ErrorEvent>) => void;
    onfocus?: (ev: TypedEvent<T, FocusEvent>) => void;
    onfocusin?: (ev: TypedEvent<T, FocusEvent>) => void;
    onfocusout?: (ev: TypedEvent<T, FocusEvent>) => void;
    onformdata?: (ev: TypedEvent<T, FormDataEvent>) => void;
    onfullscreenchange?: (ev: TypedEvent<T, Event>) => void;
    onfullscreenerror?: (ev: TypedEvent<T, Event>) => void;
    ongotpointercapture?: (ev: TypedEvent<T, PointerEvent>) => void;
    oninput?: (ev: TypedEvent<T, Event>) => void;
    oninvalid?: (ev: TypedEvent<T, Event>) => void;
    onkeydown?: (ev: TypedEvent<T, KeyboardEvent>) => void;
    onkeypress?: (ev: TypedEvent<T, KeyboardEvent>) => void;
    onkeyup?: (ev: TypedEvent<T, KeyboardEvent>) => void;
    onload?: (ev: TypedEvent<T, Event>) => void;
    onloadeddata?: (ev: TypedEvent<T, Event>) => void;
    onloadedmetadata?: (ev: TypedEvent<T, Event>) => void;
    onloadstart?: (ev: TypedEvent<T, Event>) => void;
    onlostpointercapture?: (ev: TypedEvent<T, PointerEvent>) => void;
    onmousedown?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmouseenter?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmouseleave?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmousemove?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmouseout?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmouseover?: (ev: TypedEvent<T, MouseEvent>) => void;
    onmouseup?: (ev: TypedEvent<T, MouseEvent>) => void;
    onpaste?: (ev: TypedEvent<T, ClipboardEvent>) => void;
    onpause?: (ev: TypedEvent<T, Event>) => void;
    onplay?: (ev: TypedEvent<T, Event>) => void;
    onplaying?: (ev: TypedEvent<T, Event>) => void;
    onpointercancel?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerdown?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerenter?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerleave?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointermove?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerout?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerover?: (ev: TypedEvent<T, PointerEvent>) => void;
    onpointerup?: (ev: TypedEvent<T, PointerEvent>) => void;
    onprogress?: (ev: TypedEvent<T, ProgressEvent>) => void;
    onratechange?: (ev: TypedEvent<T, Event>) => void;
    onreset?: (ev: TypedEvent<T, Event>) => void;
    onresize?: (ev: TypedEvent<T, UIEvent>) => void;
    onscroll?: (ev: TypedEvent<T, Event>) => void;
    onsecuritypolicyviolation?: (
      ev: TypedEvent<T, SecurityPolicyViolationEvent>
    ) => void;
    onseeked?: (ev: TypedEvent<T, Event>) => void;
    onseeking?: (ev: TypedEvent<T, Event>) => void;
    onselect?: (ev: TypedEvent<T, Event>) => void;
    onselectionchange?: (ev: TypedEvent<T, Event>) => void;
    onselectstart?: (ev: TypedEvent<T, Event>) => void;
    onslotchange?: (ev: TypedEvent<T, Event>) => void;
    onstalled?: (ev: TypedEvent<T, Event>) => void;
    onsubmit?: (ev: TypedEvent<T, SubmitEvent>) => void;
    onsuspend?: (ev: TypedEvent<T, Event>) => void;
    ontimeupdate?: (ev: TypedEvent<T, Event>) => void;
    ontoggle?: (ev: TypedEvent<T, Event>) => void;
    ontouchcancel?: (ev: TypedEvent<T, TouchEvent>) => void;
    ontouchend?: (ev: TypedEvent<T, TouchEvent>) => void;
    ontouchmove?: (ev: TypedEvent<T, TouchEvent>) => void;
    ontouchstart?: (ev: TypedEvent<T, TouchEvent>) => void;
    ontransitioncancel?: (ev: TypedEvent<T, TransitionEvent>) => void;
    ontransitionend?: (ev: TypedEvent<T, TransitionEvent>) => void;
    ontransitionrun?: (ev: TypedEvent<T, TransitionEvent>) => void;
    ontransitionstart?: (ev: TypedEvent<T, TransitionEvent>) => void;
    onvolumechange?: (ev: TypedEvent<T, Event>) => void;
    onwaiting?: (ev: TypedEvent<T, Event>) => void;
    onwebkitanimationend?: (ev: TypedEvent<T, Event>) => void;
    onwebkitanimationiteration?: (ev: TypedEvent<T, Event>) => void;
    onwebkitanimationstart?: (ev: TypedEvent<T, Event>) => void;
    onwebkittransitionend?: (ev: TypedEvent<T, Event>) => void;
    onwheel?: (ev: TypedEvent<T, WheelEvent>) => void;
  }

  interface AriaAttributes {
    "aria-activedescendant"?: SignalLikeOrComputed<string | undefined>;
    "aria-atomic"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-autocomplete"?: SignalLikeOrComputed<
      "none" | "inline" | "list" | "both" | undefined
    >;
    "aria-busy"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-checked"?: SignalLikeOrComputed<boolean | "mixed" | undefined>;
    "aria-colcount"?: SignalLikeOrComputed<number | undefined>;
    "aria-colindex"?: SignalLikeOrComputed<number | undefined>;
    "aria-colspan"?: SignalLikeOrComputed<number | undefined>;
    "aria-controls"?: SignalLikeOrComputed<string | undefined>;
    "aria-current"?: SignalLikeOrComputed<
      boolean | "page" | "step" | "location" | "date" | "time" | undefined
    >;
    "aria-describedby"?: SignalLikeOrComputed<string | undefined>;
    "aria-details"?: SignalLikeOrComputed<string | undefined>;
    "aria-disabled"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-dropeffect"?: SignalLikeOrComputed<
      "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined
    >;
    "aria-errormessage"?: SignalLikeOrComputed<string | undefined>;
    "aria-expanded"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-flowto"?: SignalLikeOrComputed<string | undefined>;
    "aria-grabbed"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-haspopup"?: SignalLikeOrComputed<
      boolean | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined
    >;
    "aria-hidden"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-invalid"?: SignalLikeOrComputed<
      boolean | "grammar" | "spelling" | undefined
    >;
    "aria-keyshortcuts"?: SignalLikeOrComputed<string | undefined>;
    "aria-label"?: SignalLikeOrComputed<string | undefined>;
    "aria-labelledby"?: SignalLikeOrComputed<string | undefined>;
    "aria-level"?: SignalLikeOrComputed<number | undefined>;
    "aria-live"?: SignalLikeOrComputed<
      "off" | "assertive" | "polite" | undefined
    >;
    "aria-modal"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-multiline"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-multiselectable"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-orientation"?: SignalLikeOrComputed<
      "horizontal" | "vertical" | undefined
    >;
    "aria-owns"?: SignalLikeOrComputed<string | undefined>;
    "aria-placeholder"?: SignalLikeOrComputed<string | undefined>;
    "aria-posinset"?: SignalLikeOrComputed<number | undefined>;
    "aria-pressed"?: SignalLikeOrComputed<boolean | "mixed" | undefined>;
    "aria-readonly"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-relevant"?: SignalLikeOrComputed<
      | "additions"
      | "additions removals"
      | "additions text"
      | "all"
      | "removals"
      | "removals additions"
      | "removals text"
      | "text"
      | "text additions"
      | "text removals"
      | undefined
    >;
    "aria-required"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-roledescription"?: SignalLikeOrComputed<string | undefined>;
    "aria-rowcount"?: SignalLikeOrComputed<number | undefined>;
    "aria-rowindex"?: SignalLikeOrComputed<number | undefined>;
    "aria-rowspan"?: SignalLikeOrComputed<number | undefined>;
    "aria-selected"?: SignalLikeOrComputed<boolean | undefined>;
    "aria-setsize"?: SignalLikeOrComputed<number | undefined>;
    "aria-sort"?: SignalLikeOrComputed<
      "none" | "ascending" | "descending" | "other" | undefined
    >;
    "aria-valuemax"?: SignalLikeOrComputed<number | undefined>;
    "aria-valuemin"?: SignalLikeOrComputed<number | undefined>;
    "aria-valuenow"?: SignalLikeOrComputed<number | undefined>;
    "aria-valuetext"?: SignalLikeOrComputed<string | undefined>;
  }

  type AriaRole =
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | "none presentation";

  interface HTMLAttributes {
    accept?: SignalLikeOrComputed<string | undefined>;
    "accept-charset"?: SignalLikeOrComputed<string | undefined>;
    accesskey?: SignalLikeOrComputed<string | undefined>;
    action?: SignalLikeOrComputed<string | undefined>;
    align?: SignalLikeOrComputed<string | undefined>;
    allow?: SignalLikeOrComputed<string | undefined>;
    alt?: SignalLikeOrComputed<string | undefined>;
    async?: SignalLikeOrComputed<boolean | undefined>;
    autocapitalize?: SignalLikeOrComputed<
      "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined
    >;
    autocomplete?: SignalLikeOrComputed<string | undefined>;
    autofocus?: SignalLikeOrComputed<boolean | undefined>;
    autoplay?: SignalLikeOrComputed<boolean | undefined>;
    background?: SignalLikeOrComputed<string | undefined>;
    bgcolor?: SignalLikeOrComputed<string | undefined>;
    border?: SignalLikeOrComputed<string | undefined>;
    buffered?: SignalLikeOrComputed<string | undefined>;
    capture?: SignalLikeOrComputed<boolean | undefined>;
    charset?: SignalLikeOrComputed<string | undefined>;
    checked?: SignalLikeOrComputed<boolean | undefined>;
    cite?: SignalLikeOrComputed<string | undefined>;
    class?: SignalLikeOrComputed<string | undefined>;
    color?: SignalLikeOrComputed<string | undefined>;
    cols?: SignalLikeOrComputed<number | undefined>;
    colspan?: SignalLikeOrComputed<number | undefined>;
    content?: SignalLikeOrComputed<string | undefined>;
    contenteditable?: SignalLikeOrComputed<boolean | undefined>;
    contextmenu?: SignalLikeOrComputed<string | undefined>;
    controls?: SignalLikeOrComputed<boolean | undefined>;
    coords?: SignalLikeOrComputed<string | undefined>;
    crossorigin?: SignalLikeOrComputed<string | undefined>;
    csp?: SignalLikeOrComputed<string | undefined>;
    data?: SignalLikeOrComputed<string | undefined>;
    datetime?: SignalLikeOrComputed<string | undefined>;
    decoding?: SignalLikeOrComputed<"sync" | "async" | "auto" | undefined>;
    default?: SignalLikeOrComputed<boolean | undefined>;
    defer?: SignalLikeOrComputed<boolean | undefined>;
    dir?: SignalLikeOrComputed<string | undefined>;
    dirname?: SignalLikeOrComputed<string | undefined>;
    disabled?: SignalLikeOrComputed<boolean | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    download?: SignalLikeOrComputed<any | undefined>;
    draggable?: SignalLikeOrComputed<boolean | undefined>;
    enctype?: SignalLikeOrComputed<string | undefined>;
    enterkeyhint?: SignalLikeOrComputed<
      | "enter"
      | "done"
      | "go"
      | "next"
      | "previous"
      | "search"
      | "send"
      | undefined
    >;
    for?: SignalLikeOrComputed<string | undefined>;
    form?: SignalLikeOrComputed<string | undefined>;
    formaction?: SignalLikeOrComputed<string | undefined>;
    formenctype?: SignalLikeOrComputed<string | undefined>;
    formmethod?: SignalLikeOrComputed<string | undefined>;
    formnovalidate?: SignalLikeOrComputed<boolean | undefined>;
    formtarget?: SignalLikeOrComputed<string | undefined>;
    headers?: SignalLikeOrComputed<string | undefined>;
    height?: SignalLikeOrComputed<number | string | undefined>;
    hidden?: SignalLikeOrComputed<boolean | undefined>;
    high?: SignalLikeOrComputed<number | undefined>;
    href?: SignalLikeOrComputed<string | undefined>;
    hreflang?: SignalLikeOrComputed<string | undefined>;
    "http-equiv"?: SignalLikeOrComputed<string | undefined>;
    id?: SignalLikeOrComputed<string | undefined>;
    integrity?: SignalLikeOrComputed<string | undefined>;
    inputmode?: SignalLikeOrComputed<string | undefined>;
    ismap?: SignalLikeOrComputed<string | undefined>;
    itemprop?: SignalLikeOrComputed<string | undefined>;
    kind?: SignalLikeOrComputed<string | undefined>;
    label?: SignalLikeOrComputed<string | undefined>;
    lang?: SignalLikeOrComputed<string | undefined>;
    loading?: SignalLikeOrComputed<"eager" | "lazy" | undefined>;
    list?: SignalLikeOrComputed<string | undefined>;
    loop?: SignalLikeOrComputed<boolean | undefined>;
    low?: SignalLikeOrComputed<number | undefined>;
    max?: SignalLikeOrComputed<number | undefined>;
    maxlength?: SignalLikeOrComputed<number | undefined>;
    minlength?: SignalLikeOrComputed<number | undefined>;
    media?: SignalLikeOrComputed<string | undefined>;
    method?: SignalLikeOrComputed<string | undefined>;
    min?: SignalLikeOrComputed<number | undefined>;
    multiple?: SignalLikeOrComputed<boolean | undefined>;
    muted?: SignalLikeOrComputed<boolean | undefined>;
    name?: SignalLikeOrComputed<string | undefined>;
    novalidate?: SignalLikeOrComputed<boolean | undefined>;
    open?: SignalLikeOrComputed<boolean | undefined>;
    optimum?: SignalLikeOrComputed<number | undefined>;
    pattern?: SignalLikeOrComputed<string | undefined>;
    ping?: SignalLikeOrComputed<string | undefined>;
    placeholder?: SignalLikeOrComputed<string | undefined>;
    playsinline?: SignalLikeOrComputed<boolean | undefined>;
    poster?: SignalLikeOrComputed<string | undefined>;
    preload?: SignalLikeOrComputed<string | undefined>;
    readonly?: SignalLikeOrComputed<boolean | undefined>;
    referrerpolicy?: SignalLikeOrComputed<
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url"
      | undefined
    >;
    rel?: SignalLikeOrComputed<string | undefined>;
    required?: SignalLikeOrComputed<boolean | undefined>;
    reversed?: SignalLikeOrComputed<boolean | undefined>;
    role?: SignalLikeOrComputed<AriaRole | undefined>;
    rows?: SignalLikeOrComputed<number | undefined>;
    rowspan?: SignalLikeOrComputed<number | undefined>;
    sandbox?: SignalLikeOrComputed<string | undefined>;
    scope?: SignalLikeOrComputed<string | undefined>;
    selected?: SignalLikeOrComputed<boolean | undefined>;
    shape?: SignalLikeOrComputed<string | undefined>;
    size?: SignalLikeOrComputed<number | undefined>;
    sizes?: SignalLikeOrComputed<string | undefined>;
    span?: SignalLikeOrComputed<number | undefined>;
    spellcheck?: SignalLikeOrComputed<boolean | undefined>;
    src?: SignalLikeOrComputed<string | undefined>;
    srcdoc?: SignalLikeOrComputed<string | undefined>;
    srclang?: SignalLikeOrComputed<string | undefined>;
    srcset?: SignalLikeOrComputed<string | undefined>;
    start?: SignalLikeOrComputed<number | undefined>;
    step?: SignalLikeOrComputed<number | string | undefined>;
    style?: SignalLikeOrComputed<string | undefined>;
    tabindex?: SignalLikeOrComputed<number | undefined>;
    target?: SignalLikeOrComputed<string | undefined>;
    title?: SignalLikeOrComputed<string | undefined>;
    translate?: SignalLikeOrComputed<string | undefined>;
    type?: SignalLikeOrComputed<string | undefined>;
    usemap?: SignalLikeOrComputed<string | undefined>;
    value?: SignalLikeOrComputed<number | string | undefined>;
    width?: SignalLikeOrComputed<number | string | undefined>;
    wrap?: SignalLikeOrComputed<string | undefined>;
  }

  interface SpecialAttributes<T extends EventTarget> {
    ref?: Signal<T | undefined>;
    slot?: string;
  }

  export interface IntrinsicAttributes<T extends EventTarget>
    extends AriaAttributes,
      HTMLAttributes,
      EventHandlers<T>,
      SpecialAttributes<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [customAttr: string]: any;
  }

  export type IntrinsicElements = {
    [K in keyof HTMLElementTagNameMap]: IntrinsicAttributes<
      HTMLElementTagNameMap[K]
    >;
  };
}
