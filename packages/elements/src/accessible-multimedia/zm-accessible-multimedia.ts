import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-accessible-multimedia")
export class ZmAccessibleMultimedia extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Accessible Multimedia";

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
      <div class="media"><slot name="media"></slot></div>
      <figcaption>
        <strong>${this.label}</strong>
        <p class="description">${this.description}</p>
        <slot></slot>
      </figcaption>
    </figure>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-accessible-multimedia": ZmAccessibleMultimedia;
  }
}
