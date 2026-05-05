import "./internal/setup.js";
import "./internal/jsx.js";
import type { TopProps } from "./types.js";

export function Top({
  title,
  subtitle,
  variant = "default",
  align = "center",
  sticky,
  leading,
  trailing,
  className,
  style,
  id,
  children,
}: TopProps) {
  return (
    <zm-top
      id={id}
      class={className}
      style={style}
      subtitle={subtitle}
      variant={variant}
      align={align}
      {...(title !== undefined ? { "top-title": title } : {})}
      {...(sticky ? { sticky: "" } : {})}
    >
      {leading !== undefined ? <span slot="leading">{leading}</span> : null}
      {children}
      {trailing !== undefined ? <span slot="trailing">{trailing}</span> : null}
    </zm-top>
  );
}
