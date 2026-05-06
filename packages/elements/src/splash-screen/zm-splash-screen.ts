import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-splash-screen")
export class ZmSplashScreen extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Splash Screen";

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
    return html`<section class="splash">
      <strong>${this.label}</strong>
      <p>${this.description}</p>
      <slot></slot>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-splash-screen": ZmSplashScreen;
  }
}
