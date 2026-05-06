import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmSectionGap = "none" | "small" | "medium" | "large";

@customElement("zm-section")
export class ZmSection extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
      }
      header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
        margin-bottom: var(--zm-spacing-4);
      }
      .title {
        font-size: var(--zm-font-size-xl);
        font-weight: var(--zm-font-weight-bold);
        color: var(--zm-color-text-strong);
        letter-spacing: var(--zm-letter-spacing-tight);
        line-height: var(--zm-line-height-tight);
      }
      .description {
        margin-top: var(--zm-spacing-2);
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-normal);
      }
      .body {
        display: flex;
        flex-direction: column;
        gap: var(--zm-spacing-4);
      }
      :host([gap="none"]) .body {
        gap: 0;
      }
      :host([gap="small"]) .body {
        gap: var(--zm-spacing-2);
      }
      :host([gap="medium"]) .body {
        gap: var(--zm-spacing-4);
      }
      :host([gap="large"]) .body {
        gap: var(--zm-spacing-6);
      }
    `,
  ];

  @property({ type: String, attribute: "section-title" })
  sectionTitle = "";

  @property({ type: String })
  description = "";

  @property({ type: String, reflect: true })
  gap: ZmSectionGap = "medium";

  override render() {
    const hasHeader = this.sectionTitle || this.description;
    return html`
      ${hasHeader
        ? html`
            <header>
              <div>
                ${this.sectionTitle ? html`<div class="title">${this.sectionTitle}</div>` : nothing}
                ${this.description
                  ? html`<div class="description">${this.description}</div>`
                  : nothing}
              </div>
              <slot name="action"></slot>
            </header>
          `
        : nothing}
      <div class="body"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-section": ZmSection;
  }
}
