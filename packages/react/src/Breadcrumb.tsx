import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Breadcrumb({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Breadcrumb", props);
  return (
    <zm-breadcrumb id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-breadcrumb>
  );
}
