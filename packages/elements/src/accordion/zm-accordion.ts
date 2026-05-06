import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-accordion")
export class ZmAccordion extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Accordion";

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
    return html`<div class="surface stack">
      ${this.items.map(
        (item) =>
          html`<details>
            <summary class="title">${item.label}</summary>
            <p class="description">${item.description ?? item.value ?? ""}</p>
          </details>`,
      )}<slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-accordion": ZmAccordion;
  }
}
