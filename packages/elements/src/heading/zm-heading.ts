import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmHeadingLevel = "1" | "2" | "3" | "4";
export type ZmHeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

@customElement("zm-heading")
export class ZmHeading extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-bold);
        letter-spacing: var(--zm-letter-spacing-tight);
        line-height: var(--zm-line-height-tight);
        font-size: var(--zm-font-size-2xl);
      }
      :host([size="sm"]) {
        font-size: var(--zm-font-size-lg);
      }
      :host([size="md"]) {
        font-size: var(--zm-font-size-xl);
      }
      :host([size="lg"]) {
        font-size: var(--zm-font-size-2xl);
      }
      :host([size="xl"]) {
        font-size: var(--zm-font-size-3xl);
      }
      :host([size="2xl"]),
      :host([size="3xl"]),
      :host([size="4xl"]) {
        line-height: var(--zm-line-height-tight);
      }
      :host([size="2xl"]) {
        font-size: var(--zm-font-size-3xl);
      }
      :host([size="3xl"]) {
        font-size: var(--zm-font-size-4xl);
      }
      :host([size="4xl"]) {
        font-size: 44px;
      }
      h1,
      h2,
      h3,
      h4 {
        margin: 0;
        font: inherit;
        color: inherit;
        letter-spacing: inherit;
        line-height: inherit;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  level: ZmHeadingLevel = "2";

  @property({ type: String, reflect: true })
  size: ZmHeadingSize = "lg";

  override render() {
    switch (this.level) {
      case "1":
        return html`<h1><slot></slot></h1>`;
      case "3":
        return html`<h3><slot></slot></h3>`;
      case "4":
        return html`<h4><slot></slot></h4>`;
      case "2":
      default:
        return html`<h2><slot></slot></h2>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-heading": ZmHeading;
  }
}
