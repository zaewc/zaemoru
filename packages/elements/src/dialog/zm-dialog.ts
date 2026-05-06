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
  @property({ type: String, attribute: "dialog-title" }) dialogTitle = "";
  @property({ type: String }) description = "";
  @property({ type: String, reflect: true }) kind: ZmDialogKind = "alert";

  private _close(reason: "close" | "cancel" | "confirm") {
    this.open = false;
    const eventName =
      reason === "confirm" ? "zm-confirm" : reason === "cancel" ? "zm-cancel" : "zm-close";
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: { reason },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      <zm-modal
        .open=${this.open}
        modal-title=${this.dialogTitle}
        description=${this.description}
        @zm-close=${() => this._close("close")}
      >
        <slot></slot>
        <span slot="actions">
          ${this.kind === "confirm"
            ? html`<zm-button variant="secondary" @click=${() => this._close("cancel")}
                >Cancel</zm-button
              >`
            : null}
          <zm-button @click=${() => this._close("confirm")}>OK</zm-button>
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
