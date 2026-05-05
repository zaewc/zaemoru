import "./internal/setup.js";
import "./internal/jsx.js";
import type { SectionProps } from "./types.js";

export function Section({
  title,
  description,
  gap = "medium",
  action,
  className,
  style,
  id,
  children,
}: SectionProps) {
  return (
    <zm-section
      id={id}
      class={className}
      style={style}
      gap={gap}
      {...(title !== undefined ? { "section-title": title } : {})}
      description={description}
    >
      {action !== undefined ? <span slot="action">{action}</span> : null}
      {children}
    </zm-section>
  );
}
