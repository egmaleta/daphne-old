import type { Signal } from "@daphnejs/signals";
import type { Computed, EVENT_LISTENER_PREFIX } from "./util";

export namespace JSXInternal {
  type TypedEvent<E extends Event, T extends EventTarget> = Omit<
    E,
    "currentTarget"
  > & { readonly currentTarget: T };

  type EventHandler<E extends Event, T extends EventTarget> = (
    ev: TypedEvent<E, T>
  ) => any;

  type EventHandlers<T extends EventTarget> = {
    [K in keyof HTMLElementEventMap as `${EVENT_LISTENER_PREFIX}${K}`]?: EventHandler<
      HTMLElementEventMap[K],
      T
    >;
  };

  interface AriaAttributes {
    "aria-activedescendant"?: string | undefined | null;
    "aria-atomic"?: boolean | "false" | "true" | undefined | null;
    "aria-autocomplete"?:
      | "none"
      | "inline"
      | "list"
      | "both"
      | undefined
      | null;
    "aria-busy"?: boolean | "false" | "true" | undefined | null;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | null;
    "aria-colcount"?: number | string | undefined | null;
    "aria-colindex"?: number | string | undefined | null;
    "aria-colspan"?: number | string | undefined | null;
    "aria-controls"?: string | undefined | null;
    "aria-current"?:
      | boolean
      | "false"
      | "true"
      | "page"
      | "step"
      | "location"
      | "date"
      | "time"
      | undefined
      | null;
    "aria-describedby"?: string | undefined | null;
    "aria-details"?: string | undefined | null;
    "aria-disabled"?: boolean | "false" | "true" | undefined | null;
    "aria-dropeffect"?:
      | "none"
      | "copy"
      | "execute"
      | "link"
      | "move"
      | "popup"
      | undefined
      | null;
    "aria-errormessage"?: string | undefined | null;
    "aria-expanded"?: boolean | "false" | "true" | undefined | null;
    "aria-flowto"?: string | undefined | null;
    "aria-grabbed"?: boolean | "false" | "true" | undefined | null;
    "aria-haspopup"?:
      | boolean
      | "false"
      | "true"
      | "menu"
      | "listbox"
      | "tree"
      | "grid"
      | "dialog"
      | undefined
      | null;
    "aria-hidden"?: boolean | "false" | "true" | undefined | null;
    "aria-invalid"?:
      | boolean
      | "false"
      | "true"
      | "grammar"
      | "spelling"
      | undefined
      | null;
    "aria-keyshortcuts"?: string | undefined | null;
    "aria-label"?: string | undefined | null;
    "aria-labelledby"?: string | undefined | null;
    "aria-level"?: number | string | undefined | null;
    "aria-live"?: "off" | "assertive" | "polite" | undefined | null;
    "aria-modal"?: boolean | "false" | "true" | undefined | null;
    "aria-multiline"?: boolean | "false" | "true" | undefined | null;
    "aria-multiselectable"?: boolean | "false" | "true" | undefined | null;
    "aria-orientation"?: "horizontal" | "vertical" | undefined | null;
    "aria-owns"?: string | undefined | null;
    "aria-placeholder"?: string | undefined | null;
    "aria-posinset"?: number | string | undefined | null;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | null;
    "aria-readonly"?: boolean | "false" | "true" | undefined | null;
    "aria-relevant"?:
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
      | null;
    "aria-required"?: boolean | "false" | "true" | undefined | null;
    "aria-roledescription"?: string | undefined | null;
    "aria-rowcount"?: number | string | undefined | null;
    "aria-rowindex"?: number | string | undefined | null;
    "aria-rowspan"?: number | string | undefined | null;
    "aria-selected"?: boolean | "false" | "true" | undefined | null;
    "aria-setsize"?: number | string | undefined | null;
    "aria-sort"?:
      | "none"
      | "ascending"
      | "descending"
      | "other"
      | undefined
      | null;
    "aria-valuemax"?: number | string | undefined | null;
    "aria-valuemin"?: number | string | undefined | null;
    "aria-valuenow"?: number | string | undefined | null;
    "aria-valuetext"?: string | undefined | null;
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
    | "treeitem";
  interface HTMLAttributes extends AriaAttributes {
    accesskey?: string | undefined | null;
    autocapitalize?: string | undefined | null;
    autofocus?: boolean | string | undefined | null;
    class?: string | undefined | null;
    contenteditable?:
      | "true"
      | "false"
      | boolean
      | "inherit"
      | string
      | undefined
      | null;
    dir?: string | undefined | null;
    draggable?: "true" | "false" | boolean | undefined | null;
    enterkeyhint?:
      | "enter"
      | "done"
      | "go"
      | "next"
      | "previous"
      | "search"
      | "send"
      | undefined
      | null;
    hidden?: boolean | string | undefined | null;
    id?: string | undefined | null;
    inert?: boolean | string | undefined | null;
    inputmode?:
      | "none"
      | "text"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | "search"
      | undefined
      | null;
    is?: string | undefined | null;
    itemid?: string | undefined | null;
    itemprop?: string | undefined | null;
    itemref?: string | undefined | null;
    itemscope?: boolean | string | undefined | null;
    itemtype?: string | undefined | null;
    lang?: string | undefined | null;
    slot?: string | undefined | null;
    spellcheck?: "true" | "false" | boolean | undefined | null;
    style?: string | Record<string, any> | undefined | null;
    tabindex?: number | string | undefined | null;
    title?: string | undefined | null;
    translate?: "yes" | "no" | undefined | null;
    radiogroup?: string | undefined | null;
    role?: AriaRole | undefined | null;
    about?: string | undefined | null;
    datatype?: string | undefined | null;
    inlist?: any;
    prefix?: string | undefined | null;
    property?: string | undefined | null;
    resource?: string | undefined | null;
    typeof?: string | undefined | null;
    vocab?: string | undefined | null;
    contextmenu?: string | undefined | null;
    autosave?: string | undefined | null;
    color?: string | undefined | null;
    results?: number | string | undefined | null;
    security?: string | undefined | null;
    unselectable?: "on" | "off" | undefined | null;
  }

