import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Fab({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Fab", props);
  return (
    <zm-fab id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-fab>
  );
}
