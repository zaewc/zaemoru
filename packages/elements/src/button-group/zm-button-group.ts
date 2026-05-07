import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmButtonGroupOrientation = "horizontal" | "vertical";

@customElement("zm-button-group")
export class ZmButtonGroup extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        font-family: var(--zm-font-family-base);
      }
      .group {
        display: inline-flex;
        align-items: stretch;
        gap: var(--zm-spacing-2);
      }
      :host([orientation="vertical"]) .group {
        flex-direction: column;
      }
      :host([attached]) .group {
        gap: 0;
      }
      :host([attached]) ::slotted(*) {
        border-radius: 0;
      }
      :host([attached]) ::slotted(:first-child) {
        border-top-left-radius: var(--zm-radius-md);
        border-bottom-left-radius: var(--zm-radius-md);
      }
      :host([attached]) ::slotted(:last-child) {
        border-top-right-radius: var(--zm-radius-md);
        border-bottom-right-radius: var(--zm-radius-md);
      }
      :host([attached][orientation="vertical"]) ::slotted(:first-child) {
        border-radius: var(--zm-radius-md) var(--zm-radius-md) 0 0;
      }
      :host([attached][orientation="vertical"]) ::slotted(:last-child) {
        border-radius: 0 0 var(--zm-radius-md) var(--zm-radius-md);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  orientation: ZmButtonGroupOrientation = "horizontal";

  @property({ type: Boolean, reflect: true })
  attached = false;

  @property({ type: String })
  label = "Button group";

  override render() {
    return html`<div class="group" role="group" aria-label=${this.label}><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-button-group": ZmButtonGroup;
  }
}
