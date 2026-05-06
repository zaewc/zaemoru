import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Resize({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Resize", props);
  return (
    <zm-resize id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-resize>
  );
}
