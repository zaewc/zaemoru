import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-board-row")
export class ZmBoardRow extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-4);
        padding: var(--zm-spacing-4) var(--zm-spacing-5);
        background: var(--zm-color-surface);
        border-radius: var(--zm-radius-lg);
        font-family: var(--zm-font-family-base);
        color: var(--zm-color-text);
        box-shadow: var(--zm-shadow-xs);
        transition: transform var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host([interactive]) {
        cursor: pointer;
      }
      :host([interactive]:hover) {
        box-shadow: var(--zm-shadow-sm);
        transform: translateY(-1px);
      }
      :host([interactive]:focus-visible) {
        outline: none;
        box-shadow: var(--zm-focus-ring);
      }
      .leading {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--zm-color-text-subtle);
      }
      .body {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .eyebrow {
        font-size: var(--zm-font-size-xs);
        color: var(--zm-color-primary);
        font-weight: var(--zm-font-weight-semibold);
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      .title {
        font-size: var(--zm-font-size-md);
        font-weight: var(--zm-font-weight-bold);
        color: var(--zm-color-text-strong);
        line-height: var(--zm-line-height-snug);
      }
      .description {
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-snug);
      }
      .trailing {
        flex-shrink: 0;
        color: var(--zm-color-text-muted);
      }
    `,
  ];

  @property({ type: String }) eyebrow = "";
  @property({ type: String, attribute: "row-title" }) rowTitle = "";
  @property({ type: String }) description = "";
  @property({ type: Boolean, reflect: true }) interactive = false;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.interactive) {
      if (!this.hasAttribute("tabindex")) this.tabIndex = 0;
      if (!this.hasAttribute("role")) this.setAttribute("role", "button");
    }
  }

  override render() {
    return html`
      <div class="leading"><slot name="leading"></slot></div>
      <div class="body">
        ${this.eyebrow
          ? html`<span class="eyebrow">${this.eyebrow}</span>`
          : nothing}
        ${this.rowTitle
          ? html`<span class="title">${this.rowTitle}</span>`
          : nothing}
        ${this.description
          ? html`<span class="description">${this.description}</span>`
          : nothing}
        <slot></slot>
      </div>
      <div class="trailing"><slot name="trailing"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-board-row": ZmBoardRow;
  }
}
