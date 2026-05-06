import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { DialogProps } from "./types.js";

export function Dialog({
  open,
  kind = "alert",
  title,
  description,
  onClose,
  onCancel,
  onConfirm,
  className,
  style,
  id,
  children,
}: DialogProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent(ref, "zm-close", (e) => onClose?.(e));
  useCustomEvent(ref, "zm-cancel", (e) => onCancel?.(e));
  useCustomEvent(ref, "zm-confirm", (e) => onConfirm?.(e));

  return (
    <zm-dialog
      ref={ref}
      id={id}
      class={className}
      style={style}
      kind={kind}
      {...(open ? { open: "" } : {})}
      {...(title !== undefined ? { "dialog-title": title } : {})}
      description={description}
    >
      {children}
    </zm-dialog>
  );
}
