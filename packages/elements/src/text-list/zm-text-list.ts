import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-text-list")
export class ZmTextList extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Text List";

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
      <ul>
        ${this.items.map(
          (item) =>
            html`<li>
              <strong>${item.label}</strong>${item.description
                ? html`<p class="description">${item.description}</p>`
                : null}
            </li>`,
        )}<slot
        ></slot>
      </ul>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-list": ZmTextList;
  }
}
