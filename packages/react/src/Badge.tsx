import "./internal/setup.js";
import "./internal/jsx.js";
import type { BadgeProps } from "./types.js";

export function Badge({
  variant = "neutral",
  size = "small",
  className,
  style,
  id,
  children,
}: BadgeProps) {
  return (
    <zm-badge
      id={id}
      class={className}
      style={style}
      variant={variant}
      size={size}
    >
      {children}
    </zm-badge>
  );
}
