import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-back-button")
export class ZmBackButton extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Back Button";

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
    dispatchKrdsEvent(this, "zm-back", {});
    if (typeof history !== "undefined") history.back();
  }

  override render() {
    return html`<button
      class="primary back-button"
      type="button"
      ?disabled=${this.disabled}
      @click=${this.clickAction}
    >
      <slot>←</slot><span>${this.label}</span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-back-button": ZmBackButton;
  }
}
