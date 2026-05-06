import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-disclosure")
export class ZmDisclosure extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Disclosure";

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
    return html`<details class="surface">
      <summary class="title">${this.label}</summary>
      <p class="description">${this.description}</p>
      <slot></slot>
    </details>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-disclosure": ZmDisclosure;
  }
}
