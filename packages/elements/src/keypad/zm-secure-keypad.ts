import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-secure-keypad")
export class ZmSecureKeypad extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @state() private _keys = this._shuffle();

  private _shuffle() {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].sort(
      () => Math.random() - 0.5,
    );
  }

  private _key(e: CustomEvent<{ value: string }>) {
    this.dispatchEvent(
      new CustomEvent("zm-key", {
        detail: { value: e.detail.value },
        bubbles: true,
        composed: true,
      }),
    );
    this._keys = this._shuffle();
  }

  override render() {
    return html`<zm-number-keypad @zm-key=${this._key}></zm-number-keypad>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-secure-keypad": ZmSecureKeypad;
  }
}
