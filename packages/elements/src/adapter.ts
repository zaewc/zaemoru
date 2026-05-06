export type ZaemoruComponentDefinition = {
  name: string;
  tag: `zm-${string}`;
  attributes: Record<string, string>;
  booleanAttributes?: readonly string[];
  properties?: readonly string[];
  events?: Record<string, string>;
};

const baseAttributes: Record<string, string> = {
  id: "id",
  className: "class",
  class: "class",
  slot: "slot",
  title: "title",
} as const;

export const zaemoruComponents = [
  {
    name: "Agreement",
    tag: "zm-agreement",
    attributes: { ...baseAttributes, checked: "checked", label: "label" },
    booleanAttributes: ["checked"],
    events: { change: "zm-change" },
  },
  {
    name: "AlphabetKeypad",
    tag: "zm-alphabet-keypad",
    attributes: { ...baseAttributes, showSubmit: "show-submit" },
    booleanAttributes: ["showSubmit"],
    events: { key: "zm-key" },
  },
  {
    name: "Asset",
    tag: "zm-asset",
    attributes: { ...baseAttributes, src: "src", alt: "alt", shape: "shape" },
  },
  {
    name: "Badge",
    tag: "zm-badge",
    attributes: { ...baseAttributes, variant: "variant", size: "size" },
  },
  {
    name: "BarChart",
    tag: "zm-bar-chart",
    attributes: baseAttributes,
    properties: ["data"],
  },
  {
    name: "BoardRow",
    tag: "zm-board-row",
    attributes: {
      ...baseAttributes,
      eyebrow: "eyebrow",
      title: "title",
      description: "description",
      interactive: "interactive",
    },
    booleanAttributes: ["interactive"],
  },
  {
    name: "Border",
    tag: "zm-border",
    attributes: { ...baseAttributes, orientation: "orientation", tone: "tone", thick: "thick" },
    booleanAttributes: ["thick"],
  },
  {
    name: "BottomCta",
    tag: "zm-bottom-cta",
    attributes: { ...baseAttributes, layout: "layout", fixed: "fixed" },
    booleanAttributes: ["fixed"],
  },
  {
    name: "BottomInfo",
    tag: "zm-bottom-info",
    attributes: { ...baseAttributes, tone: "tone" },
  },
  {
    name: "BottomSheet",
    tag: "zm-bottom-sheet",
    attributes: {
      ...baseAttributes,
      open: "open",
      title: "sheet-title",
      sheetTitle: "sheet-title",
      closeOnBackdrop: "close-on-backdrop",
    },
    booleanAttributes: ["open", "closeOnBackdrop"],
    events: { close: "zm-close" },
  },
  {
    name: "Bubble",
    tag: "zm-bubble",
    attributes: { ...baseAttributes, tone: "tone", placement: "placement" },
  },
  {
    name: "Button",
    tag: "zm-button",
    attributes: {
      ...baseAttributes,
      variant: "variant",
      size: "size",
      disabled: "disabled",
      fullWidth: "full-width",
      loading: "loading",
      type: "type",
    },
    booleanAttributes: ["disabled", "fullWidth", "loading"],
  },
  {
    name: "Card",
    tag: "zm-card",
    attributes: { ...baseAttributes, elevation: "elevation", padding: "padding" },
  },
  {
    name: "Checkbox",
    tag: "zm-checkbox",
    attributes: {
      ...baseAttributes,
      checked: "checked",
      disabled: "disabled",
      name: "name",
      value: "value",
      label: "label",
    },
    booleanAttributes: ["checked", "disabled"],
    events: { change: "zm-change" },
  },
  {
    name: "Dialog",
    tag: "zm-dialog",
    attributes: {
      ...baseAttributes,
      open: "open",
      kind: "kind",
      title: "dialog-title",
      dialogTitle: "dialog-title",
      description: "description",
    },
    booleanAttributes: ["open"],
    events: { close: "zm-close", cancel: "zm-cancel", confirm: "zm-confirm" },
  },
  {
    name: "GridList",
    tag: "zm-grid-list",
    attributes: { ...baseAttributes, columns: "columns", gap: "gap" },
  },
  {
    name: "Heading",
    tag: "zm-heading",
    attributes: { ...baseAttributes, level: "level", size: "size" },
  },
  {
    name: "Highlight",
    tag: "zm-highlight",
    attributes: { ...baseAttributes, tone: "tone" },
  },
  {
    name: "IconButton",
    tag: "zm-icon-button",
    attributes: {
      ...baseAttributes,
      variant: "variant",
      size: "size",
      disabled: "disabled",
      ariaLabel: "aria-label",
    },
    booleanAttributes: ["disabled"],
  },
  {
    name: "ListFooter",
    tag: "zm-list-footer",
    attributes: { ...baseAttributes, description: "description" },
  },
  {
    name: "ListHeader",
    tag: "zm-list-header",
    attributes: { ...baseAttributes, title: "title", description: "description" },
  },
  {
    name: "ListRow",
    tag: "zm-list-row",
    attributes: {
      ...baseAttributes,
      title: "title",
      description: "description",
      interactive: "interactive",
      chevron: "chevron",
    },
    booleanAttributes: ["interactive", "chevron"],
  },
  {
    name: "Loader",
    tag: "zm-loader",
    attributes: { ...baseAttributes, size: "size", label: "label" },
  },
  {
    name: "Menu",
    tag: "zm-menu",
    attributes: baseAttributes,
    properties: ["items"],
    events: { select: "zm-select" },
  },
  {
    name: "Modal",
    tag: "zm-modal",
    attributes: {
      ...baseAttributes,
      open: "open",
      title: "modal-title",
      modalTitle: "modal-title",
      description: "description",
      closeOnBackdrop: "close-on-backdrop",
    },
    booleanAttributes: ["open", "closeOnBackdrop"],
    events: { close: "zm-close" },
  },
  {
    name: "NumberKeypad",
    tag: "zm-number-keypad",
    attributes: { ...baseAttributes, showSubmit: "show-submit" },
    booleanAttributes: ["showSubmit"],
    events: { key: "zm-key" },
  },
  {
    name: "NumericSpinner",
    tag: "zm-numeric-spinner",
    attributes: {
      ...baseAttributes,
      value: "value",
      min: "min",
      max: "max",
      step: "step",
      disabled: "disabled",
    },
    booleanAttributes: ["disabled"],
    events: { change: "zm-change" },
  },
  {
    name: "Paragraph",
    tag: "zm-paragraph",
    attributes: { ...baseAttributes, size: "size", tone: "tone" },
  },
  {
    name: "Post",
    tag: "zm-post",
    attributes: {
      ...baseAttributes,
      title: "post-title",
      postTitle: "post-title",
      description: "description",
      meta: "meta",
    },
  },
  {
    name: "ProgressBar",
    tag: "zm-progress-bar",
    attributes: {
      ...baseAttributes,
      value: "value",
      max: "max",
      indeterminate: "indeterminate",
      tone: "tone",
      size: "size",
    },
    booleanAttributes: ["indeterminate"],
  },
  {
    name: "ProgressStepper",
    tag: "zm-progress-stepper",
    attributes: { ...baseAttributes, value: "value", total: "total" },
  },
  {
    name: "Rating",
    tag: "zm-rating",
    attributes: {
      ...baseAttributes,
      value: "value",
      max: "max",
      size: "size",
      readOnly: "readonly",
      disabled: "disabled",
    },
    booleanAttributes: ["readOnly", "disabled"],
    events: { change: "zm-change" },
  },
  {
    name: "Result",
    tag: "zm-result",
    attributes: { ...baseAttributes, tone: "tone", title: "title", description: "description" },
  },
  {
    name: "SearchField",
    tag: "zm-search-field",
    attributes: {
      ...baseAttributes,
      placeholder: "placeholder",
      value: "value",
      disabled: "disabled",
      name: "name",
    },
    booleanAttributes: ["disabled"],
    events: { input: "zm-input", change: "zm-change", clear: "zm-clear" },
  },
  {
    name: "Section",
    tag: "zm-section",
    attributes: { ...baseAttributes, title: "title", description: "description", gap: "gap" },
  },
  {
    name: "SecureKeypad",
    tag: "zm-secure-keypad",
    attributes: { ...baseAttributes, showSubmit: "show-submit" },
    booleanAttributes: ["showSubmit"],
    events: { key: "zm-key" },
  },
  {
    name: "SegmentedControl",
    tag: "zm-segmented-control",
    attributes: { ...baseAttributes, value: "value", fullWidth: "full-width" },
    booleanAttributes: ["fullWidth"],
    properties: ["options"],
    events: { change: "zm-change" },
  },
  {
    name: "Skeleton",
    tag: "zm-skeleton",
    attributes: { ...baseAttributes, shape: "shape", width: "width", height: "height" },
  },
  {
    name: "Slider",
    tag: "zm-slider",
    attributes: {
      ...baseAttributes,
      value: "value",
      min: "min",
      max: "max",
      step: "step",
      disabled: "disabled",
      name: "name",
    },
    booleanAttributes: ["disabled"],
    events: { input: "zm-input", change: "zm-change" },
  },
  {
    name: "Spinner",
    tag: "zm-spinner",
    attributes: { ...baseAttributes, size: "size", tone: "tone", label: "label" },
  },
  {
    name: "SplitTextField",
    tag: "zm-split-text-field",
    attributes: { ...baseAttributes, parts: "parts", placeholder: "placeholder" },
    events: { change: "zm-change" },
  },
  {
    name: "Stepper",
    tag: "zm-stepper",
    attributes: {
      ...baseAttributes,
      value: "value",
      min: "min",
      max: "max",
      step: "step",
      disabled: "disabled",
    },
    booleanAttributes: ["disabled"],
    events: { change: "zm-change" },
  },
  {
    name: "Switch",
    tag: "zm-switch",
    attributes: {
      ...baseAttributes,
      checked: "checked",
      disabled: "disabled",
      name: "name",
      label: "label",
    },
    booleanAttributes: ["checked", "disabled"],
    events: { change: "zm-change" },
  },
  {
    name: "Tab",
    tag: "zm-tab",
    attributes: { ...baseAttributes, value: "value", variant: "variant", fullWidth: "full-width" },
    booleanAttributes: ["fullWidth"],
    properties: ["items"],
    events: { change: "zm-change" },
  },
  {
    name: "TableRow",
    tag: "zm-table-row",
    attributes: {
      ...baseAttributes,
      label: "label",
      value: "value",
      emphasis: "emphasis",
      align: "align",
    },
    booleanAttributes: ["emphasis"],
  },
  {
    name: "Text",
    tag: "zm-text",
    attributes: { ...baseAttributes, size: "size", weight: "weight", tone: "tone" },
  },
  {
    name: "TextArea",
    tag: "zm-text-area",
    attributes: {
      ...baseAttributes,
      label: "label",
      placeholder: "placeholder",
      value: "value",
      rows: "rows",
      maxLength: "max-length",
      disabled: "disabled",
      invalid: "invalid",
      helperText: "helper-text",
      errorMessage: "error-message",
      name: "name",
    },
    booleanAttributes: ["disabled", "invalid"],
    events: { input: "zm-input", change: "zm-change" },
  },
  {
    name: "TextButton",
    tag: "zm-text-button",
    attributes: { ...baseAttributes, tone: "tone", size: "size", disabled: "disabled" },
    booleanAttributes: ["disabled"],
  },
  {
    name: "TextField",
    tag: "zm-text-field",
    attributes: {
      ...baseAttributes,
      label: "label",
      placeholder: "placeholder",
      value: "value",
      type: "type",
      size: "size",
      disabled: "disabled",
      invalid: "invalid",
      helperText: "helper-text",
      errorMessage: "error-message",
      name: "name",
      autoComplete: "autocomplete",
      autocomplete: "autocomplete",
    },
    booleanAttributes: ["disabled", "invalid"],
    events: { input: "zm-input", change: "zm-change" },
  },
  {
    name: "Toast",
    tag: "zm-toast",
    attributes: { ...baseAttributes, tone: "tone" },
  },
  {
    name: "Tooltip",
    tag: "zm-tooltip",
    attributes: {
      ...baseAttributes,
      text: "text",
      placement: "placement",
      open: "open",
    },
    booleanAttributes: ["open"],
  },
  {
    name: "Top",
    tag: "zm-top",
    attributes: {
      ...baseAttributes,
      title: "title",
      subtitle: "subtitle",
      variant: "variant",
      align: "align",
      sticky: "sticky",
    },
    booleanAttributes: ["sticky"],
  },
] as const satisfies readonly ZaemoruComponentDefinition[];

