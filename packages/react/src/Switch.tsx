import { forwardRef, useEffect, useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { SwitchProps } from "./types.js";

type SwitchElement = HTMLElement & { checked: boolean };

export const Switch = forwardRef<HTMLElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked,
    disabled,
    name,
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
    const el = innerRef.current as SwitchElement | null;
    if (!el) return;
    if (checked !== undefined && el.checked !== checked) el.checked = checked;
  }, [checked]);

  useEffect(() => {
    if (checked !== undefined) return;
    if (defaultChecked === undefined) return;
    const el = innerRef.current as SwitchElement | null;
    if (el) el.checked = defaultChecked;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useCustomEvent<{ checked: boolean }>(innerRef, "zm-change", (e) => {
    onChange?.(e.detail.checked, e);
  });

  return (
    <zm-switch
      ref={innerRef}
      id={id}
      class={className}
      style={style}
      name={name}
      label={label}
      {...(disabled ? { disabled: "" } : {})}
    >
      {children}
    </zm-switch>
  );
});
