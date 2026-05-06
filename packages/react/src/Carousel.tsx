import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Carousel({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Carousel", props);
  return (
    <zm-carousel id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-carousel>
  );
}
