import "./internal/setup.js";
import "./internal/jsx.js";
import type { IconButtonProps } from "./types.js";

export function IconButton({
  variant = "ghost",
  size = "medium",
  disabled,
  onClick,
  ariaLabel,
  className,
  style,
  id,
  children,
}: IconButtonProps) {
  return (
    <zm-icon-button
      id={id}
      class={className}
      style={style}
      variant={variant}
      size={size}
      aria-label={ariaLabel}
      onClick={onClick}
      {...(disabled ? { disabled: "" } : {})}
    >
      {children}
    </zm-icon-button>
  );
}
