import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Identifier({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Identifier", props);
  return (
    <zm-identifier id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-identifier>
  );
}
