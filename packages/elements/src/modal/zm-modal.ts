import { html, css, nothing } from "lit";
import { customElement, property, query } from "lit/decorators.js";
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
  @property({ type: String, attribute: "modal-title" }) modalTitle = "";
  @property({ type: String }) description = "";
  @property({ type: Boolean, attribute: "close-on-backdrop" }) closeOnBackdrop = true;
  @property({ type: Boolean, attribute: "close-on-escape" }) closeOnEscape = true;

  @query(".panel")
  private _panel!: HTMLElement;

  private _previousFocus: Element | null = null;
  private _previousBodyOverflow = "";

  override updated(changed: Map<string, unknown>) {
    if (!changed.has("open")) return;
    if (this.open) {
      this._previousFocus = document.activeElement;
      this._previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", this._onKeydown);
      queueMicrotask(() => this._focusFirst());
    } else {
      document.body.style.overflow = this._previousBodyOverflow;
      window.removeEventListener("keydown", this._onKeydown);
      if (this._previousFocus instanceof HTMLElement) {
        this._previousFocus.focus();
      }
    }
  }

  override disconnectedCallback(): void {
    window.removeEventListener("keydown", this._onKeydown);
    if (this.open) document.body.style.overflow = this._previousBodyOverflow;
    super.disconnectedCallback();
  }

  private _focusable() {
    return Array.from(
      this._panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
  }

  private _focusFirst() {
    const [first] = this._focusable();
    (first ?? this._panel)?.focus();
  }

  private _onKeydown = (event: KeyboardEvent) => {
    if (!this.open) return;
    if (event.key === "Escape" && this.closeOnEscape) {
      event.preventDefault();
      this._close("escape");
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = this._focusable();
    if (!focusable.length) {
      event.preventDefault();
      this._panel.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  private _close(reason: "backdrop" | "escape" | "programmatic" = "programmatic") {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("zm-close", {
        detail: { reason },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      <div class="backdrop" @click=${() => this.closeOnBackdrop && this._close("backdrop")}></div>
      <section
        class="panel"
        role="dialog"
        aria-modal="true"
        aria-label=${this.modalTitle || nothing}
        tabindex="-1"
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
