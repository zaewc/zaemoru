import "./internal/setup.js";
import "./internal/jsx.js";
import type { BarChartProps } from "./types.js";

export function BarChart({ data = [], className, style, id, children }: BarChartProps) {
  return (
    <zm-bar-chart id={id} class={className} style={style} data={data}>
      {children}
    </zm-bar-chart>
  );
}
