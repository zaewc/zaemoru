import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { ScrollAreaProps } from "./types.js";

export function ScrollArea({ className, style, id, children, ...props }: ScrollAreaProps) {
  const attrs = toZaemoruAttributes("ScrollArea", props);
  return (
    <zm-scroll-area id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-scroll-area>
  );
}
