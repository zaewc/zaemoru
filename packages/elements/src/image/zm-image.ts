import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-image")
export class ZmImage extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Image";

  @property({ type: String })
  description = "";

  @property({ type: String })
  href = "#";

  @property({ type: String })
  value = "";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ attribute: false })
  items: KrdsItem[] = [];

  override render() {
    return html`<figure class="surface">
      <img src=${this.href} alt=${this.label} />
      <figcaption class="description">${this.description}</figcaption>
      <slot></slot>
    </figure>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-image": ZmImage;
  }
}
