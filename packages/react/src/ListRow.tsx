import "./internal/setup.js";
import "./internal/jsx.js";
import type { ListRowProps } from "./types.js";

export function ListRow({
  title,
  description,
  interactive,
  chevron,
  leading,
  trailing,
  onClick,
  className,
  style,
  id,
  children,
}: ListRowProps) {
  return (
    <zm-list-row
      id={id}
      class={className}
      style={style}
      title={title}
      description={description}
      {...(interactive ? { interactive: "" } : {})}
      {...(chevron ? { chevron: "" } : {})}
      onClick={onClick}
    >
      {leading !== undefined ? <span slot="leading">{leading}</span> : null}
      {children}
      {trailing !== undefined ? <span slot="trailing">{trailing}</span> : null}
    </zm-list-row>
  );
}
