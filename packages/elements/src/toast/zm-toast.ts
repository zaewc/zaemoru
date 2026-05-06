import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmToastTone = "default" | "success" | "warning" | "danger";

@customElement("zm-toast")
export class ZmToast extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        max-width: min(480px, calc(100vw - 32px));
        padding: var(--zm-spacing-4);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-text-strong);
        color: var(--zm-color-on-primary);
        box-shadow: var(--zm-shadow-lg);
        font-family: var(--zm-font-family-base);
        line-height: var(--zm-line-height-snug);
      }
      :host([tone="success"]) {
        background: var(--zm-color-success);
      }
      :host([tone="warning"]) {
        background: var(--zm-color-warning);
        color: var(--zm-color-text-strong);
      }
      :host([tone="danger"]) {
        background: var(--zm-color-danger);
      }
      .action {
        margin-left: auto;
        font-weight: var(--zm-font-weight-semibold);
      }
    `,
  ];

  @property({ type: String, reflect: true }) tone: ZmToastTone = "default";

  override render() {
    return html`<slot></slot><span class="action"><slot name="action"></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-toast": ZmToast;
  }
}
