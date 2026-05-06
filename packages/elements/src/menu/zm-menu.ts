import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmMenuItem {
  value: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
}

@customElement("zm-menu")
export class ZmMenu extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-block;
        min-width: 180px;
        padding: var(--zm-spacing-2);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        border: 1px solid var(--zm-color-border-subtle);
        box-shadow: var(--zm-shadow-lg);
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        cursor: pointer;
        box-sizing: border-box;
        width: 100%;
        padding: var(--zm-spacing-3);
        border-radius: var(--zm-radius-md);
        color: var(--zm-color-text);
        font-size: var(--zm-font-size-md);
      }
      button:hover:not(:disabled),
      button:focus-visible {
        background: var(--zm-color-background-subtle);
      }
      button.danger {
        color: var(--zm-color-danger);
      }
      button:disabled {
        cursor: not-allowed;
        color: var(--zm-color-text-disabled);
      }
    `,
  ];

  @property({ attribute: false }) items: ZmMenuItem[] = [];
  @state() private _slotted: ZmMenuItem[] = [];

  override connectedCallback(): void {
    super.connectedCallback();
    this._readChildren();
  }

  private _readChildren() {
    const els = Array.from(this.querySelectorAll("zm-menu-item"));
    this._slotted = els.map((el) => ({
      value: el.getAttribute("value") ?? "",
      label: el.textContent?.trim() ?? "",
      disabled: el.hasAttribute("disabled"),
      danger: el.hasAttribute("danger"),
    }));
  }

  private _select(item: ZmMenuItem) {
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
    const items = this.items.length ? this.items : this._slotted;
    return html`${items.map(
        (item) => html`
          <button
            type="button"
            class=${item.danger ? "danger" : ""}
            ?disabled=${!!item.disabled}
            @click=${() => this._select(item)}
          >
            ${item.label}
          </button>
        `,
      )}<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-menu": ZmMenu;
  }
}
