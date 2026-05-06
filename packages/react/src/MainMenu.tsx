import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function MainMenu({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("MainMenu", props);
  return (
    <zm-main-menu id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-main-menu>
  );
}
