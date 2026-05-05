import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmBorderOrientation = "horizontal" | "vertical";
export type ZmBorderTone = "subtle" | "default" | "strong";

@customElement("zm-border")
export class ZmBorder extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        background: var(--zm-color-border);
        flex-shrink: 0;
      }
      :host(:not([orientation])),
      :host([orientation="horizontal"]) {
        width: 100%;
        height: 1px;
      }
      :host([orientation="vertical"]) {
        width: 1px;
        height: 100%;
        align-self: stretch;
      }
      :host([tone="subtle"]) {
        background: var(--zm-color-border-subtle);
      }
      :host([tone="strong"]) {
        background: var(--zm-color-border-strong);
      }
      :host([thick]) {
        background-color: var(--zm-color-background-subtle);
      }
      :host([thick]:not([orientation="vertical"])) {
        height: 8px;
      }
      :host([thick][orientation="vertical"]) {
        width: 8px;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  orientation: ZmBorderOrientation = "horizontal";

  @property({ type: String, reflect: true })
  tone: ZmBorderTone = "default";

  @property({ type: Boolean, reflect: true })
  thick = false;

  override connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute("role")) this.setAttribute("role", "separator");
    if (!this.hasAttribute("aria-orientation")) {
      this.setAttribute("aria-orientation", this.orientation);
    }
  }

  override render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-border": ZmBorder;
  }
}
