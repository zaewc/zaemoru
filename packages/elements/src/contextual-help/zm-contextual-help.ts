import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-contextual-help")
export class ZmContextualHelp extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Contextual Help";

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
    return html`<span class="context"
      ><button class="subtle" type="button" aria-expanded=${this.open} @click=${this.toggleOpen}>
        ?</button
      >${this.open
        ? html`<span class="bubble" role="tooltip">${this.description || this.label}</span>`
        : null}<slot></slot
    ></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-contextual-help": ZmContextualHelp;
  }
}
