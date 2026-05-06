import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-header")
export class ZmHeader extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Header";

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
    return html`<header class="surface">
      <div class="row between wrap">
        <a href=${this.href} class="title">${this.label}</a><slot name="actions"></slot>
      </div>
      <nav class="row wrap"><slot></slot></nav>
    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-header": ZmHeader;
  }
}
