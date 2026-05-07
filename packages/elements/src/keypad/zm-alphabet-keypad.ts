import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-alphabet-keypad")
export class ZmAlphabetKeypad extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: grid;
        inline-size: var(--zm-keypad-width, 480px);
        max-inline-size: 100%;
        grid-template-columns: repeat(6, minmax(var(--zm-keypad-key-min-width, 52px), 1fr));
        gap: var(--zm-spacing-2);
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
        min-inline-size: var(--zm-keypad-key-min-width, 52px);
        box-sizing: border-box;
        cursor: pointer;
        height: 44px;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        font-weight: var(--zm-font-weight-semibold);
      }
    `,
  ];

  private _key(value: string) {
    this.dispatchEvent(
      new CustomEvent("zm-key", { detail: { value }, bubbles: true, composed: true }),
    );
  }

  override render() {
    return html`${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .map((key) => html`<button type="button" @click=${() => this._key(key)}>${key}</button>`)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-alphabet-keypad": ZmAlphabetKeypad;
  }
}
