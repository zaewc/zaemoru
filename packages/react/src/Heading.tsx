import "./internal/setup.js";
import "./internal/jsx.js";
import type { HeadingProps } from "./types.js";

export function Heading({
  level = "2",
  size = "lg",
  className,
  style,
  id,
  children,
}: HeadingProps) {
  return (
    <zm-heading id={id} class={className} style={style} level={level} size={size}>
      {children}
    </zm-heading>
  );
}
