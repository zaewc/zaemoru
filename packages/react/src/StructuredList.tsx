import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function StructuredList({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("StructuredList", props);
  return (
    <zm-structured-list id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-structured-list>
  );
}
