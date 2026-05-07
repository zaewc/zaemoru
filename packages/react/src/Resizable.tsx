import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { ResizableProps } from "./types.js";

export function Resizable({ className, style, id, children, ...props }: ResizableProps) {
  const attrs = toZaemoruAttributes("Resizable", props);
  return (
    <zm-resizable id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-resizable>
  );
}
