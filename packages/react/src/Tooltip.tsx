import "./internal/setup.js";
import "./internal/jsx.js";
import type { TooltipProps } from "./types.js";

export function Tooltip({
  text,
  placement = "top",
  open,
  content,
  className,
  style,
  id,
  children,
}: TooltipProps) {
  return (
    <zm-tooltip
      id={id}
      class={className}
      style={style}
      text={text}
      placement={placement}
      {...(open ? { open: "" } : {})}
    >
      {children}
      {content !== undefined ? <span slot="content">{content}</span> : null}
    </zm-tooltip>
  );
}
