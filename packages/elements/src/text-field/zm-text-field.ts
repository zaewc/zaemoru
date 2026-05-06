import { html, css, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTextFieldType = "text" | "email" | "password" | "search" | "tel" | "url" | "number";

export type ZmTextFieldSize = "small" | "medium" | "large";

let idCounter = 0;
const nextId = () => `zm-text-field-${++idCounter}`;

@customElement("zm-text-field")
export class ZmTextField extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--zm-spacing-2);
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        font-family: var(--zm-font-family-base);
      }

      label {
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text);
      }

      .control {
        display: flex;
        align-items: center;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        background: var(--zm-color-background-subtle);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
        padding: 0 var(--zm-spacing-4);
      }
      :host([size="small"]) .control {
        height: var(--zm-control-height-sm);
      }
      :host(:not([size])) .control,
      :host([size="medium"]) .control {
        height: var(--zm-control-height-md);
      }
      :host([size="large"]) .control {
        height: var(--zm-control-height-lg);
        border-radius: var(--zm-radius-lg);
      }

      input {
        all: unset;
        flex: 1;
        min-width: 0;
        font: inherit;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text);
        background: transparent;
        line-height: var(--zm-line-height-normal);
      }
      input::placeholder {
        color: var(--zm-color-text-muted);
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

      .control.disabled {
        opacity: 0.55;
        cursor: not-allowed;
      }
      .control.disabled input {
        cursor: not-allowed;
      }

      .helper {
        font-size: var(--zm-font-size-xs);
        color: var(--zm-color-text-muted);
      }
      .helper.error {
        color: var(--zm-color-text-danger);
      }
    `,
  ];

  @property({ type: String })
  label = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  value = "";

  @property({ type: String })
  type: ZmTextFieldType = "text";

  @property({ type: String, reflect: true })
  size: ZmTextFieldSize = "medium";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: String, attribute: "helper-text" })
  helperText = "";

  @property({ type: String, attribute: "error-message" })
  errorMessage = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  autocomplete = "";

  @state()
  private _focused = false;

  @query("input")
  private _input!: HTMLInputElement;

  private readonly _id = nextId();

  override focus(options?: FocusOptions) {
    this._input?.focus(options);
  }

  override blur() {
    this._input?.blur();
  }

  private _onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
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
    const helperContent = showError ? this.errorMessage : this.helperText;
    const controlClass = `control ${this._focused ? "focused" : ""} ${
      this.disabled ? "disabled" : ""
    }`.trim();

    return html`
      ${this.label ? html`<label for=${this._id}>${this.label}</label>` : nothing}
      <div class=${controlClass}>
        <input
          id=${this._id}
          name=${this.name || nothing}
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder || ""}
          ?disabled=${this.disabled}
          aria-invalid=${this.invalid ? "true" : "false"}
          aria-describedby=${helperContent ? helperId : nothing}
          autocomplete=${this.autocomplete || nothing}
          @input=${this._onInput}
          @change=${this._onChange}
          @focus=${() => (this._focused = true)}
          @blur=${() => (this._focused = false)}
        />
      </div>
      ${helperContent
        ? html`<div id=${helperId} class=${`helper ${showError ? "error" : ""}`.trim()}>
            ${helperContent}
          </div>`
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-field": ZmTextField;
  }
}
