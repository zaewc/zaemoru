import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function ToggleSwitch({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("ToggleSwitch", props);
  return (
    <zm-toggle-switch id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-toggle-switch>
  );
}
