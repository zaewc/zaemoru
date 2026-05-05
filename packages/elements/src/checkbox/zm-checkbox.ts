import { html, css, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

let idCounter = 0;
const nextId = () => `zm-checkbox-${++idCounter}`;

@customElement("zm-checkbox")
export class ZmCheckbox extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text);
        cursor: pointer;
        user-select: none;
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.55;
      }
      .box {
        width: 22px;
        height: 22px;
        border-radius: var(--zm-radius-sm);
        background: var(--zm-color-background-subtle);
        border: 1px solid var(--zm-color-border-strong);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
        flex-shrink: 0;
      }
      .box svg {
        opacity: 0;
        transform: scale(0.6);
        transition: all var(--zm-duration-fast) var(--zm-easing-emphasized);
      }
      :host([checked]) .box {
        background: var(--zm-color-primary);
        border-color: var(--zm-color-primary);
      }
      :host([checked]) .box svg {
        opacity: 1;
        transform: scale(1);
      }
      input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
      }
      input:focus-visible + .box {
        box-shadow: var(--zm-focus-ring);
        border-color: var(--zm-color-primary);
      }
      label {
        cursor: inherit;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  name = "";

  @property({ type: String })
  value = "on";

  @property({ type: String })
  label = "";

  @query("input")
  private _input!: HTMLInputElement;

  private readonly _id = nextId();

  private _onChange = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.checked = t.checked;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onHostClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if (path.includes(this._input)) return;
    if (this.disabled) return;
    this._input?.click();
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("click", this._onHostClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener("click", this._onHostClick);
    super.disconnectedCallback();
  }

  override render() {
    return html`
      <input
        id=${this._id}
        type="checkbox"
        name=${this.name || nothing}
        .value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._onChange}
      />
      <span class="box" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 7.4L5.6 10.5L11.5 3.5"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      ${this.label
        ? html`<label for=${this._id}>${this.label}</label>`
        : html`<slot></slot>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-checkbox": ZmCheckbox;
  }
}
