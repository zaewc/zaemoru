import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Masthead({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Masthead", props);
  return (
    <zm-masthead id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-masthead>
  );
}
