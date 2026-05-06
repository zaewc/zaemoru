import "./internal/setup.js";
import "./internal/jsx.js";
import type { HighlightProps } from "./types.js";

export function Highlight({ tone = "primary", className, style, id, children }: HighlightProps) {
  return (
    <zm-highlight id={id} class={className} style={style} tone={tone}>
      {children}
    </zm-highlight>
  );
}
