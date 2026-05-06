import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function Tts({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("Tts", props);
  return (
    <zm-tts id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-tts>
  );
}
