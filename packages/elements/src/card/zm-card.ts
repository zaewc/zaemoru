import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmCardElevation = "flat" | "low" | "medium" | "high";
export type ZmCardPadding = "none" | "small" | "medium" | "large";

@customElement("zm-card")
export class ZmCard extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        background: var(--zm-color-surface);
        border-radius: var(--zm-radius-lg);
        border: 1px solid var(--zm-color-border-subtle);
        padding: var(--zm-spacing-6);
        color: var(--zm-color-text);
      }

      :host([elevation="flat"]) {
        box-shadow: none;
      }
      :host([elevation="low"]) {
        box-shadow: var(--zm-shadow-xs);
      }
      :host(:not([elevation])),
      :host([elevation="medium"]) {
        box-shadow: var(--zm-shadow-sm);
      }
      :host([elevation="high"]) {
        box-shadow: var(--zm-shadow-md);
      }

      :host([padding="none"]) {
        padding: 0;
      }
      :host([padding="small"]) {
        padding: var(--zm-spacing-4);
      }
      :host([padding="medium"]) {
        padding: var(--zm-spacing-6);
      }
      :host([padding="large"]) {
        padding: var(--zm-spacing-7);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  elevation: ZmCardElevation = "medium";

  @property({ type: String, reflect: true })
  padding: ZmCardPadding = "medium";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-card": ZmCard;
  }
}
