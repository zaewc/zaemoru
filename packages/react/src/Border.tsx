import "./internal/setup.js";
import "./internal/jsx.js";
import type { BorderProps } from "./types.js";

export function Border({
  orientation = "horizontal",
  tone = "default",
  thick,
  className,
  style,
  id,
}: BorderProps) {
  return (
    <zm-border
      id={id}
      class={className}
      style={style}
      orientation={orientation}
      tone={tone}
      {...(thick ? { thick: "" } : {})}
    />
  );
}
