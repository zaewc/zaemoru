import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-popover")
export class ZmPopover extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        font-family: var(--zm-font-family-base);
      }
      button {
        all: unset;
        cursor: pointer;
        display: inline-flex;
      }
      button:focus-visible {
        outline: none;
        box-shadow: var(--zm-focus-ring);
        border-radius: var(--zm-radius-sm);
      }
      .content {
        position: absolute;
        z-index: var(--zm-z-popover);
        inset: calc(100% + var(--zm-spacing-2)) auto auto 0;
        box-sizing: border-box;
        min-width: 240px;
        padding: var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }
      :host([placement="top"]) .content {
        inset: auto auto calc(100% + var(--zm-spacing-2)) 0;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) placement: "top" | "bottom" = "bottom";

  override render() {
    return html`<button type="button" @click=${() => (this.open = !this.open)}>
        <slot name="trigger">Open</slot>
      </button>
      ${this.open ? html`<div class="content" role="dialog"><slot></slot></div>` : null}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-popover": ZmPopover;
  }
}
