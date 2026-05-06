import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { StepperProps } from "./types.js";

type StepperElement = HTMLElement & { value: number };

export function Stepper({
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
}: StepperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as StepperElement | null;
    if (!el) return;
    if (value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    if (value !== undefined) return;
    if (defaultValue === undefined) return;
    const el = ref.current as StepperElement | null;
    if (el) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: number }>(ref, "zm-change", (e) => onChange?.(e.detail.value, e));

  return (
    <zm-stepper
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
