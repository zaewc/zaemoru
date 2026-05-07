import { html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmAvatarSize = "small" | "medium" | "large";

@customElement("zm-avatar")
export class ZmAvatar extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-grid;
        place-items: center;
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: 50%;
        overflow: hidden;
        background: var(--zm-color-primary-subtle);
        color: var(--zm-color-primary);
        font-family: var(--zm-font-family-base);
        font-weight: var(--zm-font-weight-bold);
        user-select: none;
      }
      :host([size="small"]) {
        --avatar-size: 32px;
        font-size: var(--zm-font-size-sm);
      }
      :host,
      :host([size="medium"]) {
        --avatar-size: 44px;
        font-size: var(--zm-font-size-md);
      }
      :host([size="large"]) {
        --avatar-size: 64px;
        font-size: var(--zm-font-size-xl);
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ];

  @property({ type: String }) src = "";
  @property({ type: String }) alt = "";
  @property({ type: String }) fallback = "";
  @property({ type: String, reflect: true }) size: ZmAvatarSize = "medium";
  @state() private imageFailed = false;

  override updated(changed: Map<string, unknown>) {
    if (changed.has("src")) this.imageFailed = false;
  }

  override render() {
    if (this.src && !this.imageFailed) {
      return html`<img
        src=${this.src}
        alt=${this.alt}
        @error=${() => (this.imageFailed = true)}
      />`;
    }
    return html`<slot>${this.fallback || this.alt.slice(0, 2).toUpperCase() || nothing}</slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-avatar": ZmAvatar;
  }
}
