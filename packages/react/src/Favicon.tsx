import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Favicon({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Favicon", props);
  return (
    <zm-favicon id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-favicon>
  );
}
