import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { SegmentedControlProps } from "./types.js";

type SegmentedElement = HTMLElement & {
  options: { value: string; label: string; disabled?: boolean }[];
  value: string;
};

export function SegmentedControl({
  options,
  value,
  fullWidth,
  onChange,
  className,
  style,
  id,
}: SegmentedControlProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as SegmentedElement | null;
    if (el) el.options = options;
  }, [options]);

  useEffect(() => {
    const el = ref.current as SegmentedElement | null;
    if (el && value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useCustomEvent<{ value: string }>(ref, "zm-change", (e) =>
    onChange?.(e.detail.value, e),
  );

  return (
    <zm-segmented-control
      ref={ref}
      id={id}
      class={className}
      style={style}
      {...(fullWidth ? { "full-width": "" } : {})}
    />
  );
}
