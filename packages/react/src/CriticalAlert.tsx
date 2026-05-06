import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function CriticalAlert({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("CriticalAlert", props);
  return (
    <zm-critical-alert id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-critical-alert>
  );
}
