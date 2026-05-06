import "./internal/setup.js";
import "./internal/jsx.js";
import type { AssetProps } from "./types.js";

export function Asset({ src, alt, shape = "rounded", className, style, id, children }: AssetProps) {
  return (
    <zm-asset id={id} class={className} style={style} src={src} alt={alt} shape={shape}>
      {children}
    </zm-asset>
  );
}
