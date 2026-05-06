import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-post")
export class ZmPost extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: grid;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-5);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        font-family: var(--zm-font-family-base);
      }
      .meta {
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        color: var(--zm-color-text-muted);
        font-size: var(--zm-font-size-sm);
      }
      h3 {
        margin: 0;
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-lg);
        line-height: var(--zm-line-height-snug);
      }
      p {
        margin: 0;
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-normal);
      }
    `,
  ];

  @property({ type: String }) postTitle = "";
  @property({ type: String }) description = "";
  @property({ type: String }) meta = "";

  override render() {
    return html`
      ${this.meta ? html`<div class="meta">${this.meta}</div>` : html`<slot name="meta"></slot>`}
      ${this.postTitle ? html`<h3>${this.postTitle}</h3>` : nothing}
      ${this.description ? html`<p>${this.description}</p>` : nothing}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-post": ZmPost;
  }
}
