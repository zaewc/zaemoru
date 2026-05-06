import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-skip-link")
export class ZmSkipLink extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Skip Link";

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
    return html`<a class="skip" href=${this.href}><slot>${this.label}</slot></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-skip-link": ZmSkipLink;
  }
}
