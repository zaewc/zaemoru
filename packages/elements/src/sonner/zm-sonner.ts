import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmSonnerPosition = "top-right" | "bottom-right" | "bottom-center";

export interface ZmSonnerItem {
  label: string;
  description?: string;
  tone?: "default" | "success" | "warning" | "danger";
}

@customElement("zm-sonner")
export class ZmSonner extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .stack {
        display: grid;
        gap: var(--zm-spacing-2);
        width: min(360px, 100%);
      }
      .toast {
        display: grid;
        gap: var(--zm-spacing-1);
        padding: var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border-subtle);
        border-left: 4px solid var(--zm-color-primary);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }
      .toast.success {
        border-left-color: var(--zm-color-success);
      }
      .toast.warning {
        border-left-color: var(--zm-color-warning);
      }
      .toast.danger {
        border-left-color: var(--zm-color-danger);
      }
      strong {
        color: var(--zm-color-text-strong);
      }
      span {
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
      }
    `,
  ];

  @property({ type: String, reflect: true }) position: ZmSonnerPosition = "bottom-right";
  @property({ attribute: false }) items: ZmSonnerItem[] = [];

  override render() {
    const items = this.items.length
      ? this.items
      : [{ label: "Saved", description: "Your changes are up to date.", tone: "success" as const }];
    return html`<div class="stack" role="status" aria-live="polite">
      ${items.map(
        (item) =>
          html`<div class=${`toast ${item.tone ?? "default"}`}>
            <strong>${item.label}</strong>
            ${item.description ? html`<span>${item.description}</span>` : null}
          </div>`,
      )}
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-sonner": ZmSonner;
  }
}
