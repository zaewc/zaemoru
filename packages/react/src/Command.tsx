import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { CommandItem, CommandProps } from "./types.js";

export function Command({ items = [], onSelect, className, style, id, placeholder }: CommandProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ value: string; item: CommandItem }>(ref, "zm-select", (e) => {
    onSelect?.(e.detail.value, e);
  });

  return (
    <zm-command
      ref={ref}
      id={id}
      class={className}
      style={style}
      placeholder={placeholder}
      items={items}
    />
  );
}
