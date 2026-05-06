import "./internal/setup.js";
import "./internal/jsx.js";
import type { CardProps } from "./types.js";

export function Card({
  elevation = "medium",
  padding = "medium",
  className,
  style,
  id,
  children,
}: CardProps) {
  return (
    <zm-card id={id} class={className} style={style} elevation={elevation} padding={padding}>
      {children}
    </zm-card>
  );
}
