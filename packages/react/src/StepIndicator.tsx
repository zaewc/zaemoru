import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function StepIndicator({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("StepIndicator", props);
  return (
    <zm-step-indicator id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-step-indicator>
  );
}
