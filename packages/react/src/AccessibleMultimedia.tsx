import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function AccessibleMultimedia({
  className,
  style,
  id,
  children,
  ...props
}: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("AccessibleMultimedia", props);
  return (
    <zm-accessible-multimedia id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-accessible-multimedia>
  );
}
