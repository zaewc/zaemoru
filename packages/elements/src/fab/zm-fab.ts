import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-fab")
export class ZmFab extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Fab";

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

  private clickAction() {
    dispatchKrdsEvent(this, "zm-click", {});
  }

  override render() {
    return html`<button
      class="primary fab"
      type="button"
      ?disabled=${this.disabled}
      @click=${this.clickAction}
    >
      <slot>+</slot><span>${this.label}</span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-fab": ZmFab;
  }
}
