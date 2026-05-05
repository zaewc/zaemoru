import { forwardRef, useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { TextFieldProps } from "./types.js";

type TextFieldElement = HTMLElement & { value: string };

export const TextField = forwardRef<HTMLElement, TextFieldProps>(
  function TextField(
    {
      label,
      placeholder,
      value,
      defaultValue,
      type = "text",
      size = "medium",
      disabled,
      invalid,
      helperText,
      errorMessage,
      name,
      autoComplete,
      onChange,
      onInput,
      className,
      style,
      id,
    },
    forwardedRef,
  ) {
    const innerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const el = innerRef.current as TextFieldElement | null;
      if (!el) return;
      if (forwardedRef) {
        if (typeof forwardedRef === "function") forwardedRef(el);
        else forwardedRef.current = el;
      }
    }, [forwardedRef]);

    useEffect(() => {
      const el = innerRef.current as TextFieldElement | null;
      if (!el) return;
      if (value !== undefined && el.value !== value) el.value = value;
    }, [value]);

    useEffect(() => {
      if (value !== undefined) return;
      if (defaultValue === undefined) return;
      const el = innerRef.current as TextFieldElement | null;
      if (el && el.value !== defaultValue) el.value = defaultValue;
      // run once on mount when uncontrolled
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useCustomEvent<{ value: string }>(innerRef, "zm-input", (e) => {
      onInput?.(e.detail.value, e);
    });
    useCustomEvent<{ value: string }>(innerRef, "zm-change", (e) => {
      onChange?.(e.detail.value, e);
    });

    return (
      <zm-text-field
        ref={innerRef}
        id={id}
        class={className}
        style={style}
        label={label}
        placeholder={placeholder}
        type={type}
        size={size}
        name={name}
        autocomplete={autoComplete}
        {...(disabled ? { disabled: "" } : {})}
        {...(invalid ? { invalid: "" } : {})}
        {...(helperText !== undefined ? { "helper-text": helperText } : {})}
        {...(errorMessage !== undefined ? { "error-message": errorMessage } : {})}
      />
    );
  },
);
