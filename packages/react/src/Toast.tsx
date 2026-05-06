import "./internal/setup.js";
import "./internal/jsx.js";
import type { ToastProps } from "./types.js";

export function Toast({ tone = "default", action, className, style, id, children }: ToastProps) {
  return (
    <zm-toast id={id} class={className} style={style} tone={tone}>
      {children}
      {action !== undefined ? <span slot="action">{action}</span> : null}
    </zm-toast>
  );
}
