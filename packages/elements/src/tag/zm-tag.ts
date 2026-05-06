import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-tag")
export class ZmTag extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Tag";

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

  private removeTag() {
    dispatchKrdsEvent(this, "zm-remove", { value: this.value || this.label });
  }

  override render() {
    return html`<span class="pill"
      ><slot>${this.label}</slot
      ><button
        class="remove"
        type="button"
        ?disabled=${this.disabled}
        @click=${this.removeTag}
        aria-label="Remove"
      >
        ×
      </button></span
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-tag": ZmTag;
  }
}
