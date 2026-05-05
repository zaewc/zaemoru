import { forwardRef, useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { CheckboxProps } from "./types.js";

type CheckboxElement = HTMLElement & { checked: boolean };

export const Checkbox = forwardRef<HTMLElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked,
    disabled,
    name,
    value,
    label,
    onChange,
    className,
    style,
    id,
    children,
  },
  forwardedRef,
) {
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    if (forwardedRef) {
      if (typeof forwardedRef === "function") forwardedRef(el);
      else forwardedRef.current = el;
    }
  }, [forwardedRef]);

  useEffect(() => {
    const el = innerRef.current as CheckboxElement | null;
    if (!el) return;
    if (checked !== undefined && el.checked !== checked) el.checked = checked;
  }, [checked]);

  useEffect(() => {
    if (checked !== undefined) return;
    if (defaultChecked === undefined) return;
    const el = innerRef.current as CheckboxElement | null;
    if (el) el.checked = defaultChecked;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useCustomEvent<{ checked: boolean; value: string }>(
    innerRef,
    "zm-change",
    (e) => {
      onChange?.(e.detail.checked, e);
    },
  );

  return (
    <zm-checkbox
      ref={innerRef}
      id={id}
      class={className}
      style={style}
      name={name}
      value={value}
      label={label}
      {...(disabled ? { disabled: "" } : {})}
    >
      {children}
    </zm-checkbox>
  );
});
