import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTopVariant = "default" | "transparent";

@customElement("zm-top")
export class ZmTop extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-2);
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        background: var(--zm-color-surface);
        font-family: var(--zm-font-family-base);
        min-height: 56px;
        position: relative;
      }
      :host([variant="transparent"]) {
        background: transparent;
      }
      :host([sticky]) {
        position: sticky;
        top: 0;
        z-index: var(--zm-z-sticky);
      }
      .leading,
      .trailing {
        display: inline-flex;
        align-items: center;
        gap: var(--zm-spacing-1);
        flex-shrink: 0;
      }
      .center {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      :host([align="start"]) .center {
        align-items: flex-start;
      }
      .title {
        font-size: var(--zm-font-size-lg);
        font-weight: var(--zm-font-weight-bold);
        color: var(--zm-color-text-strong);
        line-height: var(--zm-line-height-tight);
      }
      .subtitle {
        font-size: var(--zm-font-size-xs);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-snug);
      }
    `,
  ];

  @property({ type: String, attribute: "top-title" }) topTitle = "";
  @property({ type: String }) subtitle = "";
  @property({ type: String, reflect: true }) variant: ZmTopVariant = "default";
  @property({ type: String, reflect: true }) align: "start" | "center" =
    "center";
  @property({ type: Boolean, reflect: true }) sticky = false;

  override render() {
    return html`
      <div class="leading"><slot name="leading"></slot></div>
      <div class="center">
        ${this.topTitle
          ? html`<span class="title">${this.topTitle}</span>`
          : nothing}
        ${this.subtitle
          ? html`<span class="subtitle">${this.subtitle}</span>`
          : nothing}
        <slot></slot>
      </div>
      <div class="trailing"><slot name="trailing"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-top": ZmTop;
  }
}
