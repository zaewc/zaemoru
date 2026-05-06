import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-select")
export class ZmSelect extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Select";

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

  private onSelect(event: Event) {
    this.value = (event.currentTarget as HTMLSelectElement).value;
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  override render() {
    return html`<label class="surface"
      ><span class="title">${this.label}</span
      ><select .value=${this.value} ?disabled=${this.disabled} @change=${this.onSelect}>
        ${this.items.map(
          (item) =>
            html`<option value=${item.value ?? item.label} ?disabled=${item.disabled}>
              ${item.label}
            </option>`,
        )}</select
      ><slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-select": ZmSelect;
  }
}
