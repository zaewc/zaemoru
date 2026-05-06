import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function TextInput({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("TextInput", props);
  return (
    <zm-text-input id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-text-input>
  );
}
