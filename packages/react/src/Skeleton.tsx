import "./internal/setup.js";
import "./internal/jsx.js";
import type { SkeletonProps } from "./types.js";

export function Skeleton({ shape = "rect", width, height, className, style, id }: SkeletonProps) {
  return (
    <zm-skeleton
      id={id}
      class={className}
      style={style}
      shape={shape}
      width={width}
      height={height}
    />
  );
}
