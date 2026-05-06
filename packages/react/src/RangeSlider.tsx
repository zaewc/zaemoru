import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function RangeSlider({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("RangeSlider", props);
  return (
    <zm-range-slider id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-range-slider>
  );
}
