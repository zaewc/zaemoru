import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function TutorialPanel({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("TutorialPanel", props);
  return (
    <zm-tutorial-panel id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-tutorial-panel>
  );
}
