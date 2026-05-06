import { useRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { KeypadProps } from "./types.js";

export function AlphabetKeypad({ onKey, className, style, id }: KeypadProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ value: string }>(ref, "zm-key", (e) => onKey?.(e.detail.value, e));
  return <zm-alphabet-keypad ref={ref} id={id} class={className} style={style} />;
}
