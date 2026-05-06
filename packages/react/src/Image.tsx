import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Image({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Image", props);
  return (
    <zm-image id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-image>
  );
}
