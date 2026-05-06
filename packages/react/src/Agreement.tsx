import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { AgreementProps } from "./types.js";

export function Agreement({
  checked,
  label,
  onChange,
  className,
  style,
  id,
  children,
}: AgreementProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ checked: boolean }>(ref, "zm-change", (e) => onChange?.(e.detail.checked, e));
  return (
    <zm-agreement
      ref={ref}
      id={id}
      class={className}
      style={style}
      label={label}
      {...(checked ? { checked: "" } : {})}
    >
      {children}
    </zm-agreement>
  );
}
