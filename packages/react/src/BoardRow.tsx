import "./internal/setup.js";
import "./internal/jsx.js";
import type { BoardRowProps } from "./types.js";

export function BoardRow({
  eyebrow,
  title,
  description,
  interactive,
  leading,
  trailing,
  onClick,
  className,
  style,
  id,
  children,
}: BoardRowProps) {
  return (
    <zm-board-row
      id={id}
      class={className}
      style={style}
      eyebrow={eyebrow}
      description={description}
      {...(title !== undefined ? { "row-title": title } : {})}
      {...(interactive ? { interactive: "" } : {})}
      onClick={onClick}
    >
      {leading !== undefined ? <span slot="leading">{leading}</span> : null}
      {children}
      {trailing !== undefined ? <span slot="trailing">{trailing}</span> : null}
    </zm-board-row>
  );
}
