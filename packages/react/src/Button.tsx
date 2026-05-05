import { forwardRef } from "react";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { ButtonProps } from "./types.js";

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "medium",
    disabled,
    fullWidth,
    loading,
    type = "button",
    onClick,
    className,
    style,
    id,
    children,
  },
  ref,
) {
  return (
    <zm-button
      ref={ref}
      id={id}
      class={className}
      style={style}
      variant={variant}
      size={size}
      type={type}
      {...(disabled ? { disabled: "" } : {})}
      {...(fullWidth ? { "full-width": "" } : {})}
      {...(loading ? { loading: "" } : {})}
      onClick={onClick}
    >
      {children}
    </zm-button>
  );
});
