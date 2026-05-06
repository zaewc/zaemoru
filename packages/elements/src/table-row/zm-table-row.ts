import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTableRowAlign = "start" | "center" | "end";

@customElement("zm-table-row")
export class ZmTableRow extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-4);
        padding: var(--zm-spacing-3) 0;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text);
      }
      :host([emphasis]) {
        font-weight: var(--zm-font-weight-bold);
      }
      .label {
        color: var(--zm-color-text-subtle);
        flex-shrink: 0;
      }
      :host([emphasis]) .label {
        color: var(--zm-color-text-strong);
      }
      .value {
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-semibold);
      }
      :host([align="start"]) .value {
        text-align: left;
      }
      :host([align="center"]) .value {
        text-align: center;
      }
    `,
  ];

  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean, reflect: true }) emphasis = false;
  @property({ type: String, reflect: true }) align: ZmTableRowAlign = "end";

  override render() {
    return html`
      <span class="label">${this.label}<slot name="label"></slot></span>
      ${this.value ? html`<span class="value">${this.value}</span>` : nothing}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-table-row": ZmTableRow;
  }
}
