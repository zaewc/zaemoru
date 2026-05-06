import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmDialogKind = "alert" | "confirm";

@customElement("zm-dialog")
export class ZmDialog extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) dialogTitle = "";
  @property({ type: String }) description = "";
  @property({ type: String, reflect: true }) kind: ZmDialogKind = "alert";

  private _emit(name: string) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <zm-modal
        .open=${this.open}
        modalTitle=${this.dialogTitle}
        description=${this.description}
        @zm-close=${() => this._emit("zm-close")}
      >
        <slot></slot>
        <span slot="actions">
          ${this.kind === "confirm"
            ? html`<zm-button variant="secondary" @click=${() => this._emit("zm-cancel")}
                >Cancel</zm-button
              >`
            : null}
          <zm-button @click=${() => this._emit("zm-confirm")}>OK</zm-button>
        </span>
      </zm-modal>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-dialog": ZmDialog;
  }
}
