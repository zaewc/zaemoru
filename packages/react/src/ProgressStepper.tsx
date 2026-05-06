import "./internal/setup.js";
import "./internal/jsx.js";
import type { ProgressStepperProps } from "./types.js";

export function ProgressStepper({
  value = 1,
  total = 3,
  className,
  style,
  id,
}: ProgressStepperProps) {
  return (
    <zm-progress-stepper id={id} class={className} style={style} value={value} total={total} />
  );
}
