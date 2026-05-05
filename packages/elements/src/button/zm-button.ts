import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmButtonVariant = "primary" | "secondary" | "tertiary" | "danger";
export type ZmButtonSize = "small" | "medium" | "large";
export type ZmButtonType = "button" | "submit" | "reset";

@customElement("zm-button")
export class ZmButton extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }

      button {
        appearance: none;
        border: 1px solid transparent;
        background: transparent;
        font: inherit;
        font-family: var(--zm-font-family-base);
        font-weight: var(--zm-font-weight-semibold);
        color: inherit;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--zm-spacing-2);
        width: 100%;
        line-height: 1;
        letter-spacing: var(--zm-letter-spacing-normal);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          transform var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }

      button:focus {
        outline: none;
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }

      button:active:not(:disabled) {
        transform: scale(0.98);
      }

      /* sizes */
      :host([size="small"]) button {
        height: var(--zm-control-height-sm);
        padding: 0 var(--zm-spacing-4);
        font-size: var(--zm-font-size-sm);
        border-radius: var(--zm-radius-md);
      }
      :host(:not([size])) button,
      :host([size="medium"]) button {
        height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-5);
        font-size: var(--zm-font-size-md);
        border-radius: var(--zm-radius-md);
      }
      :host([size="large"]) button {
        height: var(--zm-control-height-lg);
        padding: 0 var(--zm-spacing-6);
        font-size: var(--zm-font-size-lg);
        border-radius: var(--zm-radius-lg);
      }

      /* variants */
      :host(:not([variant])) button,
      :host([variant="primary"]) button {
        background: var(--zm-color-primary);
        color: var(--zm-color-on-primary);
      }
      :host(:not([variant])) button:hover:not(:disabled),
      :host([variant="primary"]) button:hover:not(:disabled) {
        background: var(--zm-color-primary-hover);
      }
      :host(:not([variant])) button:active:not(:disabled),
      :host([variant="primary"]) button:active:not(:disabled) {
        background: var(--zm-color-primary-pressed);
      }

      :host([variant="secondary"]) button {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
      }
      :host([variant="secondary"]) button:hover:not(:disabled) {
        background: var(--zm-color-background-muted);
      }

      :host([variant="tertiary"]) button {
        background: transparent;
        color: var(--zm-color-text-subtle);
      }
      :host([variant="tertiary"]) button:hover:not(:disabled) {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
      }

      :host([variant="danger"]) button {
        background: var(--zm-color-danger);
        color: #fff;
      }
      :host([variant="danger"]) button:hover:not(:disabled) {
        background: var(--zm-color-danger-hover);
      }
      :host([variant="danger"]) button:focus-visible {
        box-shadow: var(--zm-shadow-focus-ring-danger);
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        transform: none;
      }

      .spinner {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-right-color: transparent;
        animation: zm-button-spin 0.7s linear infinite;
      }
      .label {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-2);
      }
      :host([loading]) .label {
        visibility: hidden;
      }
      :host([loading]) .spinner {
        position: absolute;
      }
      .wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--zm-spacing-2);
      }
      @keyframes zm-button-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  variant: ZmButtonVariant = "primary";

  @property({ type: String, reflect: true })
  size: ZmButtonSize = "medium";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true, attribute: "full-width" })
  fullWidth = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  type: ZmButtonType = "button";

  override render() {
    return html`
      <button
        part="button"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-busy=${this.loading ? "true" : "false"}
      >
        <span class="wrap">
          ${this.loading ? html`<span class="spinner" aria-hidden="true"></span>` : null}
          <span class="label"><slot></slot></span>
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-button": ZmButton;
  }
}
