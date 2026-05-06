import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Footer({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Footer", props);
  return (
    <zm-footer id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-footer>
  );
}
