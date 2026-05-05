import "./internal/setup.js";
import "./internal/jsx.js";
import type { SpinnerProps } from "./types.js";

export function Spinner({
  size = "medium",
  tone = "default",
  label = "Loading",
  className,
  style,
  id,
}: SpinnerProps) {
  return (
    <zm-spinner
      id={id}
      class={className}
      style={style}
      size={size}
      tone={tone}
      label={label}
    />
  );
}
