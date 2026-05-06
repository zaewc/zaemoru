import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-toggle-switch")
export class ZmToggleSwitch extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Toggle Switch";

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

  @property({ type: Boolean, reflect: true })
  open = false;

  private toggle() {
    this.checked = !this.checked;
    dispatchKrdsEvent(this, "zm-change", { checked: this.checked });
  }

  private toggleOpen() {
    this.open = !this.open;
  }

  override render() {
    return html`<label class="surface row between"
      ><span>${this.label}</span
      ><button
        class="switch"
        type="button"
        role="switch"
        aria-checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.toggle}
      >
        <span></span></button
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-toggle-switch": ZmToggleSwitch;
  }
}
