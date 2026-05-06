import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function BackButton({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("BackButton", props);
  return (
    <zm-back-button id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-back-button>
  );
}
