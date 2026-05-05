import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBottomInfoTone = "default" | "primary" | "warning" | "danger";

@customElement("zm-bottom-info")
export class ZmBottomInfo extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-subtle);
        background: var(--zm-color-background-subtle);
        border-radius: var(--zm-radius-md);
        line-height: var(--zm-line-height-snug);
      }
      :host([tone="primary"]) {
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
      }
      :host([tone="warning"]) {
        background: rgba(245, 166, 35, 0.16);
        color: #b87100;
      }
      :host([tone="danger"]) {
        background: rgba(240, 68, 82, 0.12);
        color: var(--zm-color-danger);
      }
      .icon {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .body {
        flex: 1;
        min-width: 0;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  tone: ZmBottomInfoTone = "default";

  override render() {
    return html`
      <span class="icon" aria-hidden="true">
        <slot name="icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              stroke-width="1.4"
            />
            <path
              d="M8 5V8.5M8 11h.01"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </slot>
      </span>
      <span class="body"><slot></slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-bottom-info": ZmBottomInfo;
  }
}
