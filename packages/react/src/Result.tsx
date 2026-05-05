import "./internal/setup.js";
import "./internal/jsx.js";
import type { ResultProps } from "./types.js";

export function Result({
  tone = "neutral",
  title,
  description,
  icon,
  actions,
  className,
  style,
  id,
  children,
}: ResultProps) {
  return (
    <zm-result
      id={id}
      class={className}
      style={style}
      tone={tone}
      description={description}
      {...(title !== undefined ? { "result-title": title } : {})}
    >
      {icon !== undefined ? <span slot="icon">{icon}</span> : null}
      {children}
      {actions !== undefined ? <span slot="actions">{actions}</span> : null}
    </zm-result>
  );
}
