import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-quantity-toggle")
export class ZmQuantityToggle extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Quantity Toggle";

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

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 99;

  private step(delta: number) {
    const next = Math.min(this.max, Math.max(this.min, Number(this.value || 0) + delta));
    this.value = String(next);
    dispatchKrdsEvent(this, "zm-change", { value: next });
  }

  override render() {
    return html`<div class="surface row between" role="group" aria-label=${this.label}>
      <button
        type="button"
        @click=${() => this.step(-1)}
        ?disabled=${this.disabled || Number(this.value) <= this.min}
      >
        −</button
      ><strong>${this.value}</strong
      ><button
        type="button"
        @click=${() => this.step(1)}
        ?disabled=${this.disabled || Number(this.value) >= this.max}
      >
        +
      </button>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-quantity-toggle": ZmQuantityToggle;
  }
}
