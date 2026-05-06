import "./internal/setup.js";
import "./internal/jsx.js";
import type { BubbleProps } from "./types.js";

export function Bubble({
  tone = "neutral",
  placement = "start",
  className,
  style,
  id,
  children,
}: BubbleProps) {
  return (
    <zm-bubble id={id} class={className} style={style} tone={tone} placement={placement}>
      {children}
    </zm-bubble>
  );
}
