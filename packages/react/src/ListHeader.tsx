import "./internal/setup.js";
import "./internal/jsx.js";
import type { ListHeaderProps } from "./types.js";

export function ListHeader({
  title,
  description,
  action,
  className,
  style,
  id,
  children,
}: ListHeaderProps) {
  return (
    <zm-list-header
      id={id}
      class={className}
      style={style}
      {...(title !== undefined ? { "header-title": title } : {})}
      description={description}
    >
      {action !== undefined ? <span slot="action">{action}</span> : null}
      {children}
    </zm-list-header>
  );
}
