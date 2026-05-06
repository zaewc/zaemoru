import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { SliderProps } from "./types.js";

type SliderElement = HTMLElement & { value: number };

export function Slider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  name,
  onInput,
  onChange,
  className,
  style,
  id,
}: SliderProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as SliderElement | null;
    if (!el) return;
    if (value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    if (value !== undefined) return;
    if (defaultValue === undefined) return;
    const el = ref.current as SliderElement | null;
    if (el) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: number }>(ref, "zm-input", (e) => onInput?.(e.detail.value, e));
  useCustomEvent<{ value: number }>(ref, "zm-change", (e) => onChange?.(e.detail.value, e));

  return (
    <zm-slider
      ref={ref}
      id={id}
      class={className}
      style={style}
      min={min}
      max={max}
      step={step}
      name={name}
      {...(disabled ? { disabled: "" } : {})}
    />
  );
}
