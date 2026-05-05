import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmSpinnerSize = "small" | "medium" | "large";
export type ZmSpinnerTone = "default" | "primary" | "on-primary";

@customElement("zm-spinner")
export class ZmSpinner extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .ring {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 2.5px solid var(--zm-color-border-strong);
        border-top-color: var(--zm-color-text-subtle);
        animation: zm-spin 0.8s linear infinite;
      }
      :host([size="small"]) .ring {
        width: 16px;
        height: 16px;
        border-width: 2px;
      }
      :host([size="large"]) .ring {
        width: 32px;
        height: 32px;
        border-width: 3px;
      }
      :host([tone="primary"]) .ring {
        border-color: var(--zm-color-primary-subtle);
        border-top-color: var(--zm-color-primary);
      }
      :host([tone="on-primary"]) .ring {
        border-color: rgba(255, 255, 255, 0.4);
        border-top-color: #fff;
      }
      @keyframes zm-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  size: ZmSpinnerSize = "medium";

  @property({ type: String, reflect: true })
  tone: ZmSpinnerTone = "default";

  @property({ type: String })
  label = "Loading";

  override render() {
    return html`<span class="ring" role="status" aria-label=${this.label}></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-spinner": ZmSpinner;
  }
}
