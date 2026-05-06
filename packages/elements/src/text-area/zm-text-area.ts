import { html, css, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

let idCounter = 0;
const nextId = () => `zm-text-area-${++idCounter}`;

@customElement("zm-text-area")
export class ZmTextArea extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--zm-spacing-2);
        width: 100%;
        font-family: var(--zm-font-family-base);
      }
      label {
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text);
      }
      .control {
        background: var(--zm-color-background-subtle);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
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
      :host([invalid]) .control {
        border-color: var(--zm-color-border-danger);
      }
      :host([invalid]) .control.focused {
        box-shadow: var(--zm-shadow-focus-ring-danger);
      }
      textarea {
        all: unset;
        display: block;
        width: 100%;
        font: inherit;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-normal);
        color: var(--zm-color-text);
        resize: vertical;
        min-height: calc(var(--zm-control-height-md) * 2);
      }
      textarea::placeholder {
        color: var(--zm-color-text-muted);
      }
      .control.disabled {
        opacity: 0.55;
      }
      .meta {
        display: flex;
        justify-content: space-between;
        font-size: var(--zm-font-size-xs);
        color: var(--zm-color-text-muted);
      }
      .helper.error {
        color: var(--zm-color-text-danger);
      }
      .counter {
        font-variant-numeric: tabular-nums;
      }
    `,
  ];

  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Number }) rows = 3;
  @property({ type: Number, attribute: "max-length" }) maxLength = 0;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) invalid = false;
  @property({ type: String, attribute: "helper-text" }) helperText = "";
  @property({ type: String, attribute: "error-message" }) errorMessage = "";
  @property({ type: String }) name = "";

  @state() private _focused = false;
  @query("textarea") private _ta!: HTMLTextAreaElement;
  private readonly _id = nextId();

  override focus(o?: FocusOptions) {
    this._ta?.focus(o);
  }

  private _onInput = (e: Event) => {
    const t = e.target as HTMLTextAreaElement;
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

  override render() {
    const helperId = `${this._id}-helper`;
    const showError = this.invalid && this.errorMessage;
    const helper = showError ? this.errorMessage : this.helperText;
    const klass = `control ${this._focused ? "focused" : ""} ${
      this.disabled ? "disabled" : ""
    }`.trim();
    const showCounter = this.maxLength > 0;
    return html`
      ${this.label ? html`<label for=${this._id}>${this.label}</label>` : nothing}
      <div class=${klass}>
        <textarea
          id=${this._id}
          name=${this.name || nothing}
          rows=${this.rows}
          .value=${this.value}
          placeholder=${this.placeholder || ""}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength > 0 ? this.maxLength : nothing}
          aria-invalid=${this.invalid ? "true" : "false"}
          aria-describedby=${helper ? helperId : nothing}
          @input=${this._onInput}
          @change=${this._onChange}
          @focus=${() => (this._focused = true)}
          @blur=${() => (this._focused = false)}
        ></textarea>
      </div>
      ${helper || showCounter
        ? html`<div class="meta">
            <span id=${helperId} class=${`helper ${showError ? "error" : ""}`.trim()}>
              ${helper || ""}
            </span>
            ${showCounter
              ? html`<span class="counter">${this.value.length}/${this.maxLength}</span>`
              : nothing}
          </div>`
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-area": ZmTextArea;
  }
}
