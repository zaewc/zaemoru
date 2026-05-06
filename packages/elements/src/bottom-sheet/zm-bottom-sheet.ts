import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-bottom-sheet")
export class ZmBottomSheet extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: var(--zm-z-modal);
        display: none;
        font-family: var(--zm-font-family-base);
      }
      :host([open]) {
        display: block;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(13, 17, 23, 0.48);
      }
      .sheet {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        max-height: min(86vh, 720px);
        overflow: auto;
        background: var(--zm-color-surface);
        color: var(--zm-color-text);
        border-radius: var(--zm-radius-xl) var(--zm-radius-xl) 0 0;
        padding: var(--zm-spacing-5);
        box-shadow: var(--zm-shadow-xl);
      }
      .handle {
        width: 40px;
        height: 4px;
        margin: 0 auto var(--zm-spacing-5);
        border-radius: var(--zm-radius-pill);
        background: var(--zm-color-background-muted);
      }
      header {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: var(--zm-spacing-4);
        margin-bottom: var(--zm-spacing-4);
      }
      h2 {
        margin: 0;
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-xl);
        line-height: var(--zm-line-height-snug);
      }
      button {
        all: unset;
        cursor: pointer;
        width: 36px;
        height: 36px;
        border-radius: var(--zm-radius-pill);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--zm-color-text-subtle);
      }
      button:hover {
        background: var(--zm-color-background-subtle);
      }
      button:focus-visible {
        box-shadow: var(--zm-focus-ring);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) sheetTitle = "";
  @property({ type: Boolean, attribute: "close-on-backdrop" }) closeOnBackdrop = true;

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("zm-close", { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="backdrop" @click=${() => this.closeOnBackdrop && this._close()}></div>
      <section
        class="sheet"
        role="dialog"
        aria-modal="true"
        aria-label=${this.sheetTitle || nothing}
      >
        <div class="handle" aria-hidden="true"></div>
        <header>
          ${this.sheetTitle ? html`<h2>${this.sheetTitle}</h2>` : html`<slot name="title"></slot>`}
          <button type="button" aria-label="Close" @click=${this._close}>×</button>
        </header>
        <slot></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-bottom-sheet": ZmBottomSheet;
  }
}
