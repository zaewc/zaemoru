import "./internal/setup.js";
import "./internal/jsx.js";
import type { TextProps } from "./types.js";

export function Text({
  size = "md",
  weight = "regular",
  tone = "default",
  className,
  style,
  id,
  children,
}: TextProps) {
  return (
    <zm-text id={id} class={className} style={style} size={size} weight={weight} tone={tone}>
      {children}
    </zm-text>
  );
}
