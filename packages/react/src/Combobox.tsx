import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { ComboboxOption, ComboboxProps } from "./types.js";

export function Combobox({
  options = [],
  onChange,
  className,
  style,
  id,
  label,
  placeholder,
  value,
}: ComboboxProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ value: string; item: ComboboxOption }>(ref, "zm-change", (e) => {
    onChange?.(e.detail.value, e);
  });

  return (
    <zm-combobox
      ref={ref}
      id={id}
      class={className}
      style={style}
      label={label}
      placeholder={placeholder}
      value={value}
      options={options}
    />
  );
}
