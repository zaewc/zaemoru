import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-modal")
export class ZmModal extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: var(--zm-z-modal);
        display: none;
        place-items: center;
        padding: var(--zm-spacing-5);
        font-family: var(--zm-font-family-base);
      }
      :host([open]) {
        display: grid;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(13, 17, 23, 0.48);
      }
      .panel {
        position: relative;
        width: min(100%, 420px);
        padding: var(--zm-spacing-6);
        border-radius: var(--zm-radius-xl);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-xl);
      }
      h2 {
        margin: 0 0 var(--zm-spacing-2);
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-xl);
      }
      p {
        margin: 0 0 var(--zm-spacing-5);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-normal);
      }
      .actions {
        display: flex;
        gap: var(--zm-spacing-2);
        justify-content: flex-end;
        margin-top: var(--zm-spacing-5);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) modalTitle = "";
  @property({ type: String }) description = "";
  @property({ type: Boolean, attribute: "close-on-backdrop" }) closeOnBackdrop = true;

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("zm-close", { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="backdrop" @click=${() => this.closeOnBackdrop && this._close()}></div>
      <section
        class="panel"
        role="dialog"
        aria-modal="true"
        aria-label=${this.modalTitle || nothing}
      >
        ${this.modalTitle ? html`<h2>${this.modalTitle}</h2>` : html`<slot name="title"></slot>`}
        ${this.description ? html`<p>${this.description}</p>` : nothing}
        <slot></slot>
        <div class="actions"><slot name="actions"></slot></div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-modal": ZmModal;
  }
}
