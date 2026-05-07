import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-secure-keypad")
export class ZmSecureKeypad extends ZmElement {
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
      button:hover:not(:disabled) {
        background: var(--zm-color-background-muted);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
      button:disabled {
        cursor: default;
        opacity: 0;
      }
    `,
  ];

  @property({ type: Boolean, attribute: "show-submit" }) showSubmit = false;
  @state() private _keys = this._shuffle();

  private _shuffle() {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].sort(
      () => crypto.getRandomValues(new Uint32Array(1))[0]! / 2 ** 32 - 0.5,
    );
    return [...digits.slice(0, 9), this.showSubmit ? "OK" : "", digits[9] ?? "0", "⌫"];
  }

  private _key(value: string) {
    if (!value) return;
    const kind = value === "⌫" ? "delete" : value === "OK" ? "submit" : "digit";
    this.dispatchEvent(
      new CustomEvent("zm-key", {
        detail: { value, kind },
        bubbles: true,
        composed: true,
      }),
    );
    this._keys = this._shuffle();
  }

  override render() {
    return html`${this._keys.map(
      (key) =>
        html`<button type="button" @click=${() => this._key(key)} ?disabled=${!key}>
          ${key}
        </button>`,
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-secure-keypad": ZmSecureKeypad;
  }
}
