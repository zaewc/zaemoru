import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ZmTextWeight = "regular" | "medium" | "semibold" | "bold";
export type ZmTextTone = "default" | "subtle" | "muted" | "primary" | "danger";

@customElement("zm-text")
export class ZmText extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-normal);
        color: var(--zm-color-text);
      }
      :host([size="xs"]) {
        font-size: var(--zm-font-size-xs);
      }
      :host([size="sm"]) {
        font-size: var(--zm-font-size-sm);
      }
      :host([size="md"]) {
        font-size: var(--zm-font-size-md);
      }
      :host([size="lg"]) {
        font-size: var(--zm-font-size-lg);
      }
      :host([size="xl"]) {
        font-size: var(--zm-font-size-xl);
      }

      :host([weight="regular"]) {
        font-weight: var(--zm-font-weight-regular);
      }
      :host([weight="medium"]) {
        font-weight: var(--zm-font-weight-medium);
      }
      :host([weight="semibold"]) {
        font-weight: var(--zm-font-weight-semibold);
      }
      :host([weight="bold"]) {
        font-weight: var(--zm-font-weight-bold);
      }

      :host([tone="subtle"]) {
        color: var(--zm-color-text-subtle);
      }
      :host([tone="muted"]) {
        color: var(--zm-color-text-muted);
      }
      :host([tone="primary"]) {
        color: var(--zm-color-primary);
      }
      :host([tone="danger"]) {
        color: var(--zm-color-text-danger);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  size: ZmTextSize = "md";

  @property({ type: String, reflect: true })
  weight: ZmTextWeight = "regular";

  @property({ type: String, reflect: true })
  tone: ZmTextTone = "default";

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text": ZmText;
  }
}
