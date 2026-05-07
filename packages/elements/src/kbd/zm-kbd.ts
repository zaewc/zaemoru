import { html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-kbd")
export class ZmKbd extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        padding: 0 var(--zm-spacing-2);
        border: 1px solid var(--zm-color-border-strong);
        border-radius: var(--zm-radius-sm);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-strong);
        box-shadow: inset 0 -1px 0 var(--zm-color-border-strong);
        font-family: var(--zm-font-family-mono);
        font-size: var(--zm-font-size-xs);
        font-weight: var(--zm-font-weight-semibold);
      }
    `,
  ];

  override render() {
    return html`<kbd><slot></slot></kbd>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-kbd": ZmKbd;
  }
}
