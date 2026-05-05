import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmSkeletonShape = "rect" | "circle" | "text";

@customElement("zm-skeleton")
export class ZmSkeleton extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        background: var(--zm-color-background-subtle);
        position: relative;
        overflow: hidden;
        border-radius: var(--zm-radius-md);
        width: var(--zm-skeleton-w, 100%);
        height: var(--zm-skeleton-h, 16px);
      }
      :host([shape="circle"]) {
        border-radius: 50%;
      }
      :host([shape="text"]) {
        border-radius: var(--zm-radius-sm);
        height: 1em;
      }
      :host::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.55),
          transparent
        );
        animation: zm-skeleton 1.4s var(--zm-easing-standard) infinite;
      }
      @keyframes zm-skeleton {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  shape: ZmSkeletonShape = "rect";

  @property({ type: String }) width = "";
  @property({ type: String }) height = "";

  override updated() {
    if (this.width) this.style.setProperty("--zm-skeleton-w", this.width);
    if (this.height) this.style.setProperty("--zm-skeleton-h", this.height);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("aria-busy", "true");
    this.setAttribute("aria-hidden", "true");
  }

  override render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-skeleton": ZmSkeleton;
  }
}
