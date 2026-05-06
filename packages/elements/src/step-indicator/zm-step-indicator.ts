import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-step-indicator")
export class ZmStepIndicator extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Step Indicator";

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
  current = 1;

  private get currentIndex() {
    return Math.max(0, this.current - 1);
  }

  override render() {
    const steps = this.items.length ? this.items : [{ label: "1" }, { label: "2" }, { label: "3" }];
    return html`<ol class="surface steps">
      ${steps.map(
        (item, index) =>
          html`<li class=${index <= this.currentIndex ? "active" : ""}>
            <span>${index + 1}</span><strong>${item.label}</strong>
          </li>`,
      )}
    </ol>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-step-indicator": ZmStepIndicator;
  }
}
