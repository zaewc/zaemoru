import "./internal/setup.js";
import "./internal/jsx.js";
import type { PostProps } from "./types.js";

export function Post({ title, description, meta, className, style, id, children }: PostProps) {
  return (
    <zm-post
      id={id}
      class={className}
      style={style}
      post-title={title}
      description={description}
      meta={meta}
    >
      {children}
    </zm-post>
  );
}
