import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { AvatarProps } from "./types.js";

export function Avatar({ className, style, id, children, ...props }: AvatarProps) {
  const attrs = toZaemoruAttributes("Avatar", props);
  return (
    <zm-avatar id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-avatar>
  );
}
