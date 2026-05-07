import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import type { ZmMenuItem } from "../menu/zm-menu.js";

@customElement("zm-context-menu")
export class ZmContextMenu extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-block;
        font-family: var(--zm-font-family-base);
      }
      .trigger {
        display: contents;
      }
      .menu {
        position: fixed;
        z-index: var(--zm-z-popover);
        display: grid;
        min-width: 180px;
        gap: var(--zm-spacing-1);
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
  @state() private open = false;
  @state() private x = 0;
  @state() private y = 0;

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener("click", this.close);
    window.addEventListener("keydown", this.onKeydown);
  }

  override disconnectedCallback() {
    window.removeEventListener("click", this.close);
    window.removeEventListener("keydown", this.onKeydown);
    super.disconnectedCallback();
  }

  private close = () => {
    this.open = false;
  };

  private onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") this.open = false;
  };

  private onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.x = event.clientX;
    this.y = event.clientY;
    this.open = true;
  }

  private select(item: ZmMenuItem) {
    if (item.disabled) return;
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("zm-select", {
        detail: { value: item.value, item },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`<span class="trigger" @contextmenu=${this.onContextMenu}><slot></slot></span> ${this
        .open
        ? html`<div
            class="menu"
            role="menu"
            style=${`left: ${this.x}px; top: ${this.y}px;`}
            @click=${(event: Event) => event.stopPropagation()}
          >
            ${this.items.map(
              (item) =>
                html`<button
                  type="button"
                  role="menuitem"
                  class=${item.danger ? "danger" : ""}
                  ?disabled=${item.disabled}
                  @click=${() => this.select(item)}
                >
                  ${item.label}
                </button>`,
            )}
          </div>`
        : null}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-context-menu": ZmContextMenu;
  }
}
