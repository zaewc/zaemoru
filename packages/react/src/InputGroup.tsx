import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { InputGroupProps } from "./types.js";

export function InputGroup({ className, style, id, children, ...props }: InputGroupProps) {
  const attrs = toZaemoruAttributes("InputGroup", props);
  return (
    <zm-input-group id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-input-group>
  );
}
