import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function QuantityToggle({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("QuantityToggle", props);
  return (
    <zm-quantity-toggle id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-quantity-toggle>
  );
}
