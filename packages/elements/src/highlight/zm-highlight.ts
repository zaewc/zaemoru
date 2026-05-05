import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmHighlightTone = "primary" | "success" | "warning" | "danger";

@customElement("zm-highlight")
export class ZmHighlight extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline;
        padding: 0 4px;
        border-radius: var(--zm-radius-sm);
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
        font-weight: var(--zm-font-weight-semibold);
      }
      :host([tone="success"]) {
        background: rgba(0, 196, 113, 0.14);
        color: var(--zm-color-success);
      }
      :host([tone="warning"]) {
        background: rgba(245, 166, 35, 0.18);
        color: #b87100;
      }
      :host([tone="danger"]) {
        background: rgba(240, 68, 82, 0.12);
        color: var(--zm-color-danger);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  tone: ZmHighlightTone = "primary";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-highlight": ZmHighlight;
  }
}
