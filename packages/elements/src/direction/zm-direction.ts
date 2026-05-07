import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmDirectionValue = "ltr" | "rtl";

@customElement("zm-direction")
export class ZmDirection extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
    `,
  ];

  @property({ type: String })
  direction: ZmDirectionValue = "ltr";

  override render() {
    return html`<div dir=${this.direction}><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-direction": ZmDirection;
  }
}
