import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-range-slider")
export class ZmRangeSlider extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Range Slider";

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

  private onInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    this.value = target.value;
    dispatchKrdsEvent(this, "zm-input", { value: this.value });
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  override render() {
    return html`<label class="surface"
      ><span class="row between"
        ><span class="title">${this.label}</span><strong>${this.value}</strong></span
      ><input
        type="range"
        min=${this.min}
        max=${this.max}
        .value=${this.value}
        ?disabled=${this.disabled}
        @input=${this.onInput}
    /></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-range-slider": ZmRangeSlider;
  }
}
