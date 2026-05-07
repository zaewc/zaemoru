import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmResizableDirection = "horizontal" | "vertical";

@customElement("zm-resizable")
export class ZmResizable extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .panels {
        display: grid;
        grid-template-columns: var(--zm-resizable-size, 50%) 8px 1fr;
        min-height: 180px;
        overflow: hidden;
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
      }
      :host([direction="vertical"]) .panels {
        grid-template-columns: 1fr;
        grid-template-rows: var(--zm-resizable-size, 50%) 8px 1fr;
      }
      .panel {
        min-width: 0;
        min-height: 0;
        overflow: auto;
        padding: var(--zm-spacing-4);
      }
      .handle {
        background: var(--zm-color-background-muted);
        cursor: col-resize;
      }
      :host([direction="vertical"]) .handle {
        cursor: row-resize;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  direction: ZmResizableDirection = "horizontal";

  @property({ type: String })
  size = "50%";

  override render() {
    return html`<div class="panels" style=${`--zm-resizable-size: ${this.size};`}>
      <section class="panel"><slot name="start"></slot></section>
      <div class="handle" role="separator" aria-orientation=${this.direction}></div>
      <section class="panel"><slot name="end"></slot></section>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-resizable": ZmResizable;
  }
}
