import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { DirectionProps } from "./types.js";

export function Direction({ className, style, id, children, ...props }: DirectionProps) {
  const attrs = toZaemoruAttributes("Direction", props);
  return (
    <zm-direction id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-direction>
  );
}
