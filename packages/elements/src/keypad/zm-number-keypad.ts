import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-number-keypad")
export class ZmNumberKeypad extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: grid;
        inline-size: var(--zm-keypad-width, 320px);
        max-inline-size: 100%;
        grid-template-columns: repeat(3, minmax(var(--zm-keypad-key-min-width, 72px), 1fr));
        gap: var(--zm-spacing-2);
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
        min-inline-size: var(--zm-keypad-key-min-width, 72px);
        box-sizing: border-box;
        cursor: pointer;
        height: 52px;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        font-size: var(--zm-font-size-xl);
        font-weight: var(--zm-font-weight-semibold);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
    `,
  ];

  @property({ type: Boolean, attribute: "show-submit" }) showSubmit = false;

  private _key(value: string) {
    this.dispatchEvent(
      new CustomEvent("zm-key", { detail: { value }, bubbles: true, composed: true }),
    );
  }

  override render() {
    const keys = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      this.showSubmit ? "OK" : "",
      "0",
      "⌫",
    ];
    return html`${keys.map(
      (key) =>
        html`<button type="button" @click=${() => this._key(key)} ?disabled=${!key}>
          ${key}
        </button>`,
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-number-keypad": ZmNumberKeypad;
  }
}
