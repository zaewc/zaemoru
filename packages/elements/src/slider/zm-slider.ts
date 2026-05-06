import { html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-slider")
export class ZmSlider extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        --zm-slider-thumb-size: 24px;

        display: block;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        font-family: var(--zm-font-family-base);
      }
      .wrap {
        position: relative;
        height: 36px;
        display: flex;
        align-items: center;
        min-width: 0;
      }
      input[type="range"] {
        position: absolute;
        inset: 0;
        z-index: 3;
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        height: 36px;
        opacity: 0;
        background: transparent;
        margin: 0;
        outline: none;
        cursor: pointer;
      }
      .track {
        position: absolute;
        left: calc(var(--zm-slider-thumb-size) / 2);
        right: calc(var(--zm-slider-thumb-size) / 2);
        height: 8px;
        background: var(--zm-color-background-muted);
        border-radius: var(--zm-radius-pill);
        pointer-events: none;
      }
      .fill {
        position: absolute;
        left: calc(var(--zm-slider-thumb-size) / 2);
        width: calc((100% - var(--zm-slider-thumb-size)) * var(--slider-ratio));
        height: 8px;
        background: var(--zm-color-primary);
        border-radius: var(--zm-radius-pill);
        pointer-events: none;
        transition: width var(--zm-duration-fast) var(--zm-easing-standard);
      }
      .thumb {
        position: absolute;
        top: 50%;
        left: calc(
          var(--zm-slider-thumb-size) / 2 + (100% - var(--zm-slider-thumb-size)) *
            var(--slider-ratio)
        );
        z-index: 2;
        width: var(--zm-slider-thumb-size);
        height: var(--zm-slider-thumb-size);
        border: 4px solid var(--zm-color-surface);
        border-radius: 50%;
        background: var(--zm-color-primary);
        box-shadow:
          var(--zm-shadow-sm),
          0 0 0 1px rgba(49, 130, 246, 0.16);
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition:
          left var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }
      input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: var(--zm-slider-thumb-size);
        height: var(--zm-slider-thumb-size);
        border-radius: 50%;
        background: transparent;
        border: 0;
        cursor: pointer;
      }
      input[type="range"]::-moz-range-thumb {
        width: var(--zm-slider-thumb-size);
        height: var(--zm-slider-thumb-size);
        border-radius: 50%;
        background: transparent;
        border: 0;
        cursor: pointer;
      }
      .wrap:focus-within .thumb {
        box-shadow: var(--zm-focus-ring);
      }
      input[type="range"]::-webkit-slider-runnable-track {
        background: transparent;
        border: 0;
      }
      input[type="range"]::-moz-range-track {
        background: transparent;
        border: 0;
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
    return Math.min(1, Math.max(0, (this.value - this.min) / (this.max - this.min)));
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
    const ratio = this._ratio();
    return html`
      <div class="wrap" style=${`--slider-ratio:${ratio}`}>
        <div class="track"></div>
        <div class="fill"></div>
        <div class="thumb"></div>
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
