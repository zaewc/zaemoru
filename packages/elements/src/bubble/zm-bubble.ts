import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBubbleTone = "neutral" | "primary" | "success" | "warning" | "danger";
export type ZmBubblePlacement = "start" | "end";

@customElement("zm-bubble")
export class ZmBubble extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        max-width: 280px;
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-snug);
        position: relative;
      }
      :host([placement="end"]) {
        border-bottom-right-radius: var(--zm-radius-sm);
      }
      :host([placement="start"]) {
        border-bottom-left-radius: var(--zm-radius-sm);
      }
      :host([tone="primary"]) {
        background: var(--zm-color-primary);
        color: var(--zm-color-on-primary);
      }
      :host([tone="success"]) {
        color: var(--zm-color-success);
      }
      :host([tone="warning"]) {
        color: var(--zm-color-warning);
      }
      :host([tone="danger"]) {
        color: var(--zm-color-danger);
      }
    `,
  ];

  @property({ type: String, reflect: true }) tone: ZmBubbleTone = "neutral";
  @property({ type: String, reflect: true }) placement: ZmBubblePlacement = "start";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-bubble": ZmBubble;
  }
}
