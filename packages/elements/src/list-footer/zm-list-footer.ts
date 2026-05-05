import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-list-footer")
export class ZmListFooter extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--zm-spacing-2);
        padding: var(--zm-spacing-3) var(--zm-spacing-5) var(--zm-spacing-4);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-muted);
        line-height: var(--zm-line-height-normal);
      }
      .description {
        white-space: pre-line;
      }
      .action {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-2);
      }
    `,
  ];

  @property({ type: String }) description = "";

  override render() {
    return html`
      ${this.description
        ? html`<div class="description">${this.description}</div>`
        : nothing}
      <slot></slot>
      <div class="action"><slot name="action"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-list-footer": ZmListFooter;
  }
}
