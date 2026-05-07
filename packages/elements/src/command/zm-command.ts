import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmCommandItem {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

@customElement("zm-command")
export class ZmCommand extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .surface {
        display: grid;
        overflow: hidden;
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-sm);
      }
      input {
        min-height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-4);
        border: 0;
        border-bottom: 1px solid var(--zm-color-border-subtle);
        font: inherit;
      }
      input:focus {
        outline: none;
      }
      .list {
        display: grid;
        gap: var(--zm-spacing-1);
        max-height: 280px;
        overflow: auto;
        padding: var(--zm-spacing-2);
      }
      button {
        all: unset;
        cursor: pointer;
        display: grid;
        gap: var(--zm-spacing-1);
        padding: var(--zm-spacing-3);
        border-radius: var(--zm-radius-md);
      }
      button:hover,
      button:focus-visible {
        background: var(--zm-color-background-subtle);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
      strong {
        font-size: var(--zm-font-size-md);
      }
      span {
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
      }
      .empty {
        padding: var(--zm-spacing-4);
        color: var(--zm-color-text-muted);
      }
    `,
  ];

  @property({ type: String }) placeholder = "Type a command";
  @property({ attribute: false }) items: ZmCommandItem[] = [];
  @state() private query = "";

  private get filteredItems() {
    const query = this.query.trim().toLowerCase();
    if (!query) return this.items;
    return this.items.filter((item) =>
      `${item.label} ${item.description ?? ""}`.toLowerCase().includes(query),
    );
  }

  private select(item: ZmCommandItem) {
    if (item.disabled) return;
    this.dispatchEvent(
      new CustomEvent("zm-select", {
        detail: { value: item.value, item },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const items = this.filteredItems;
    return html`<div class="surface">
      <input
        type="search"
        placeholder=${this.placeholder}
        .value=${this.query}
        @input=${(event: InputEvent) =>
          (this.query = (event.currentTarget as HTMLInputElement).value)}
      />
      <div class="list" role="listbox">
        ${items.length
          ? items.map(
              (item) =>
                html`<button
                  type="button"
                  ?disabled=${item.disabled}
                  @click=${() => this.select(item)}
                >
                  <strong>${item.label}</strong>
                  ${item.description ? html`<span>${item.description}</span>` : null}
                </button>`,
            )
          : html`<span class="empty">No results</span>`}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-command": ZmCommand;
  }
}
