import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBottomCtaLayout = "single" | "double";

@customElement("zm-bottom-cta")
export class ZmBottomCta extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        padding: var(--zm-spacing-4) var(--zm-spacing-5);
        background: var(--zm-color-surface);
        border-top: 1px solid var(--zm-color-border-subtle);
      }
      :host([fixed]) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: var(--zm-z-sticky);
      }
      .actions {
        display: grid;
        gap: var(--zm-spacing-2);
      }
      :host([layout="double"]) .actions {
        grid-template-columns: 1fr 1fr;
      }
    `,
  ];

  @property({ type: String, reflect: true }) layout: ZmBottomCtaLayout = "single";
  @property({ type: Boolean, reflect: true }) fixed = false;

  override render() {
    return html`<div class="actions"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-bottom-cta": ZmBottomCta;
  }
}
