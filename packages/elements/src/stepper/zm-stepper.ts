import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-stepper")
export class ZmStepper extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        cursor: pointer;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--zm-font-size-lg);
        font-weight: var(--zm-font-weight-bold);
        transition: background-color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      button:hover:not(:disabled) {
        background: var(--zm-color-background-muted);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.4;
      }
      .value {
        min-width: 36px;
        text-align: center;
        font-size: var(--zm-font-size-md);
        font-weight: var(--zm-font-weight-semibold);
        font-variant-numeric: tabular-nums;
        color: var(--zm-color-text);
      }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = Number.POSITIVE_INFINITY;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _emit() {
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _dec = () => {
    if (this.disabled) return;
    const next = Math.max(this.min, this.value - this.step);
    if (next === this.value) return;
    this.value = next;
    this._emit();
  };

  private _inc = () => {
    if (this.disabled) return;
    const next = Math.min(this.max, this.value + this.step);
    if (next === this.value) return;
    this.value = next;
    this._emit();
  };

  override render() {
    const cantDec = this.disabled || this.value <= this.min;
    const cantInc = this.disabled || this.value >= this.max;
    return html`
      <button type="button" aria-label="Decrease" ?disabled=${cantDec} @click=${this._dec}>
        −
      </button>
      <span class="value" role="status" aria-live="polite">${this.value}</span>
      <button type="button" aria-label="Increase" ?disabled=${cantInc} @click=${this._inc}>
        +
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-stepper": ZmStepper;
  }
}
