import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { PopoverProps } from "./types.js";

export function Popover({ className, style, id, children, ...props }: PopoverProps) {
  const attrs = toZaemoruAttributes("Popover", props);
  return (
    <zm-popover id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-popover>
  );
}
