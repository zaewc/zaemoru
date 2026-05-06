import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function SplashScreen({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("SplashScreen", props);
  return (
    <zm-splash-screen id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-splash-screen>
  );
}
