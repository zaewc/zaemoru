import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-aspect-ratio")
export class ZmAspectRatio extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .frame {
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        aspect-ratio: var(--zm-aspect-ratio, 16 / 9);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-background-subtle);
      }
      ::slotted(*) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ];

  @property({ type: String })
  ratio = "16 / 9";

  override render() {
    return html`<div class="frame" style=${`--zm-aspect-ratio: ${this.ratio};`}>
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-aspect-ratio": ZmAspectRatio;
  }
}
