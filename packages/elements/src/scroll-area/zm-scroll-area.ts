import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-scroll-area")
export class ZmScrollArea extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .viewport {
        box-sizing: border-box;
        max-height: var(--zm-scroll-height, 240px);
        overflow: auto;
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        scrollbar-color: var(--zm-color-border-strong) transparent;
      }
      .content {
        padding: var(--zm-spacing-4);
      }
    `,
  ];

  @property({ type: String }) height = "240px";

  override render() {
    return html`<div class="viewport" style=${`--zm-scroll-height: ${this.height};`}>
      <div class="content"><slot></slot></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-scroll-area": ZmScrollArea;
  }
}
