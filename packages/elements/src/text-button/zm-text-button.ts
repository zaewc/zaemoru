import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTextButtonTone = "primary" | "neutral" | "danger";
export type ZmTextButtonSize = "small" | "medium";

@customElement("zm-text-button")
export class ZmTextButton extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
      }
      button {
        all: unset;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-1);
        font-family: var(--zm-font-family-base);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-primary);
        font-size: var(--zm-font-size-sm);
        line-height: 1;
        padding: var(--zm-spacing-1) var(--zm-spacing-2);
        border-radius: var(--zm-radius-sm);
        transition:
          color var(--zm-duration-fast) var(--zm-easing-standard),
          background-color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host([size="medium"]) button {
        font-size: var(--zm-font-size-md);
      }
      :host([tone="neutral"]) button {
        color: var(--zm-color-text-subtle);
      }
      :host([tone="danger"]) button {
        color: var(--zm-color-danger);
      }
      button:hover:not(:disabled) {
        background: var(--zm-color-background-subtle);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  tone: ZmTextButtonTone = "primary";

  @property({ type: String, reflect: true })
  size: ZmTextButtonSize = "small";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  override render() {
    return html`<button part="button" type="button" ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-button": ZmTextButton;
  }
}
