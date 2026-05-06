import "./internal/setup.js";
import "./internal/jsx.js";
import type { ListFooterProps } from "./types.js";

export function ListFooter({
  description,
  action,
  className,
  style,
  id,
  children,
}: ListFooterProps) {
  return (
    <zm-list-footer id={id} class={className} style={style} description={description}>
      {children}
      {action !== undefined ? <span slot="action">{action}</span> : null}
    </zm-list-footer>
  );
}
