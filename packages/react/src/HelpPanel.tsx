import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function HelpPanel({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("HelpPanel", props);
  return (
    <zm-help-panel id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-help-panel>
  );
}
