import { html, css, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

let idCounter = 0;
const nextId = () => `zm-search-field-${++idCounter}`;

@customElement("zm-search-field")
export class ZmSearchField extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--zm-font-family-base);
      }
      .control {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        background: var(--zm-color-background-subtle);
        border-radius: var(--zm-radius-pill);
        padding: 0 var(--zm-spacing-4);
        height: var(--zm-control-height-md);
        border: 1px solid transparent;
        transition: background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }
      .control:hover:not(.disabled) {
        background: var(--zm-color-background-muted);
      }
      .control.focused {
        background: var(--zm-color-surface);
        border-color: var(--zm-color-border-focus);
        box-shadow: var(--zm-focus-ring);
      }
      input {
        all: unset;
        flex: 1;
        min-width: 0;
        font: inherit;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text);
      }
      input::placeholder {
        color: var(--zm-color-text-muted);
      }
      .icon {
        color: var(--zm-color-text-muted);
        display: inline-flex;
      }
      .clear {
        all: unset;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--zm-color-text-muted);
        color: #fff;
      }
      .clear:hover {
        background: var(--zm-color-text-subtle);
      }
      .control.disabled {
        opacity: 0.55;
      }
    `,
  ];

  @property({ type: String }) placeholder = "Search";
  @property({ type: String }) value = "";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name = "";

  @state() private _focused = false;
  @query("input") private _input!: HTMLInputElement;
  private readonly _id = nextId();

  override focus(o?: FocusOptions) {
    this._input?.focus(o);
  }

  private _onInput = (e: Event) => {
    const t = e.target as HTMLInputElement;
    this.value = t.value;
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

  private _onClear = () => {
    this.value = "";
    this.dispatchEvent(
      new CustomEvent("zm-input", {
        detail: { value: "" },
        bubbles: true,
        composed: true,
      }),
    );
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: "" },
        bubbles: true,
        composed: true,
      }),
    );
    this.dispatchEvent(
      new CustomEvent("zm-clear", { bubbles: true, composed: true }),
    );
    this._input?.focus();
  };

  override render() {
    const klass = `control ${this._focused ? "focused" : ""} ${
      this.disabled ? "disabled" : ""
    }`.trim();
    return html`
      <div class=${klass}>
        <span class="icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle
              cx="8"
              cy="8"
              r="5"
              stroke="currentColor"
              stroke-width="1.7"
            />
            <path
              d="M12 12L15 15"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <input
          id=${this._id}
          type="search"
          role="searchbox"
          name=${this.name || nothing}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @change=${this._onChange}
          @focus=${() => (this._focused = true)}
          @blur=${() => (this._focused = false)}
        />
        ${this.value
          ? html`<button
              class="clear"
              type="button"
              aria-label="Clear search"
              @click=${this._onClear}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 2L8 8M8 2L2 8"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            </button>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-search-field": ZmSearchField;
  }
}
