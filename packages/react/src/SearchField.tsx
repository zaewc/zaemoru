import { forwardRef, useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { SearchFieldProps } from "./types.js";

type SearchFieldElement = HTMLElement & { value: string };

export const SearchField = forwardRef<HTMLElement, SearchFieldProps>(function SearchField(
  {
    placeholder = "Search",
    value,
    defaultValue,
    disabled,
    name,
    onInput,
    onChange,
    onClear,
    className,
    style,
    id,
  },
  forwardedRef,
) {
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (forwardedRef) {
      if (typeof forwardedRef === "function") forwardedRef(el);
      else forwardedRef.current = el;
    }
  }, [forwardedRef]);

  useEffect(() => {
    const el = innerRef.current as SearchFieldElement | null;
    if (!el) return;
    if (value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    if (value !== undefined) return;
    if (defaultValue === undefined) return;
    const el = innerRef.current as SearchFieldElement | null;
    if (el && el.value !== defaultValue) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: string }>(innerRef, "zm-input", (e) => onInput?.(e.detail.value, e));
  useCustomEvent<{ value: string }>(innerRef, "zm-change", (e) => onChange?.(e.detail.value, e));
  useCustomEvent(innerRef, "zm-clear", () => onClear?.());

  return (
    <zm-search-field
      ref={innerRef}
      id={id}
      class={className}
      style={style}
      placeholder={placeholder}
      name={name}
      {...(disabled ? { disabled: "" } : {})}
    />
  );
});
