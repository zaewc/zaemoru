import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBadgeVariant = "fill" | "weak";
export type ZmBadgeSize = "xsmall" | "small" | "medium" | "large";
export type ZmBadgeColor = "blue" | "teal" | "green" | "red" | "yellow" | "elephant";

@customElement("zm-badge")
export class ZmBadge extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        --zm-badge-fill-background: var(--zm-color-primary);
        --zm-badge-fill-color: var(--zm-color-on-primary);
        --zm-badge-weak-background: var(--zm-color-primary-subtle);
        --zm-badge-weak-color: var(--zm-color-primary);

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--zm-spacing-1);
        min-height: 16px;
        padding: 1px 5px;
        box-sizing: border-box;
        font-size: 11px;
        font-weight: var(--zm-font-weight-semibold);
        line-height: 14px;
        letter-spacing: 0;
        border-radius: var(--zm-radius-sm);
        background: var(--zm-badge-fill-background);
        color: var(--zm-badge-fill-color);
        white-space: nowrap;
      }
      :host([variant="weak"]) {
        background: var(--zm-badge-weak-background);
        color: var(--zm-badge-weak-color);
      }
      :host([size="small"]) {
        min-height: 20px;
        padding: 2px 6px;
        font-size: var(--zm-font-size-xs);
        line-height: 16px;
      }
      :host([size="medium"]) {
        min-height: 24px;
        padding: 3px var(--zm-spacing-2);
        font-size: 13px;
        line-height: 18px;
      }
      :host([size="large"]) {
        min-height: 28px;
        padding: 4px 10px;
        font-size: var(--zm-font-size-sm);
        line-height: 20px;
      }

      :host([color="teal"]) {
        --zm-badge-fill-background: #00a8b3;
        --zm-badge-fill-color: #ffffff;
        --zm-badge-weak-background: #e6f8f8;
        --zm-badge-weak-color: #008c95;
      }
      :host([color="green"]) {
        --zm-badge-fill-background: var(--zm-color-success);
        --zm-badge-fill-color: #ffffff;
        --zm-badge-weak-background: rgba(0, 196, 113, 0.12);
        --zm-badge-weak-color: #008f5a;
      }
      :host([color="red"]) {
        --zm-badge-fill-background: var(--zm-color-danger);
        --zm-badge-fill-color: #ffffff;
        --zm-badge-weak-background: #feecee;
        --zm-badge-weak-color: var(--zm-color-danger-hover);
      }
      :host([color="yellow"]) {
        --zm-badge-fill-background: #ffb800;
        --zm-badge-fill-color: #4d3400;
        --zm-badge-weak-background: #fff6d6;
        --zm-badge-weak-color: #a86400;
      }
      :host([color="elephant"]) {
        --zm-badge-fill-background: var(--zm-color-text-subtle);
        --zm-badge-fill-color: #ffffff;
        --zm-badge-weak-background: var(--zm-color-background-subtle);
        --zm-badge-weak-color: var(--zm-color-text-subtle);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  variant: ZmBadgeVariant = "fill";

  @property({ type: String, reflect: true })
  size: ZmBadgeSize = "xsmall";

  @property({ type: String, reflect: true })
  color: ZmBadgeColor = "blue";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-badge": ZmBadge;
  }
}
