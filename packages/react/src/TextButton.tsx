import "./internal/setup.js";
import "./internal/jsx.js";
import type { TextButtonProps } from "./types.js";

export function TextButton({
  tone = "primary",
  size = "small",
  disabled,
  onClick,
  className,
  style,
  id,
  children,
}: TextButtonProps) {
  return (
    <zm-text-button
      id={id}
      class={className}
      style={style}
      tone={tone}
      size={size}
      onClick={onClick}
      {...(disabled ? { disabled: "" } : {})}
    >
      {children}
    </zm-text-button>
  );
}
