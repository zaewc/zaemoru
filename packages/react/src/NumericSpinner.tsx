import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { NumericSpinnerProps } from "./types.js";

type NumericSpinnerElement = HTMLElement & { value: number };

export function NumericSpinner({
  value,
  defaultValue,
  min = 0,
  max,
  step = 1,
  disabled,
  onChange,
  className,
  style,
  id,
}: NumericSpinnerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as NumericSpinnerElement | null;
    if (el && value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    const el = ref.current as NumericSpinnerElement | null;
    if (el && value === undefined && defaultValue !== undefined) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: number }>(ref, "zm-change", (e) => onChange?.(e.detail.value, e));

  return (
    <zm-numeric-spinner
      ref={ref}
      id={id}
      class={className}
      style={style}
      min={min}
      step={step}
      {...(max !== undefined ? { max } : {})}
      {...(disabled ? { disabled: "" } : {})}
    />
  );
}
