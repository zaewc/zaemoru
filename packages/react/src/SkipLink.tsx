import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function SkipLink({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("SkipLink", props);
  return (
    <zm-skip-link id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-skip-link>
  );
}
