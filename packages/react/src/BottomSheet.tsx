import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { BottomSheetProps } from "./types.js";

export function BottomSheet({
  open,
  title,
  closeOnBackdrop = true,
  onClose,
  className,
  style,
  id,
  children,
}: BottomSheetProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent(ref, "zm-close", (e) => onClose?.(e));

  return (
    <zm-bottom-sheet
      ref={ref}
      id={id}
      class={className}
      style={style}
      {...(open ? { open: "" } : {})}
      {...(title !== undefined ? { "sheet-title": title } : {})}
      {...(closeOnBackdrop ? { "close-on-backdrop": "" } : {})}
    >
      {children}
    </zm-bottom-sheet>
  );
}
