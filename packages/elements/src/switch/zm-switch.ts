import { html, css, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

let idCounter = 0;
const nextId = () => `zm-switch-${++idCounter}`;

@customElement("zm-switch")
export class ZmSwitch extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        cursor: pointer;
        user-select: none;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text);
      }
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.55;
      }
      .track {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: var(--zm-radius-pill);
        background: var(--zm-color-background-muted);
        transition: background-color var(--zm-duration-base) var(--zm-easing-standard);
        flex-shrink: 0;
      }
      .thumb {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        box-shadow: var(--zm-shadow-sm);
        transition: transform var(--zm-duration-base) var(--zm-easing-emphasized);
      }
      :host([checked]) .track {
        background: var(--zm-color-primary);
      }
      :host([checked]) .thumb {
        transform: translateX(18px);
      }
      input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
      }
      input:focus-visible + .track {
        box-shadow: var(--zm-focus-ring);
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
  label = "";

  @query("input")
  private _input!: HTMLInputElement;

  private readonly _id = nextId();

  private _onChange = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.checked = t.checked;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { checked: this.checked },
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
        role="switch"
        name=${this.name || nothing}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        aria-checked=${this.checked ? "true" : "false"}
        @change=${this._onChange}
      />
      <span class="track" aria-hidden="true">
        <span class="thumb"></span>
      </span>
      ${this.label ? html`<label for=${this._id}>${this.label}</label>` : html`<slot></slot>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-switch": ZmSwitch;
  }
}
