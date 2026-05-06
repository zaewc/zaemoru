import "./internal/setup.js";
import "./internal/jsx.js";
import type { ParagraphProps } from "./types.js";

export function Paragraph({
  size = "md",
  tone = "default",
  className,
  style,
  id,
  children,
}: ParagraphProps) {
  return (
    <zm-paragraph id={id} class={className} style={style} size={size} tone={tone}>
      {children}
    </zm-paragraph>
  );
}
