import "./internal/setup.js";
import "./internal/jsx.js";
import type { BottomInfoProps } from "./types.js";

export function BottomInfo({
  tone = "default",
  icon,
  className,
  style,
  id,
  children,
}: BottomInfoProps) {
  return (
    <zm-bottom-info id={id} class={className} style={style} tone={tone}>
      {icon !== undefined ? <span slot="icon">{icon}</span> : null}
      {children}
    </zm-bottom-info>
  );
}