  type HTMLAttributeReferrerPolicy =
    | ""
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

  type HTMLAttributeAnchorTarget = "_self" | "_blank" | "_parent" | "_top";

  interface AnchorHTMLAttributes extends HTMLAttributes {
    download?: string | boolean | undefined | null;
    href?: string | URL | undefined | null;
    hreflang?: string | undefined | null;
    media?: string | undefined | null;
    ping?: string | undefined | null;
    rel?: string | undefined | null;
    target?: HTMLAttributeAnchorTarget | undefined | null;
    type?: string | undefined | null;
    referrerpolicy?: HTMLAttributeReferrerPolicy | undefined | null;
  }

  interface AudioHTMLAttributes extends MediaHTMLAttributes {}

  interface AreaHTMLAttributes extends HTMLAttributes {
    alt?: string | undefined | null;
    coords?: string | undefined | null;
    download?: any;
    href?: string | undefined | null;
    hreflang?: string | undefined | null;
    media?: string | undefined | null;
    referrerpolicy?: HTMLAttributeReferrerPolicy | undefined | null;
    rel?: string | undefined | null;
    shape?: string | undefined | null;
    target?: string | undefined | null;
  }

  interface BaseHTMLAttributes extends HTMLAttributes {
    href?: string | undefined | null;
    target?: string | undefined | null;
  }

  interface BlockquoteHTMLAttributes extends HTMLAttributes {
    cite?: string | undefined | null;
  }

  interface ButtonHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | string | undefined | null;
    form?: string | undefined | null;
    formaction?: string | undefined | null;
    formenctype?: string | undefined | null;
    formmethod?: string | undefined | null;
    formnovalidate?: boolean | string | undefined | null;
    formtarget?: string | undefined | null;
    name?: string | undefined | null;
    type?: "submit" | "reset" | "button" | undefined | null;
    value?: string | string[] | number | undefined | null;
  }

