import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { ModalProps } from "./types.js";

export function Modal({
  open,
  title,
  description,
  closeOnBackdrop = true,
  actions,
  onClose,
  className,
  style,
  id,
  children,
}: ModalProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent(ref, "zm-close", (e) => onClose?.(e));

  return (
    <zm-modal
      ref={ref}
      id={id}
      class={className}
      style={style}
      {...(open ? { open: "" } : {})}
      {...(title !== undefined ? { "modal-title": title } : {})}
      description={description}
      {...(closeOnBackdrop ? { "close-on-backdrop": "" } : {})}
    >
      {children}
      {actions !== undefined ? <span slot="actions">{actions}</span> : null}
    </zm-modal>
  );
}
