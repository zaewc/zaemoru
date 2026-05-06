import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Disclosure({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Disclosure", props);
  return (
    <zm-disclosure id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-disclosure>
  );
}
