import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function RadioButton({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("RadioButton", props);
  return (
    <zm-radio-button id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-radio-button>
  );
}
