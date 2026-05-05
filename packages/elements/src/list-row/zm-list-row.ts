import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-list-row")
export class ZmListRow extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-4);
        padding: var(--zm-spacing-4) var(--zm-spacing-5);
        background: var(--zm-color-surface);
        border-radius: var(--zm-radius-md);
        font-family: var(--zm-font-family-base);
        color: var(--zm-color-text);
        transition: background-color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host([interactive]) {
        cursor: pointer;
      }
      :host([interactive]:hover) {
        background: var(--zm-color-background-subtle);
      }
      :host([interactive]:focus-visible) {
        outline: none;
        box-shadow: var(--zm-focus-ring);
      }

      .leading,
      .trailing {
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
        color: var(--zm-color-text-subtle);
      }
      .body {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }
      .title {
        font-size: var(--zm-font-size-md);
        font-weight: var(--zm-font-weight-semibold);
        color: var(--zm-color-text-strong);
        line-height: var(--zm-line-height-snug);
      }
      .description {
        font-size: var(--zm-font-size-sm);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-snug);
      }
      .chevron {
        color: var(--zm-color-text-muted);
      }
    `,
  ];

  @property({ type: String })
  title = "";

  @property({ type: String })
  description = "";

  @property({ type: Boolean, reflect: true })
  interactive = false;

  @property({ type: Boolean, reflect: true })
  chevron = false;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.interactive && !this.hasAttribute("tabindex")) {
      this.tabIndex = 0;
    }
    if (this.interactive && !this.hasAttribute("role")) {
      this.setAttribute("role", "button");
    }
  }

  override render() {
    return html`
      <span class="leading"><slot name="leading"></slot></span>
      <div class="body">
        ${this.title ? html`<span class="title">${this.title}</span>` : nothing}
        ${this.description
          ? html`<span class="description">${this.description}</span>`
          : nothing}
        <slot></slot>
      </div>
      <span class="trailing"><slot name="trailing"></slot></span>
      ${this.chevron
        ? html`<span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>`
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-list-row": ZmListRow;
  }
}
