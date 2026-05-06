import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmLoaderSize = "small" | "medium" | "large";

@customElement("zm-loader")
export class ZmLoader extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        color: var(--zm-color-text-subtle);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-sm);
      }
      .spinner {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid var(--zm-color-background-muted);
        border-top-color: var(--zm-color-primary);
        animation: zm-loader-spin 0.8s linear infinite;
      }
      :host([size="small"]) .spinner {
        width: 18px;
        height: 18px;
        border-width: 2px;
      }
      :host([size="large"]) .spinner {
        width: 36px;
        height: 36px;
      }
      @keyframes zm-loader-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true }) size: ZmLoaderSize = "medium";
  @property({ type: String }) label = "";

  override render() {
    return html`
      <span class="spinner" aria-hidden="true"></span>
      <span><slot>${this.label}</slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-loader": ZmLoader;
  }
}
