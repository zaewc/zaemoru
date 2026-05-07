import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { InputOtpProps } from "./types.js";

export function InputOtp({ parts, value, masked, onChange, className, style, id }: InputOtpProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ values: string[]; value: string }>(ref, "zm-change", (e) =>
    onChange?.(e.detail.value, e),
  );
  return (
    <zm-input-otp
      ref={ref}
      id={id}
      class={className}
      style={style}
      parts={parts}
      value={value}
      masked={masked}
    />
  );
}
