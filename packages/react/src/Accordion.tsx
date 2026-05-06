import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Accordion({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Accordion", props);
  return (
    <zm-accordion id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-accordion>
  );
}
