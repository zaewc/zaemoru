import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { RatingProps } from "./types.js";

type RatingElement = HTMLElement & { value: number };

export function Rating({
  value,
  defaultValue,
  max = 5,
  size = "medium",
  readOnly,
  disabled,
  onChange,
  className,
  style,
  id,
}: RatingProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as RatingElement | null;
    if (!el) return;
    if (value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useEffect(() => {
    if (value !== undefined) return;
    if (defaultValue === undefined) return;
    const el = ref.current as RatingElement | null;
    if (el) el.value = defaultValue;
  }, []);

  useCustomEvent<{ value: number }>(ref, "zm-change", (e) => onChange?.(e.detail.value, e));

  return (
    <zm-rating
      ref={ref}
      id={id}
      class={className}
      style={style}
      max={max}
      size={size}
      {...(readOnly ? { readonly: "" } : {})}
      {...(disabled ? { disabled: "" } : {})}
    />
  );
}
