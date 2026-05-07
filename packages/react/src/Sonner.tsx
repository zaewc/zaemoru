import "./internal/setup.js";
import "./internal/jsx.js";
import type { SonnerProps } from "./types.js";

export function Sonner({ items = [], position, className, style, id, children }: SonnerProps) {
  return (
    <zm-sonner id={id} class={className} style={style} position={position} items={items}>
      {children}
    </zm-sonner>
  );
}
