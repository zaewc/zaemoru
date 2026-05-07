import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-label")
export class ZmLabel extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-grid;
        gap: var(--zm-spacing-1);
        font-family: var(--zm-font-family-base);
      }
      label {
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
      }
      .required {
        color: var(--zm-color-danger);
      }
      p {
        margin: 0;
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
      }
    `,
  ];

  @property({ type: String, attribute: "for" }) htmlFor = "";
  @property({ type: String }) description = "";
  @property({ type: Boolean, reflect: true }) required = false;

  override render() {
    return html`<label for=${this.htmlFor}
        ><slot></slot>${this.required ? html` <span class="required">*</span>` : null}</label
      >${this.description ? html`<p>${this.description}</p>` : null}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-label": ZmLabel;
  }
}
