import { useRef } from "react";
import { toZaemoruAttributes } from "@zaemoru/elements";
import "./internal/setup.js";
import "./internal/jsx.js";
import { useCustomEvent } from "./internal/useCustomEvent.js";
import type { CodeBlockProps } from "./types.js";

export function CodeBlock({ className, style, id, onCopy, ...props }: CodeBlockProps) {
  const ref = useRef<HTMLElement>(null);
  useCustomEvent<{ text: string }>(ref, "zm-copy", onCopy);
  const attrs = toZaemoruAttributes("CodeBlock", props);
  return <zm-code-block ref={ref} id={id} class={className} style={style} {...attrs} />;
}
