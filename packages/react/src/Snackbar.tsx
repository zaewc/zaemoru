import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Snackbar({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Snackbar", props);
  return (
    <zm-snackbar id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-snackbar>
  );
}
