import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmTabItem {
  value: string;
  label: string;
  badge?: string;
  disabled?: boolean;
}

export type ZmTabVariant = "underline" | "filled";

@customElement("zm-tab")
export class ZmTab extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .bar {
        display: flex;
        align-items: stretch;
        gap: var(--zm-spacing-2);
        position: relative;
      }
      :host([variant="underline"]) .bar {
        border-bottom: 1px solid var(--zm-color-border-subtle);
        gap: 0;
      }
      :host([full-width]) .bar {
        gap: 0;
      }
      button {
        all: unset;
        cursor: pointer;
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        font-size: var(--zm-font-size-md);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text-subtle);
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        transition:
          color var(--zm-duration-fast) var(--zm-easing-standard),
          background-color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host([full-width]) button {
        flex: 1;
        justify-content: center;
      }
      button[aria-selected="true"] {
        color: var(--zm-color-text-strong);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--zm-focus-ring);
        border-radius: var(--zm-radius-sm);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }

      :host([variant="underline"]) button::after {
        content: "";
        position: absolute;
        left: var(--zm-spacing-4);
        right: var(--zm-spacing-4);
        bottom: -1px;
        height: 2px;
        background: var(--zm-color-primary);
        border-radius: var(--zm-radius-sm);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform var(--zm-duration-base) var(--zm-easing-emphasized);
      }
      :host([variant="underline"]) button[aria-selected="true"]::after {
        transform: scaleX(1);
      }

      :host([variant="filled"]) .bar {
        background: var(--zm-color-background-subtle);
        padding: 4px;
        border-radius: var(--zm-radius-pill);
      }
      :host([variant="filled"]) button {
        padding: var(--zm-spacing-2) var(--zm-spacing-4);
        border-radius: var(--zm-radius-pill);
        font-size: var(--zm-font-size-sm);
      }
      :host([variant="filled"]) button[aria-selected="true"] {
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-xs);
      }

      .badge {
        font-size: var(--zm-font-size-xs);
        background: var(--zm-color-background-muted);
        color: var(--zm-color-text-subtle);
        padding: 2px var(--zm-spacing-2);
        border-radius: var(--zm-radius-pill);
      }
      button[aria-selected="true"] .badge {
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
      }
    `,
  ];

  @property({ attribute: false }) items: ZmTabItem[] = [];
  @property({ type: String, reflect: true }) value = "";
  @property({ type: String, reflect: true }) variant: ZmTabVariant = "underline";
  @property({ type: Boolean, reflect: true, attribute: "full-width" })
  fullWidth = false;

  @state() private _slotted: ZmTabItem[] = [];

  override connectedCallback(): void {
    super.connectedCallback();
    this._readChildren();
  }

  private _readChildren() {
    const els = Array.from(this.querySelectorAll("zm-tab-item"));
    if (!els.length) return;
    this._slotted = els.map((el) => ({
      value: el.getAttribute("value") ?? "",
      label: el.textContent?.trim() ?? "",
      badge: el.getAttribute("badge") ?? undefined,
      disabled: el.hasAttribute("disabled"),
    }));
  }

  private _select(v: string) {
    if (this.value === v) return;
    this.value = v;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { value: v },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const items = this.items.length ? this.items : this._slotted;
    return html`
      <div class="bar" role="tablist">
        ${items.map(
          (it) => html`
            <button
              type="button"
              role="tab"
              aria-selected=${it.value === this.value ? "true" : "false"}
              ?disabled=${!!it.disabled}
              @click=${() => this._select(it.value)}
            >
              <span>${it.label}</span>
              ${it.badge ? html`<span class="badge">${it.badge}</span>` : ""}
            </button>
          `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-tab": ZmTab;
  }
}
