import { html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-select")
export class ZmSelect extends ZmElement {
  static override styles = [
    ZmElement.styles,
    krdsComponentStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .field {
        position: relative;
        display: grid;
        gap: var(--zm-spacing-2);
      }

      .trigger {
        appearance: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
        width: 100%;
        min-height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-5);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
        cursor: pointer;
        text-align: left;
        font: inherit;
        font-size: var(--zm-font-size-md);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }

      .trigger:hover {
        background: var(--zm-color-background-muted);
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: var(--zm-color-border-focus);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-focus-ring);
      }

      .value {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value.placeholder {
        color: var(--zm-color-text-muted);
      }

      .chevron {
        flex: 0 0 auto;
        width: 10px;
        height: 10px;
        border-right: 2px solid var(--zm-color-text-muted);
        border-bottom: 2px solid var(--zm-color-text-muted);
        transform: translateY(-2px) rotate(45deg);
        transition: transform var(--zm-duration-fast) var(--zm-easing-standard);
      }

      :host([open]) .chevron {
        transform: translateY(2px) rotate(225deg);
      }

      .menu {
        position: absolute;
        z-index: var(--zm-z-dropdown);
        inset: calc(100% + var(--zm-spacing-2)) 0 auto;
        display: grid;
        gap: var(--zm-spacing-1);
        max-height: 260px;
        overflow: auto;
        padding: var(--zm-spacing-2);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }

      .option {
        appearance: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
        width: 100%;
        min-height: 40px;
        padding: 0 var(--zm-spacing-4);
        border: 0;
        border-radius: var(--zm-radius-md);
        background: transparent;
        color: var(--zm-color-text);
        cursor: pointer;
        text-align: left;
        font: inherit;
      }

      .option:hover,
      .option:focus-visible {
        outline: none;
        background: var(--zm-color-background-subtle);
      }

      .option[aria-selected="true"] {
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
        font-weight: var(--zm-font-weight-semibold);
      }

      .option:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }

      .check {
        color: var(--zm-color-primary);
        font-weight: var(--zm-font-weight-bold);
      }

      :host([disabled]) .trigger {
        opacity: 0.55;
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: String })
  label = "Select";

  @property({ type: String })
  description = "";

  @property({ type: String })
  href = "#";

  @property({ type: String })
  value = "";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ attribute: false })
  items: KrdsItem[] = [];

  @state()
  private open = false;

  private get options() {
    return this.items.length === 0 ? [{ label: "Select an option", value: "" }] : this.items;
  }

  private get selectedItem() {
    return this.options.find((item) => (item.value ?? item.label) === this.value);
  }

  private toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.toggleAttribute("open", this.open);
  }

  private close() {
    this.open = false;
    this.toggleAttribute("open", false);
  }

  private onSelect(item: KrdsItem) {
    if (item.disabled) return;
    this.value = item.value ?? item.label;
    this.close();
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  private onFocusOut(event: FocusEvent) {
    const next = event.relatedTarget;
    if (next instanceof Node && this.renderRoot.contains(next)) return;
    this.close();
  }

  override render() {
    const selected = this.selectedItem;
    const display = (selected?.label ?? this.description) || "Select an option";

    return html`<label class="field"
      ><span class="title">${this.label}</span>
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        aria-haspopup="listbox"
        aria-expanded=${this.open ? "true" : "false"}
        @click=${this.toggle}
        @focusout=${this.onFocusOut}
      >
        <span class=${`value ${selected ? "" : "placeholder"}`.trim()}>${display}</span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      ${this.open
        ? html`<div class="menu" role="listbox" @focusout=${this.onFocusOut}>
            ${this.options.map((item) => {
              const itemValue = item.value ?? item.label;
              const selectedItem = itemValue === this.value;
              return html`<button
                class="option"
                type="button"
                role="option"
                ?disabled=${item.disabled}
                aria-selected=${selectedItem ? "true" : "false"}
                @click=${() => this.onSelect(item)}
              >
                <span>${item.label}</span>
                ${selectedItem ? html`<span class="check" aria-hidden="true">✓</span>` : nothing}
              </button>`;
            })}
          </div>`
        : nothing}
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-select": ZmSelect;
  }
}
