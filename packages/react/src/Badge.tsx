import "./internal/setup.js";
import "./internal/jsx.js";
import type { BadgeProps } from "./types.js";

export function Badge({ variant, size, color, className, style, id, children }: BadgeProps) {
  return (
    <zm-badge id={id} class={className} style={style} variant={variant} size={size} color={color}>
      {children}
    </zm-badge>
  );
}
