import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { EmptyProps } from "./types.js";

export function Empty({ className, style, id, children, ...props }: EmptyProps) {
  const attrs = toZaemoruAttributes("Empty", props);
  return (
    <zm-empty id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-empty>
  );
}
