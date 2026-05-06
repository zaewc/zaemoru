import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-list-header")
export class ZmListHeader extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-4) var(--zm-spacing-5) var(--zm-spacing-2);
        font-family: var(--zm-font-family-base);
      }
      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }
      .title {
        font-size: var(--zm-font-size-md);
        font-weight: var(--zm-font-weight-bold);
        color: var(--zm-color-text-strong);
        letter-spacing: var(--zm-letter-spacing-tight);
      }
      .description {
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-snug);
      }
      .action {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        flex-shrink: 0;
      }
    `,
  ];

  @property({ type: String, attribute: "header-title" }) headerTitle = "";
  @property({ type: String }) description = "";

  override render() {
    return html`
      <div class="text">
        ${this.headerTitle ? html`<span class="title">${this.headerTitle}</span>` : nothing}
        ${this.description ? html`<span class="description">${this.description}</span>` : nothing}
      </div>
      <div class="action"><slot name="action"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-list-header": ZmListHeader;
  }
}
