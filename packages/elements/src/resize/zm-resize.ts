import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-resize")
export class ZmResize extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Resize";

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

  private setValue(value: string) {
    this.value = value;
    dispatchKrdsEvent(this, "zm-change", { value });
  }

  override render() {
    return html`<div class="surface row wrap" role="group" aria-label=${this.label}>
      ${["small", "medium", "large"].map(
        (size) =>
          html`<button
            class=${this.value === size ? "primary" : ""}
            type="button"
            @click=${() => this.setValue(size)}
          >
            ${size}
          </button>`,
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-resize": ZmResize;
  }
}
