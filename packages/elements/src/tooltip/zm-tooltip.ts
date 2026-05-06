import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmTooltipPlacement = "top" | "bottom";

@customElement("zm-tooltip")
export class ZmTooltip extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-flex;
        position: relative;
      }
      .tip {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: var(--zm-z-tooltip);
        max-width: 240px;
        width: max-content;
        padding: var(--zm-spacing-2) var(--zm-spacing-3);
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-text-strong);
        color: var(--zm-color-on-primary);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-sm);
        line-height: var(--zm-line-height-snug);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--zm-duration-fast) var(--zm-easing-standard);
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip,
      :host([open]) .tip {
        opacity: 1;
      }
      :host([placement="top"]) .tip {
        bottom: calc(100% + var(--zm-spacing-2));
      }
      :host([placement="bottom"]) .tip {
        top: calc(100% + var(--zm-spacing-2));
      }
    `,
  ];

  @property({ type: String }) text = "";
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) placement: ZmTooltipPlacement = "top";

  override render() {
    return html`<slot></slot
      ><span class="tip" role="tooltip">${this.text}<slot name="content"></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-tooltip": ZmTooltip;
  }
}
