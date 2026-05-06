import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function LanguageSwitcher({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("LanguageSwitcher", props);
  return (
    <zm-language-switcher id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-language-switcher>
  );
}
