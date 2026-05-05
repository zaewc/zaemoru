import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmParagraphSize = "sm" | "md" | "lg";
export type ZmParagraphTone = "default" | "subtle" | "muted";

@customElement("zm-paragraph")
export class ZmParagraph extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
        color: var(--zm-color-text);
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-relaxed);
      }
      :host([size="sm"]) {
        font-size: var(--zm-font-size-sm);
        line-height: var(--zm-line-height-normal);
      }
      :host([size="lg"]) {
        font-size: var(--zm-font-size-lg);
      }
      :host([tone="subtle"]) {
        color: var(--zm-color-text-subtle);
      }
      :host([tone="muted"]) {
        color: var(--zm-color-text-muted);
      }
      p {
        margin: 0;
        font: inherit;
        color: inherit;
        line-height: inherit;
      }
      p + p {
        margin-top: var(--zm-spacing-3);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  size: ZmParagraphSize = "md";

  @property({ type: String, reflect: true })
  tone: ZmParagraphTone = "default";

  override render() {
    return html`<p><slot></slot></p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-paragraph": ZmParagraph;
  }
}
