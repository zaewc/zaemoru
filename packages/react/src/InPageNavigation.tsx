import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function InPageNavigation({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("InPageNavigation", props);
  return (
    <zm-in-page-navigation id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-in-page-navigation>
  );
}
