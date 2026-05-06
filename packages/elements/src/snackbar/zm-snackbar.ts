import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-snackbar")
export class ZmSnackbar extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Snackbar";

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

  private action() {
    dispatchKrdsEvent(this, "zm-action", {});
  }

  override render() {
    return html`<div class="snackbar" role="status">
      <span><slot>${this.label}</slot></span
      ><button type="button" @click=${this.action}>${this.description || "Action"}</button>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-snackbar": ZmSnackbar;
  }
}
