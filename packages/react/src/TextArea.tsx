import { forwardRef, useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { TextAreaProps } from "./types.js";

type TextAreaElement = HTMLElement & { value: string };

export const TextArea = forwardRef<HTMLElement, TextAreaProps>(function TextArea(
  {
    label,
    placeholder,
    value,
    defaultValue,
    rows = 3,
    maxLength,
    disabled,
    invalid,
    helperText,
    errorMessage,
    name,
    onInput,
    onChange,
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
    const el = innerRef.current as TextAreaElement | null;
    if (!el) return;
    if (value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    if (value !== undefined) return;
    if (defaultValue === undefined) return;
    const el = innerRef.current as TextAreaElement | null;
    if (el && el.value !== defaultValue) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: string }>(innerRef, "zm-input", (e) => {
    onInput?.(e.detail.value, e);
  });
  useCustomEvent<{ value: string }>(innerRef, "zm-change", (e) => {
    onChange?.(e.detail.value, e);
  });

  return (
    <zm-text-area
      ref={innerRef}
      id={id}
      class={className}
      style={style}
      label={label}
      placeholder={placeholder}
      rows={rows}
      name={name}
      {...(maxLength !== undefined ? { "max-length": maxLength } : {})}
      {...(disabled ? { disabled: "" } : {})}
      {...(invalid ? { invalid: "" } : {})}
      {...(helperText !== undefined ? { "helper-text": helperText } : {})}
      {...(errorMessage !== undefined ? { "error-message": errorMessage } : {})}
    />
  );
});
