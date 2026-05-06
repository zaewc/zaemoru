import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Table({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Table", props);
  return (
    <zm-table id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-table>
  );
}
