import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function TabBars({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("TabBars", props);
  return (
    <zm-tab-bars id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-tab-bars>
  );
}
