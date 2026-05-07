import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-hover-card")
export class ZmHoverCard extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        font-family: var(--zm-font-family-base);
      }
      .card {
        position: absolute;
        z-index: var(--zm-z-popover);
        inset: calc(100% + var(--zm-spacing-2)) auto auto 0;
        box-sizing: border-box;
        min-width: 240px;
        max-width: 320px;
        padding: var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }
      :host([placement="top"]) .card {
        inset: auto auto calc(100% + var(--zm-spacing-2)) 0;
      }
    `,
  ];

  @property({ type: String, reflect: true }) placement: "top" | "bottom" = "bottom";
  @property({ type: Boolean, reflect: true }) open = false;

  override render() {
    return html`<span
        @mouseenter=${() => (this.open = true)}
        @mouseleave=${() => (this.open = false)}
        @focusin=${() => (this.open = true)}
        @focusout=${() => (this.open = false)}
      >
        <slot name="trigger"></slot>
      </span>
      ${this.open ? html`<div class="card" role="dialog"><slot></slot></div>` : null}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-hover-card": ZmHoverCard;
  }
}
