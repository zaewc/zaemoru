import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-agreement")
export class ZmAgreement extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: grid;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-4);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-background-subtle);
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text-strong);
      }
      .box {
        width: 22px;
        height: 22px;
        border-radius: var(--zm-radius-sm);
        border: 1px solid var(--zm-color-border-strong);
        background: var(--zm-color-surface);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      :host([checked]) .box {
        background: var(--zm-color-primary);
        border-color: var(--zm-color-primary);
        color: var(--zm-color-on-primary);
      }
      .items {
        display: grid;
        gap: var(--zm-spacing-2);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: String }) label = "Agree to all";
  @state() private _version = 0;

  private _toggle() {
    this.checked = !this.checked;
    this.querySelectorAll<HTMLElement>("zm-checkbox").forEach((el) => {
      (el as HTMLElement & { checked?: boolean }).checked = this.checked;
    });
    this._version++;
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    void this._version;
    return html`
      <button type="button" @click=${this._toggle}>
        <span class="box">${this.checked ? "✓" : ""}</span>
        <slot name="label">${this.label}</slot>
      </button>
      <div class="items"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-agreement": ZmAgreement;
  }
}
