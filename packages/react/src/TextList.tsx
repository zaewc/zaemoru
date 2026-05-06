import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function TextList({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("TextList", props);
  return (
    <zm-text-list id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-text-list>
  );
}
