import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
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
        display: grid;
        gap: var(--zm-spacing-2);
      }

      .control {
        position: relative;
        display: flex;
        align-items: center;
        min-height: var(--zm-control-height-md);
        padding: 0 calc(var(--zm-spacing-5) + 24px) 0 var(--zm-spacing-5);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }

      .control:hover {
        background: var(--zm-color-background-muted);
      }

      .control:focus-within {
        border-color: var(--zm-color-border-focus);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-focus-ring);
      }

      select {
        appearance: none;
        border: 0;
        outline: 0;
        flex: 1;
        min-width: 0;
        width: 100%;
        padding: 0;
        background: transparent;
        color: var(--zm-color-text);
        font: inherit;
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-normal);
        cursor: pointer;
      }

      .chevron {
        pointer-events: none;
        position: absolute;
        right: var(--zm-spacing-5);
        width: 10px;
        height: 10px;
        border-right: 2px solid var(--zm-color-text-muted);
        border-bottom: 2px solid var(--zm-color-text-muted);
        transform: translateY(-2px) rotate(45deg);
      }

      :host([disabled]) .control {
        opacity: 0.55;
        cursor: not-allowed;
      }

      :host([disabled]) select {
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

  private onSelect(event: Event) {
    this.value = (event.currentTarget as HTMLSelectElement).value;
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  override render() {
    return html`<label class="field"
      ><span class="title">${this.label}</span>
      <span class="control">
        <select .value=${this.value} ?disabled=${this.disabled} @change=${this.onSelect}>
          ${this.items.length === 0
            ? html`<option value="">Select an option</option>`
            : this.items.map(
                (item) =>
                  html`<option value=${item.value ?? item.label} ?disabled=${item.disabled}>
                    ${item.label}
                  </option>`,
              )}
        </select>
        <span class="chevron" aria-hidden="true"></span>
      </span>
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-select": ZmSelect;
  }
}
