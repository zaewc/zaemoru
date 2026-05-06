import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function ContextualHelp({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("ContextualHelp", props);
  return (
    <zm-contextual-help id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-contextual-help>
  );
}
