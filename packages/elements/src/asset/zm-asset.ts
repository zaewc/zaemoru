import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmAssetShape = "rounded" | "circle" | "square";

@customElement("zm-asset")
export class ZmAsset extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        width: 48px;
        height: 48px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-subtle);
        border-radius: var(--zm-radius-lg);
      }
      :host([shape="circle"]) {
        border-radius: 50%;
      }
      :host([shape="square"]) {
        border-radius: var(--zm-radius-sm);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ];

  @property({ type: String }) src = "";
  @property({ type: String }) alt = "";
  @property({ type: String, reflect: true }) shape: ZmAssetShape = "rounded";

  override render() {
    return this.src
      ? html`<img src=${this.src} alt=${this.alt} />`
      : html`<slot>${this.alt || nothing}</slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-asset": ZmAsset;
  }
}
