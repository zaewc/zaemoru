import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Select({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Select", props);
  return (
    <zm-select id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-select>
  );
}
