import "./internal/setup.js";
import "./internal/jsx.js";
import type { CommonProps } from "./types.js";

export function Kbd({ className, style, id, children }: CommonProps) {
  return (
    <zm-kbd id={id} class={className} style={style}>
      {children}
    </zm-kbd>
  );
}
