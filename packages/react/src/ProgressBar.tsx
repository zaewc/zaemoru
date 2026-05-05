import "./internal/setup.js";
import "./internal/jsx.js";
import type { ProgressBarProps } from "./types.js";

export function ProgressBar({
  value = 0,
  max = 100,
  indeterminate,
  tone = "primary",
  size = "medium",
  className,
  style,
  id,
}: ProgressBarProps) {
  return (
    <zm-progress-bar
      id={id}
      class={className}
      style={style}
      value={value}
      max={max}
      tone={tone}
      size={size}
      {...(indeterminate ? { indeterminate: "" } : {})}
    />
  );
}
