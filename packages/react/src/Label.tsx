import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { LabelProps } from "./types.js";

export function Label({ className, style, id, children, ...props }: LabelProps) {
  const attrs = toZaemoruAttributes("Label", props);
  return (
    <zm-label id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-label>
  );
}
