import "./internal/setup.js";
import "./internal/jsx.js";
import type { BottomCtaProps } from "./types.js";

export function BottomCta({
  layout = "single",
  fixed,
  className,
  style,
  id,
  children,
}: BottomCtaProps) {
  return (
    <zm-bottom-cta
      id={id}
      class={className}
      style={style}
      layout={layout}
      {...(fixed ? { fixed: "" } : {})}
    >
      {children}
    </zm-bottom-cta>
  );
}
