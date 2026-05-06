import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function DateInput({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("DateInput", props);
  return (
    <zm-date-input id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-date-input>
  );
}
