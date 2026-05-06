import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function SideNavigation({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("SideNavigation", props);
  return (
    <zm-side-navigation id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-side-navigation>
  );
}
