import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-help-panel")
export class ZmHelpPanel extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Help Panel";

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
    return html`<aside class="surface help">
      <strong class="title">${this.label}</strong>
      <p class="description">${this.description}</p>
      <slot></slot>
    </aside>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-help-panel": ZmHelpPanel;
  }
}
