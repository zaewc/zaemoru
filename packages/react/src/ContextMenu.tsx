import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { ContextMenuProps, MenuItem } from "./types.js";

export function ContextMenu({
  items = [],
  onSelect,
  className,
  style,
  id,
  children,
}: ContextMenuProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ value: string; item: MenuItem }>(ref, "zm-select", (e) => {
    onSelect?.(e.detail.value, e);
  });

  return (
    <zm-context-menu ref={ref} id={id} class={className} style={style} items={items}>
      {children}
    </zm-context-menu>
  );
}
