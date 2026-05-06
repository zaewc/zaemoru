import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-radio-button")
export class ZmRadioButton extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Radio Button";

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

  @property({ type: Boolean, reflect: true })
  checked = false;

  private onChecked(event: Event) {
    this.checked = (event.currentTarget as HTMLInputElement).checked;
    dispatchKrdsEvent(this, "zm-change", { checked: this.checked, value: this.value });
  }

  override render() {
    return html`<label class="surface row"
      ><input
        type="radio"
        .checked=${this.checked}
        .value=${this.value}
        ?disabled=${this.disabled}
        @change=${this.onChecked} /><span>${this.label}</span><slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-radio-button": ZmRadioButton;
  }
}
