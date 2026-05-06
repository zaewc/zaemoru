import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-breadcrumb")
export class ZmBreadcrumb extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Breadcrumb";

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
    const role = "navigation";
    return html`<nav class="surface" aria-label=${this.label} role=${role}>
      <ul class="list row wrap">
        ${this.items.map(
          (item) =>
            html`<li>
              <a
                class=${item.current ? "pill" : ""}
                href=${item.href ?? "#"}
                aria-current=${item.current ? "page" : undefined}
                >${item.label}</a
              >
            </li>`,
        )}<slot
        ></slot>
      </ul>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-breadcrumb": ZmBreadcrumb;
  }
}
