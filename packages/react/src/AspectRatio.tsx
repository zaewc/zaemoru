import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { AspectRatioProps } from "./types.js";

export function AspectRatio({ className, style, id, children, ...props }: AspectRatioProps) {
  const attrs = toZaemoruAttributes("AspectRatio", props);
  return (
    <zm-aspect-ratio id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-aspect-ratio>
  );
}
