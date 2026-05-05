import { useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { TabProps } from "./types.js";

type TabElement = HTMLElement & {
  items: { value: string; label: string; badge?: string; disabled?: boolean }[];
  value: string;
};

export function Tab({
  items,
  value,
  variant = "underline",
  fullWidth,
  onChange,
  className,
  style,
  id,
}: TabProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current as TabElement | null;
    if (el) el.items = items;
  }, [items]);

  useEffect(() => {
    const el = ref.current as TabElement | null;
    if (el && value !== undefined && el.value !== value) el.value = value;
  }, [value]);

  useCustomEvent<{ value: string }>(ref, "zm-change", (e) =>
    onChange?.(e.detail.value, e),
  );

  return (
    <zm-tab
      ref={ref}
      id={id}
      class={className}
      style={style}
      variant={variant}
      {...(fullWidth ? { "full-width": "" } : {})}
    />
  );
}
