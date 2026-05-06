import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBadgeVariant = "neutral" | "primary" | "success" | "warning" | "danger";
export type ZmBadgeSize = "small" | "medium";

@customElement("zm-badge")
export class ZmBadge extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-1);
        padding: 2px var(--zm-spacing-2);
        font-size: var(--zm-font-size-xs);
        font-weight: var(--zm-font-weight-semibold);
        line-height: 1.4;
        border-radius: var(--zm-radius-pill);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-subtle);
        white-space: nowrap;
      }
      :host([size="medium"]) {
        font-size: var(--zm-font-size-sm);
        padding: 4px var(--zm-spacing-3);
      }

      :host([variant="primary"]) {
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
      }
      :host([variant="success"]) {
        background: rgba(0, 196, 113, 0.12);
        color: var(--zm-color-success);
      }
      :host([variant="warning"]) {
        background: rgba(245, 166, 35, 0.16);
        color: #b87100;
      }
      :host([variant="danger"]) {
        background: rgba(240, 68, 82, 0.12);
        color: var(--zm-color-danger);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  variant: ZmBadgeVariant = "neutral";

  @property({ type: String, reflect: true })
  size: ZmBadgeSize = "small";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-badge": ZmBadge;
  }
}
