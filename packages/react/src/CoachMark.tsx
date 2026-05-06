import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function CoachMark({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("CoachMark", props);
  return (
    <zm-coach-mark id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-coach-mark>
  );
}
