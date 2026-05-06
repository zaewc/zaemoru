import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Header({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Header", props);
  return (
    <zm-header id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-header>
  );
}
