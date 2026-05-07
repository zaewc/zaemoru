import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@customElement("zm-combobox")
export class ZmCombobox extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .field {
        display: grid;
        gap: var(--zm-spacing-2);
      }
      label {
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
      }
      .control {
        position: relative;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        min-height: var(--zm-control-height-md);
        padding: 0 40px 0 var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border);
        border-radius: var(--zm-radius-md);
        color: var(--zm-color-text);
        background: var(--zm-color-surface);
        font: inherit;
      }
      input:focus {
        outline: none;
        border-color: var(--zm-color-border-focus);
        box-shadow: var(--zm-focus-ring);
      }
      .chevron {
        position: absolute;
        inset: 0 var(--zm-spacing-3) 0 auto;
        display: grid;
        place-items: center;
        color: var(--zm-color-text-muted);
        pointer-events: none;
      }
      .list {
        position: absolute;
        z-index: var(--zm-z-dropdown);
        inset: calc(100% + var(--zm-spacing-2)) 0 auto 0;
        display: grid;
        gap: var(--zm-spacing-1);
        max-height: 240px;
        overflow: auto;
        padding: var(--zm-spacing-2);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }
      button {
        all: unset;
        cursor: pointer;
        padding: var(--zm-spacing-3);
        border-radius: var(--zm-radius-md);
      }
      button:hover,
      button:focus-visible {
        background: var(--zm-color-background-subtle);
      }
      button:disabled {
        cursor: not-allowed;
        color: var(--zm-color-text-disabled);
      }
      .empty {
        padding: var(--zm-spacing-3);
        color: var(--zm-color-text-muted);
      }
    `,
  ];

  @property({ type: String }) label = "Combobox";
  @property({ type: String }) placeholder = "Search";
  @property({ type: String }) value = "";
  @property({ attribute: false }) options: ZmComboboxOption[] = [];
  @state() private open = false;
  @state() private query = "";

  private get filteredOptions() {
    const query = this.query.trim().toLowerCase();
    if (!query) return this.options;
    return this.options.filter((item) =>
      `${item.label} ${item.value}`.toLowerCase().includes(query),
    );
  }

  private select(item: ZmComboboxOption) {
    if (item.disabled) return;
    this.value = item.value;
    this.query = item.label;
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: item.value, item },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const items = this.filteredOptions;
    return html`<div class="field">
      <label>${this.label}</label>
      <div class="control">
        <input
          role="combobox"
          aria-expanded=${this.open ? "true" : "false"}
          placeholder=${this.placeholder}
          .value=${this.query}
          @focus=${() => (this.open = true)}
          @input=${(event: InputEvent) => {
            this.query = (event.currentTarget as HTMLInputElement).value;
            this.open = true;
          }}
        />
        <span class="chevron">⌄</span>
        ${this.open
          ? html`<div class="list" role="listbox">
              ${items.length
                ? items.map(
                    (item) =>
                      html`<button
                        type="button"
                        role="option"
                        ?disabled=${item.disabled}
                        @click=${() => this.select(item)}
                      >
                        ${item.label}
                      </button>`,
                  )
                : html`<span class="empty">No results</span>`}
            </div>`
          : null}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-combobox": ZmCombobox;
  }
}
