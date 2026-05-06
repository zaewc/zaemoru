import "./internal/setup.js";
import "./internal/jsx.js";
import type { GridListProps } from "./types.js";

export function GridList({
  columns = 2,
  gap = "medium",
  className,
  style,
  id,
  children,
}: GridListProps) {
  return (
    <zm-grid-list id={id} class={className} style={style} columns={columns} gap={gap}>
      {children}
    </zm-grid-list>
  );
}
