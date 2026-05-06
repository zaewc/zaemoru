import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-critical-alert")
export class ZmCriticalAlert extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Critical Alert";

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

  private close() {
    dispatchKrdsEvent(this, "zm-close", {});
  }

  override render() {
    return html`<section class="surface alert" role="alert">
      <div class="row between">
        <strong class="title">${this.label}</strong
        ><button class="subtle" type="button" @click=${this.close} aria-label="Close">×</button>
      </div>
      <p class="description">${this.description}</p>
      <slot></slot>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-critical-alert": ZmCriticalAlert;
  }
}
