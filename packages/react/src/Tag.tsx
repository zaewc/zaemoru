import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Tag({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Tag", props);
  return (
    <zm-tag id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-tag>
  );
}
