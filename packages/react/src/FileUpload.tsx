import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import type { KrdsComponentProps } from "./types.js";

export function FileUpload({ className, style, id, children, ...props }: KrdsComponentProps) {
  const attrs = toZaemoruAttributes("FileUpload", props);
  return (
    <zm-file-upload id={id} class={className} style={style} {...attrs}>
      {children}
    </zm-file-upload>
  );
}
