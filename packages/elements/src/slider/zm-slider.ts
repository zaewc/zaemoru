import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-slider")
export class ZmSlider extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--zm-font-family-base);
      }
      .wrap {
        position: relative;
        height: 24px;
        display: flex;
        align-items: center;
      }
      input[type="range"] {
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        height: 6px;
        background: transparent;
        margin: 0;
        outline: none;
      }
      .track {
        position: absolute;
        left: 0;
        right: 0;
        height: 6px;
        background: var(--zm-color-background-muted);
        border-radius: var(--zm-radius-pill);
        pointer-events: none;
      }
      .fill {
        position: absolute;
        left: 0;
        height: 6px;
        background: var(--zm-color-primary);
        border-radius: var(--zm-radius-pill);
        pointer-events: none;
        transition: width var(--zm-duration-fast) var(--zm-easing-standard);
      }
      input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--zm-color-primary);
        box-shadow: var(--zm-shadow-sm);
        cursor: pointer;
      }
      input[type="range"]::-moz-range-thumb {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--zm-color-primary);
        box-shadow: var(--zm-shadow-sm);
        cursor: pointer;
      }
      input[type="range"]:focus-visible::-webkit-slider-thumb {
        box-shadow: var(--zm-focus-ring);
      }
      input[type="range"]:focus-visible::-moz-range-thumb {
        box-shadow: var(--zm-focus-ring);
      }
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name = "";

  @query("input") private _input!: HTMLInputElement;

  private _ratio() {
    if (this.max === this.min) return 0;
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  private _onInput = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.value = Number(t.value);
    this.dispatchEvent(
      new CustomEvent("zm-input", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onChange = () => {
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  override render() {
    const fill = `${this._ratio()}%`;
    return html`
      <div class="wrap">
        <div class="track"></div>
        <div class="fill" style=${`width:${fill}`}></div>
        <input
          type="range"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${String(this.value)}
          ?disabled=${this.disabled}
          name=${this.name}
          @input=${this._onInput}
          @change=${this._onChange}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-slider": ZmSlider;
  }
}
