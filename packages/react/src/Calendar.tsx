import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Calendar({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Calendar", props);
  return (
    <zm-calendar id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-calendar>
  );
}
