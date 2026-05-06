import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-rating")
export class ZmRating extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        gap: var(--zm-spacing-1);
        align-items: center;
      }
      button {
        all: unset;
        cursor: pointer;
        color: var(--zm-color-border-strong);
        transition:
          color var(--zm-duration-fast) var(--zm-easing-standard),
          transform var(--zm-duration-fast) var(--zm-easing-emphasized);
        line-height: 0;
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--zm-focus-ring);
        border-radius: var(--zm-radius-sm);
      }
      button.on {
        color: #f5b800;
      }
      button:hover:not(:disabled) {
        transform: scale(1.06);
      }
      :host([readonly]),
      :host([disabled]) {
        pointer-events: none;
      }
      :host([disabled]) {
        opacity: 0.5;
      }
      svg {
        width: 1em;
        height: 1em;
        font-size: 28px;
      }
      :host([size="small"]) svg {
        font-size: 20px;
      }
      :host([size="large"]) svg {
        font-size: 36px;
      }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 5;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) size: "small" | "medium" | "large" = "medium";

  private _set(v: number) {
    if (this.readonly || this.disabled) return;
    if (this.value === v) return;
    this.value = v;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: v },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const stars = Array.from({ length: this.max }, (_, i) => i + 1);
    return html`${stars.map(
      (i) => html`
        <button
          type="button"
          class=${i <= this.value ? "on" : ""}
          aria-label=${`Rate ${i}`}
          aria-pressed=${i <= this.value ? "true" : "false"}
          @click=${() => this._set(i)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.77 6.1 20.67l1.13-6.57L2.45 9.44l6.6-.96L12 2.5z"
            />
          </svg>
        </button>
      `,
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-rating": ZmRating;
  }
}
