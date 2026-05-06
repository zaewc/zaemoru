import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function VisuallyHidden({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("VisuallyHidden", props);
  return (
    <zm-visually-hidden id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-visually-hidden>
  );
}
