import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-structured-list")
export class ZmStructuredList extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Structured List";

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
    return html`<div class="surface">
      <dl class="stack">
        ${this.items.map(
          (item) =>
            html`<div>
              <dt class="title">${item.label}</dt>
              <dd class="description">${item.description ?? item.value ?? ""}</dd>
            </div>`,
        )}<slot></slot>
      </dl>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-structured-list": ZmStructuredList;
  }
}
