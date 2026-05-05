import "./internal/setup.js";
import "./internal/jsx.js";
import type { TableRowProps } from "./types.js";

export function TableRow({
  label,
  value,
  emphasis,
  align = "end",
  className,
  style,
  id,
  children,
}: TableRowProps) {
  return (
    <zm-table-row
      id={id}
      class={className}
      style={style}
      label={label}
      value={value}
      align={align}
      {...(emphasis ? { emphasis: "" } : {})}
    >
      {children}
    </zm-table-row>
  );
}