  interface CanvasHTMLAttributes extends HTMLAttributes {
    height?: number | string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface ColHTMLAttributes extends HTMLAttributes {
    span?: number | string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface ColgroupHTMLAttributes extends HTMLAttributes {
    span?: number | string | undefined | null;
  }

  interface DataHTMLAttributes extends HTMLAttributes {
    value?: string | string[] | number | undefined | null;
  }

  interface DetailsHTMLAttributes extends HTMLAttributes {
    open?: boolean | string | undefined | null;
  }

  interface DelHTMLAttributes extends HTMLAttributes {
    cite?: string | undefined | null;
    datetime?: string | undefined | null;
  }

  interface DialogHTMLAttributes extends HTMLAttributes {
    open?: boolean | string | undefined | null;
  }

  interface EmbedHTMLAttributes extends HTMLAttributes {
    height?: number | string | undefined | null;
    src?: string | undefined | null;
    type?: string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface FieldsetHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | string | undefined | null;
    form?: string | undefined | null;
    name?: string | undefined | null;
  }

  interface FormHTMLAttributes extends HTMLAttributes {
    "accept-charset"?: string | undefined | null;
    action?: string | undefined | null;
    autocomplete?: string | undefined | null;
    autocorrect?: string | undefined | null;
    enctype?: string | undefined | null;
    method?: string | undefined | null;
    name?: string | undefined | null;
    novalidate?: boolean | string | undefined | null;
    target?: string | undefined | null;
  }

  interface HtmlHTMLAttributes extends HTMLAttributes {
    manifest?: string | undefined | null;
  }

  interface IframeHTMLAttributes extends HTMLAttributes {
    allow?: string | undefined | null;
    allowfullscreen?: boolean | string | undefined | null;
    allowtransparency?: boolean | string | undefined | null;
    fetchpriority?: "auto" | "high" | "low" | undefined | null;
    frameborder?: number | string | undefined | null;
    height?: number | string | undefined | null;
    loading?: "eager" | "lazy" | undefined | null;
    marginheight?: number | string | undefined | null;
    marginwidth?: number | string | undefined | null;
    name?: string | undefined | null;
    referrerpolicy?: HTMLAttributeReferrerPolicy | undefined | null;
    sandbox?: string | undefined | null;
    scrolling?: string | undefined | null;
    seamless?: boolean | string | undefined | null;
    src?: string | undefined | null;
    srcdoc?: string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface ImgHTMLAttributes extends HTMLAttributes {
    alt?: string | undefined | null;
    crossorigin?: "anonymous" | "use-credentials" | "" | undefined | null;
    decoding?: "async" | "auto" | "sync" | undefined | null;
    fetchpriority?: "auto" | "high" | "low" | undefined | null;
    height?: number | string | undefined | null;
    loading?: "eager" | "lazy" | undefined | null;
    referrerpolicy?: HTMLAttributeReferrerPolicy | undefined | null;
    sizes?: string | undefined | null;
    src?: string | undefined | null;
    srcset?: string | undefined | null;
    usemap?: string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface InsHTMLAttributes extends HTMLAttributes {
    cite?: string | undefined | null;
    datetime?: string | undefined | null;
  }

  type HTMLInputTypeAttribute =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  interface InputHTMLAttributes extends HTMLAttributes {
    accept?: string | undefined | null;
    alt?: string | undefined | null;
    autocomplete?: string | undefined | null;
    autocorrect?: string | undefined | null;
    capture?: boolean | string | undefined | null;
    checked?: boolean | string | undefined | null;
    crossorigin?: string | undefined | null;
    dirname?: string | undefined | null;
    disabled?: boolean | string | undefined | null;
    form?: string | undefined | null;
    formaction?: string | undefined | null;
    formenctype?: string | undefined | null;
    formmethod?: string | undefined | null;
    formnovalidate?: boolean | string | undefined | null;
    formtarget?: string | undefined | null;
    height?: number | string | undefined | null;
    list?: string | undefined | null;
    max?: number | string | undefined | null;
    maxlength?: number | string | undefined | null;
    min?: number | string | undefined | null;
    minlength?: number | string | undefined | null;
    multiple?: boolean | string | undefined | null;
    name?: string | undefined | null;
    pattern?: string | undefined | null;
    placeholder?: string | undefined | null;
    readonly?: boolean | string | undefined | null;
    required?: boolean | string | undefined | null;
    size?: number | string | undefined | null;
    src?: string | undefined | null;
    step?: number | string | undefined | null;
    type?: HTMLInputTypeAttribute | undefined | null;
    value?: string | string[] | number | undefined | null;
    width?: number | string | undefined | null;
  }

  interface LabelHTMLAttributes extends HTMLAttributes {
    form?: string | undefined | null;
    for?: string | undefined | null;
  }

  interface LiHTMLAttributes extends HTMLAttributes {
    value?: string | number | undefined | null;
  }

  interface LinkHTMLAttributes extends HTMLAttributes {
    as?: string | undefined | null;
    crossorigin?: boolean | string | undefined | null;
    href?: string | URL | undefined | null;
    hreflang?: string | undefined | null;
    fetchpriority?: "auto" | "high" | "low" | undefined | null;
    integrity?: string | undefined | null;
    media?: string | undefined | null;
    imagesrcset?: string | undefined | null;
    imagesizes?: string | undefined | null;
    referrerpolicy?: HTMLAttributeReferrerPolicy | undefined | null;
    rel?: string | undefined | null;
    sizes?: string | undefined | null;
    type?: string | undefined | null;
    charset?: string | undefined | null;
  }

  interface MapHTMLAttributes extends HTMLAttributes {
    name?: string | undefined | null;
  }

  interface MenuHTMLAttributes extends HTMLAttributes {
    type?: string | undefined | null;
  }

  interface MediaHTMLAttributes extends HTMLAttributes {
    autoplay?: boolean | string | undefined | null;
    controls?: boolean | string | undefined | null;
    controlslist?: string | undefined | null;
    crossorigin?: string | undefined | null;
    loop?: boolean | string | undefined | null;
    mediagroup?: string | undefined | null;
    muted?: boolean | string | undefined | null;
    playsinline?: boolean | string | undefined | null;
    preload?: string | undefined | null;
    src?: string | undefined | null;
  }

  interface MetaHTMLAttributes extends HTMLAttributes {
    charset?: string | undefined | null;
    content?: string | URL | undefined | null;
    "http-equiv"?: string | undefined | null;
    name?: string | undefined | null;
    media?: string | undefined | null;
  }

  interface MeterHTMLAttributes extends HTMLAttributes {
    form?: string | undefined | null;
    high?: number | string | undefined | null;
    low?: number | string | undefined | null;
    max?: number | string | undefined | null;
    min?: number | string | undefined | null;
    optimum?: number | string | undefined | null;
    value?: string | string[] | number | undefined | null;
  }

  interface QuoteHTMLAttributes extends HTMLAttributes {
    cite?: string | undefined | null;
  }

  interface ObjectHTMLAttributes extends HTMLAttributes {
    classid?: string | undefined | null;
    data?: string | undefined | null;
    form?: string | undefined | null;
    height?: number | string | undefined | null;
    name?: string | undefined | null;
    type?: string | undefined | null;
    usemap?: string | undefined | null;
    width?: number | string | undefined | null;
    wmode?: string | undefined | null;
  }

  interface OlHTMLAttributes extends HTMLAttributes {
    reversed?: boolean | string | undefined | null;
    start?: number | string | undefined | null;
    type?: "1" | "a" | "A" | "i" | "I" | undefined | null;
  }

  interface OptgroupHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | string | undefined | null;
    label?: string | undefined | null;
  }

  interface OptionHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | string | undefined | null;
    label?: string | undefined | null;
    selected?: boolean | string | undefined | null;
    value?: string | string[] | number | undefined | null;
  }

  interface OutputHTMLAttributes extends HTMLAttributes {
    form?: string | undefined | null;
    for?: string | undefined | null;
    name?: string | undefined | null;
  }

  interface ProgressHTMLAttributes extends HTMLAttributes {
    max?: number | string | undefined | null;
    value?: string | string[] | number | undefined | null;
  }

  interface SlotHTMLAttributes extends HTMLAttributes {
    name?: string | undefined | null;
  }

  interface ScriptHTMLAttributes extends HTMLAttributes {
    async?: boolean | string | undefined | null;
    charset?: string | undefined | null;
    crossorigin?: string | undefined | null;
    defer?: boolean | string | undefined | null;
    fetchpriority?: "auto" | "high" | "low" | undefined | null;
    integrity?: string | undefined | null;
    nomodule?: boolean | string | undefined | null;
    nonce?: string | undefined | null;
    src?: string | undefined | null;
    type?: string | undefined | null;
  }

  interface SelectHTMLAttributes extends HTMLAttributes {
    autocomplete?: string | undefined | null;
    autocorrect?: string | undefined | null;
    disabled?: boolean | string | undefined | null;
    form?: string | undefined | null;
    multiple?: boolean | string | undefined | null;
    name?: string | undefined | null;
    required?: boolean | string | undefined | null;
    size?: number | string | undefined | null;
    value?: string | string[] | number | undefined | null;
  }

  interface SourceHTMLAttributes extends HTMLAttributes {
    height?: number | string | undefined | null;
    media?: string | undefined | null;
    sizes?: string | undefined | null;
    src?: string | undefined | null;
    srcset?: string | undefined | null;
    type?: string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface StyleHTMLAttributes extends HTMLAttributes {
    media?: string | undefined | null;
    nonce?: string | undefined | null;
    scoped?: boolean | string | undefined | null;
    type?: string | undefined | null;
  }

  interface TableHTMLAttributes extends HTMLAttributes {
    align?: "left" | "center" | "right" | undefined | null;
    bgcolor?: string | undefined | null;
    border?: string | number | undefined | null;
    cellpadding?: number | string | undefined | null;
    cellspacing?: number | string | undefined | null;
    frame?: boolean | "false" | "true" | undefined | null;
    rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined | null;
    summary?: string | undefined | null;
    width?: number | string | undefined | null;
  }

  interface TextareaHTMLAttributes extends HTMLAttributes {
    autocomplete?: string | undefined | null;
    autocorrect?: string | undefined | null;
    cols?: number | string | undefined | null;
    dirname?: string | undefined | null;
    disabled?: boolean | string | undefined | null;
    form?: string | undefined | null;
    maxlength?: number | string | undefined | null;
    minlength?: number | string | undefined | null;
    name?: string | undefined | null;
    placeholder?: string | undefined | null;
    readonly?: boolean | string | undefined | null;
    required?: boolean | string | undefined | null;
    rows?: number | string | undefined | null;
    value?: string | string[] | number | undefined | null;
    wrap?: string | undefined | null;
  }

  interface TdHTMLAttributes extends HTMLAttributes {
    align?: "left" | "center" | "right" | "justify" | "char" | undefined | null;
    colspan?: number | string | undefined | null;
    headers?: string | undefined | null;
    rowspan?: number | string | undefined | null;
    scope?: string | undefined | null;
    abbr?: string | undefined | null;
    valign?: "top" | "middle" | "bottom" | "baseline" | undefined | null;
  }

  interface ThHTMLAttributes extends HTMLAttributes {
    align?: "left" | "center" | "right" | "justify" | "char" | undefined | null;
    colspan?: number | string | undefined | null;
    headers?: string | undefined | null;
    rowspan?: number | string | undefined | null;
    scope?: string | undefined | null;
    abbr?: string | undefined | null;
  }

  interface TimeHTMLAttributes extends HTMLAttributes {
    datetime?: string | undefined | null;
  }

  interface TrackHTMLAttributes extends HTMLAttributes {
    default?: boolean | string | undefined | null;
    kind?: string | undefined | null;
    label?: string | undefined | null;
    src?: string | undefined | null;
    srclang?: string | undefined | null;
  }

  interface VideoHTMLAttributes extends MediaHTMLAttributes {
    height?: number | string | undefined | null;
    playsinline?: boolean | string | undefined | null;
    poster?: string | undefined | null;
    width?: number | string | undefined | null;
    disablepictureinpicture?: boolean | string | undefined | null;
  }

  export type IntrinsicAttributes<
    A extends HTMLAttributes,
    T extends EventTarget
  > = Computed<A> &
    EventHandlers<T> & {
      ref?: Signal<T | null>;
      [customAttr: string]: any;
    };

  export interface IntrinsicElements {
    a: IntrinsicAttributes<AnchorHTMLAttributes, HTMLAnchorElement>;
    abbr: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    address: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    area: IntrinsicAttributes<AreaHTMLAttributes, HTMLAreaElement>;
    article: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    aside: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    audio: IntrinsicAttributes<AudioHTMLAttributes, HTMLAudioElement>;
    b: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    base: IntrinsicAttributes<BaseHTMLAttributes, HTMLBaseElement>;
    bdi: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    bdo: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    blockquote: IntrinsicAttributes<BlockquoteHTMLAttributes, HTMLQuoteElement>;
    body: IntrinsicAttributes<HTMLAttributes, HTMLBodyElement>;
    br: IntrinsicAttributes<HTMLAttributes, HTMLBRElement>;
    button: IntrinsicAttributes<ButtonHTMLAttributes, HTMLButtonElement>;
    canvas: IntrinsicAttributes<CanvasHTMLAttributes, HTMLCanvasElement>;
    caption: IntrinsicAttributes<HTMLAttributes, HTMLTableCaptionElement>;
    cite: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    code: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    col: IntrinsicAttributes<ColHTMLAttributes, HTMLTableColElement>;
    colgroup: IntrinsicAttributes<ColgroupHTMLAttributes, HTMLTableColElement>;
    data: IntrinsicAttributes<DataHTMLAttributes, HTMLDataElement>;
    datalist: IntrinsicAttributes<HTMLAttributes, HTMLDataListElement>;
    dd: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    del: IntrinsicAttributes<DelHTMLAttributes, HTMLModElement>;
    details: IntrinsicAttributes<DetailsHTMLAttributes, HTMLDetailsElement>;
    dfn: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    dialog: IntrinsicAttributes<DialogHTMLAttributes, HTMLDialogElement>;
    div: IntrinsicAttributes<HTMLAttributes, HTMLDivElement>;
    dl: IntrinsicAttributes<HTMLAttributes, HTMLDListElement>;
    dt: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    em: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    embed: IntrinsicAttributes<EmbedHTMLAttributes, HTMLEmbedElement>;
    fieldset: IntrinsicAttributes<FieldsetHTMLAttributes, HTMLFieldSetElement>;
    figcaption: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    figure: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    footer: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    form: IntrinsicAttributes<FormHTMLAttributes, HTMLFormElement>;
    h1: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    h2: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    h3: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    h4: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    h5: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    h6: IntrinsicAttributes<HTMLAttributes, HTMLHeadingElement>;
    head: IntrinsicAttributes<HTMLAttributes, HTMLHeadElement>;
    header: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    hgroup: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    hr: IntrinsicAttributes<HTMLAttributes, HTMLHRElement>;
    html: IntrinsicAttributes<HtmlHTMLAttributes, HTMLHtmlElement>;
    i: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    iframe: IntrinsicAttributes<IframeHTMLAttributes, HTMLIFrameElement>;
    img: IntrinsicAttributes<ImgHTMLAttributes, HTMLImageElement>;
    input: IntrinsicAttributes<InputHTMLAttributes, HTMLInputElement>;
    ins: IntrinsicAttributes<InsHTMLAttributes, HTMLModElement>;
    kbd: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    label: IntrinsicAttributes<LabelHTMLAttributes, HTMLLabelElement>;
    legend: IntrinsicAttributes<HTMLAttributes, HTMLLegendElement>;
    li: IntrinsicAttributes<LiHTMLAttributes, HTMLLIElement>;
    link: IntrinsicAttributes<LinkHTMLAttributes, HTMLLinkElement>;
    main: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    map: IntrinsicAttributes<MapHTMLAttributes, HTMLMapElement>;
    mark: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    menu: IntrinsicAttributes<MenuHTMLAttributes, HTMLMenuElement>;
    meta: IntrinsicAttributes<MetaHTMLAttributes, HTMLMetaElement>;
    meter: IntrinsicAttributes<MeterHTMLAttributes, HTMLMeterElement>;
    nav: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    noscript: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    object: IntrinsicAttributes<ObjectHTMLAttributes, HTMLObjectElement>;
    ol: IntrinsicAttributes<OlHTMLAttributes, HTMLOListElement>;
    optgroup: IntrinsicAttributes<OptgroupHTMLAttributes, HTMLOptGroupElement>;
    option: IntrinsicAttributes<OptionHTMLAttributes, HTMLOptionElement>;
    output: IntrinsicAttributes<OutputHTMLAttributes, HTMLOutputElement>;
    p: IntrinsicAttributes<HTMLAttributes, HTMLParagraphElement>;
    picture: IntrinsicAttributes<HTMLAttributes, HTMLPictureElement>;
    pre: IntrinsicAttributes<HTMLAttributes, HTMLPreElement>;
    progress: IntrinsicAttributes<ProgressHTMLAttributes, HTMLProgressElement>;
    q: IntrinsicAttributes<QuoteHTMLAttributes, HTMLQuoteElement>;
    rp: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    rt: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    ruby: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    s: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    samp: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    slot: IntrinsicAttributes<SlotHTMLAttributes, HTMLSlotElement>;
    script: IntrinsicAttributes<ScriptHTMLAttributes, HTMLScriptElement>;
    search: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    section: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    select: IntrinsicAttributes<SelectHTMLAttributes, HTMLSelectElement>;
    small: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    source: IntrinsicAttributes<SourceHTMLAttributes, HTMLSourceElement>;
    span: IntrinsicAttributes<HTMLAttributes, HTMLSpanElement>;
    strong: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    style: IntrinsicAttributes<StyleHTMLAttributes, HTMLStyleElement>;
    sub: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    summary: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    sup: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    table: IntrinsicAttributes<TableHTMLAttributes, HTMLTableElement>;
    tbody: IntrinsicAttributes<HTMLAttributes, HTMLTableSectionElement>;
    td: IntrinsicAttributes<TdHTMLAttributes, HTMLTableCellElement>;
    template: IntrinsicAttributes<HTMLAttributes, HTMLTemplateElement>;
    textarea: IntrinsicAttributes<TextareaHTMLAttributes, HTMLTextAreaElement>;
    tfoot: IntrinsicAttributes<HTMLAttributes, HTMLTableSectionElement>;
    th: IntrinsicAttributes<ThHTMLAttributes, HTMLTableCellElement>;
    thead: IntrinsicAttributes<HTMLAttributes, HTMLTableSectionElement>;
    time: IntrinsicAttributes<TimeHTMLAttributes, HTMLTimeElement>;
    title: IntrinsicAttributes<HTMLAttributes, HTMLTitleElement>;
    tr: IntrinsicAttributes<HTMLAttributes, HTMLTableRowElement>;
    track: IntrinsicAttributes<TrackHTMLAttributes, HTMLTrackElement>;
    u: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    ul: IntrinsicAttributes<HTMLAttributes, HTMLUListElement>;
    var: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
    video: IntrinsicAttributes<VideoHTMLAttributes, HTMLVideoElement>;
    wbr: IntrinsicAttributes<HTMLAttributes, HTMLElement>;
  }

  export type Renderizable = string | number;

  export type TextVNodeChild = Renderizable | (() => Renderizable);

  export type TextVNode = {
    tag: "text";
    children?: TextVNodeChild;
  };

  export type VNodeChild = boolean | undefined | null | TextVNodeChild | VNode;
  export type VNodeChildren = VNodeChild[];

  export type Tag = keyof IntrinsicElements;
  export type Props<T extends Tag> = IntrinsicElements[T];

  export type TagVNode<T extends Tag = Tag> = {
    tag: T;
    props: Props<T>;
    children: VNodeChildren;
    mounted?: () => void;
  };

  export type VNode<T extends Tag = Tag> = TagVNode<T> | TextVNode;

  export type Element = VNodeChild | VNodeChildren;

  export type FunctionComponent<
    C extends Element = Element,
    P extends Record<string, any> & { children?: C } = {}
  > = {
    (props: P): Element;
  };
}
