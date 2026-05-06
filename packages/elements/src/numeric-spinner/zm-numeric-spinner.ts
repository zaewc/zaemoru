import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-numeric-spinner")
export class ZmNumericSpinner extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        width: max-content;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        font-family: var(--zm-font-family-base);
      }
      button,
      input {
        all: unset;
        box-sizing: border-box;
        height: var(--zm-control-height-md);
      }
      button {
        cursor: pointer;
        width: 44px;
        text-align: center;
        color: var(--zm-color-text);
        font-size: var(--zm-font-size-lg);
      }
      button:hover:not(:disabled) {
        background: var(--zm-color-background-muted);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.4;
      }
      input {
        width: 64px;
        text-align: center;
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-semibold);
        font-variant-numeric: tabular-nums;
      }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = Number.POSITIVE_INFINITY;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _set(value: number) {
    const next = Math.min(this.max, Math.max(this.min, value));
    if (next === this.value) return;
    this.value = next;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      <button
        type="button"
        ?disabled=${this.disabled || this.value <= this.min}
        @click=${() => this._set(this.value - this.step)}
      >
        −
      </button>
      <input
        type="number"
        .value=${String(this.value)}
        ?disabled=${this.disabled}
        @change=${(e: Event) => this._set(Number((e.target as HTMLInputElement).value))}
      />
      <button
        type="button"
        ?disabled=${this.disabled || this.value >= this.max}
        @click=${() => this._set(this.value + this.step)}
      >
        +
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-numeric-spinner": ZmNumericSpinner;
  }
}
