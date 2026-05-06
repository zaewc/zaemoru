import "./internal/setup.js";
import "./internal/jsx.js";
import type { LoaderProps } from "./types.js";

export function Loader({ size = "medium", label, className, style, id, children }: LoaderProps) {
  return (
    <zm-loader id={id} class={className} style={style} size={size} label={label}>
      {children}
    </zm-loader>
  );
}
