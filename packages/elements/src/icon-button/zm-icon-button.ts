import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmIconButtonVariant = "ghost" | "subtle" | "solid";
export type ZmIconButtonSize = "small" | "medium" | "large";

@customElement("zm-icon-button")
export class ZmIconButton extends ZmElement {
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
        justify-content: center;
        color: var(--zm-color-text);
        background: transparent;
        border-radius: var(--zm-radius-pill);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host([size="small"]) button {
        width: 32px;
        height: 32px;
      }
      :host(:not([size])) button,
      :host([size="medium"]) button {
        width: 40px;
        height: 40px;
      }
      :host([size="large"]) button {
        width: 48px;
        height: 48px;
      }
      :host([variant="subtle"]) button {
        background: var(--zm-color-background-subtle);
      }
      :host([variant="solid"]) button {
        background: var(--zm-color-text-strong);
        color: #fff;
      }
      button:hover:not(:disabled) {
        background: var(--zm-color-background-subtle);
      }
      :host([variant="solid"]) button:hover:not(:disabled) {
        background: var(--zm-color-text);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }
      ::slotted(svg) {
        width: 1.1em;
        height: 1.1em;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  variant: ZmIconButtonVariant = "ghost";

  @property({ type: String, reflect: true })
  size: ZmIconButtonSize = "medium";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String, attribute: "aria-label" })
  override ariaLabel: string | null = null;

  override render() {
    return html`<button
      part="button"
      type="button"
      aria-label=${this.ariaLabel ?? ""}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-icon-button": ZmIconButton;
  }
}
