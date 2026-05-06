import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-carousel")
export class ZmCarousel extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Carousel";

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
  index = 0;

  private move(delta: number) {
    const length = Math.max(this.items.length, 1);
    this.index = (this.index + delta + length) % length;
    dispatchKrdsEvent(this, "zm-change", { index: this.index });
  }

  override render() {
    const items = this.items.length
      ? this.items
      : [{ label: this.label, description: this.description }];
    const current = items[this.index] ?? items[0];
    return html`<section class="surface">
      <div class="row between">
        <button type="button" @click=${() => this.move(-1)}>‹</button>
        <div>
          <strong class="title">${current?.label}</strong>
          <p class="description">${current?.description ?? current?.value ?? ""}</p>
        </div>
        <button type="button" @click=${() => this.move(1)}>›</button>
      </div>
      <slot></slot>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-carousel": ZmCarousel;
  }
}
