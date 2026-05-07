import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { ItemProps } from "./types.js";

export function Item({ className, style, id, children, ...props }: ItemProps) {
  const attrs = toZaemoruAttributes("Item", props);
  return (
    <zm-item id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-item>
  );
}
