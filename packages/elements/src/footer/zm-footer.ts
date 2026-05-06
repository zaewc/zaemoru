import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-footer")
export class ZmFooter extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Footer";

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
    return html`<footer class="surface">
      <strong>${this.label}</strong>
      <p class="description">${this.description}</p>
      <nav class="row wrap"><slot></slot></nav>
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-footer": ZmFooter;
  }
}
