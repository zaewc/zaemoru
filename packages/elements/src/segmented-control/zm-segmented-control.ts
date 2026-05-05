import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmSegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@customElement("zm-segmented-control")
export class ZmSegmentedControl extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        background: var(--zm-color-background-subtle);
        border-radius: var(--zm-radius-pill);
        padding: 4px;
        font-family: var(--zm-font-family-base);
      }
      :host([full-width]) {
        display: flex;
        width: 100%;
      }
      button {
        all: unset;
        cursor: pointer;
        flex: 1;
        text-align: center;
        padding: var(--zm-spacing-2) var(--zm-spacing-4);
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text-subtle);
        border-radius: var(--zm-radius-pill);
        line-height: 1.2;
        transition: background-color var(--zm-duration-fast) var(--zm-easing-standard),
          color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }
      button[aria-selected="true"] {
        background: var(--zm-color-surface);
        color: var(--zm-color-text-strong);
        box-shadow: var(--zm-shadow-xs);
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--zm-focus-ring);
      }
      button:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }
    `,
  ];

  @property({ attribute: false })
  options: ZmSegmentedOption[] = [];

  @property({ type: String, reflect: true })
  value = "";

  @property({ type: Boolean, reflect: true, attribute: "full-width" })
  fullWidth = false;

  @state()
  private _slotted: ZmSegmentedOption[] = [];

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "tablist");
    this._readOptionsFromChildren();
  }

  private _readOptionsFromChildren() {
    const els = Array.from(this.querySelectorAll("zm-segment"));
    if (els.length === 0) return;
    this._slotted = els.map((el) => ({
      value: el.getAttribute("value") ?? "",
      label: el.textContent?.trim() ?? "",
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
    const opts = this.options.length ? this.options : this._slotted;
    return html`${opts.map(
      (o) => html`
        <button
          type="button"
          role="tab"
          aria-selected=${o.value === this.value ? "true" : "false"}
          ?disabled=${!!o.disabled}
          @click=${() => this._select(o.value)}
        >
          ${o.label}
        </button>
      `,
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-segmented-control": ZmSegmentedControl;
  }
}
