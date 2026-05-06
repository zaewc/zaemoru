import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Pagination({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Pagination", props);
  return (
    <zm-pagination id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-pagination>
  );
}
