import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-masthead")
export class ZmMasthead extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Masthead";

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
    return html`<section class="surface" role="banner">
      <div class="row between wrap">
        <p class="description">${this.label}</p>
        <a href=${this.href}><slot name="action">자세히 보기</slot></a>
      </div>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-masthead": ZmMasthead;
  }
}
