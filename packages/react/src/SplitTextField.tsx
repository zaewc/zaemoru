import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { SplitTextFieldProps } from "./types.js";

export function SplitTextField({
  parts = 2,
  placeholder,
  onChange,
  className,
  style,
  id,
}: SplitTextFieldProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ values: string[]; value: string }>(ref, "zm-change", (e) =>
    onChange?.(e.detail.value, e),
  );
  return (
    <zm-split-text-field
      ref={ref}
      id={id}
      class={className}
      style={style}
      parts={parts}
      placeholder={placeholder}
    />
  );
}
