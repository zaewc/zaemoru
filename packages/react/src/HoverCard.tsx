import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { HoverCardProps } from "./types.js";

export function HoverCard({ className, style, id, children, ...props }: HoverCardProps) {
  const attrs = toZaemoruAttributes("HoverCard", props);
  return (
    <zm-hover-card id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-hover-card>
  );
}