export type ZaemoruComponentName = (typeof zaemoruComponents)[number]["name"];
export type ZaemoruElementTag = (typeof zaemoruComponents)[number]["tag"];
export type ZaemoruComponentDefinitionFor<Name extends ZaemoruComponentName> = Extract<
  (typeof zaemoruComponents)[number],
  { name: Name }
>;

export const zaemoruComponentTags = Object.fromEntries(
  zaemoruComponents.map((component) => [component.name, component.tag]),
) as Record<ZaemoruComponentName, ZaemoruElementTag>;

export function isZaemoruElement(tag: string): tag is ZaemoruElementTag {
  return tag.startsWith("zm-");
}

export function getZaemoruComponent(nameOrTag: string): ZaemoruComponentDefinition | undefined {
  return (zaemoruComponents as readonly ZaemoruComponentDefinition[]).find(
    (component) => component.name === nameOrTag || component.tag === nameOrTag,
  );
}

export type ZaemoruAdapterProps = Record<string, unknown>;
export type ZaemoruAdapterAttrs = Record<string, string | number>;
export type ZaemoruEventHandler = (event: Event) => void;

const ignoredProps = new Set(["children", "ref", "key", "style"]);

export function toZaemoruAttributes(
  componentNameOrTag: string,
  props: ZaemoruAdapterProps = {},
): ZaemoruAdapterAttrs {
  const component = getZaemoruComponent(componentNameOrTag);
  const attributes = component?.attributes ?? baseAttributes;
  const booleanAttributes = new Set(component?.booleanAttributes ?? []);
  const next: ZaemoruAdapterAttrs = {};

  Object.entries(props).forEach(([key, value]) => {
    if (ignoredProps.has(key) || key.startsWith("on")) return;
    if (value === undefined || value === null || value === false) return;

    const attributeName =
      attributes[key] ?? key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    if (booleanAttributes.has(key)) {
      next[attributeName] = "";
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      next[attributeName] = value;
    }
  });

  return next;
}

export function applyZaemoruProps(
  element: HTMLElement,
  componentNameOrTag: string,
  props: ZaemoruAdapterProps = {},
) {
  const component = getZaemoruComponent(componentNameOrTag);
  const attributes = toZaemoruAttributes(componentNameOrTag, props);
  const appliedAttributes = Object.keys(attributes);
  const eventCleanups: Array<() => void> = [];

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, String(value));
  });

  component?.properties?.forEach((propertyName) => {
    if (propertyName in props) {
      (element as unknown as Record<string, unknown>)[propertyName] = props[propertyName];
    }
  });

  if (component?.events) {
    Object.entries(component.events).forEach(([eventKey, eventName]) => {
      const propName = `on${eventKey[0]?.toUpperCase()}${eventKey.slice(1)}`;
      const handler = props[propName];
      if (typeof handler !== "function") return;
      const listener = (event: Event) => (handler as ZaemoruEventHandler)(event);
      element.addEventListener(eventName, listener);
      eventCleanups.push(() => element.removeEventListener(eventName, listener));
    });
  }

  return () => {
    appliedAttributes.forEach((name) => element.removeAttribute(name));
    eventCleanups.forEach((cleanup) => cleanup());
  };
}

export function defineZaemoruElements() {
  return true;
}
