import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { ButtonGroupProps } from "./types.js";

export function ButtonGroup({ className, style, id, children, ...props }: ButtonGroupProps) {
  const attrs = toZaemoruAttributes("ButtonGroup", props);
  return (
    <zm-button-group id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-button-group>
  );
}
