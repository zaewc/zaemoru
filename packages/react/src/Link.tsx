import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Link({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Link", props);
  return (
    <zm-link id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-link>
  );
}
