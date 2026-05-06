import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-progress-stepper")
export class ZmProgressStepper extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        gap: var(--zm-spacing-1);
        width: 100%;
      }
      .seg {
        flex: 1;
        height: 4px;
        background: var(--zm-color-background-muted);
        border-radius: var(--zm-radius-pill);
        transition: background-color var(--zm-duration-base) var(--zm-easing-standard);
      }
      .seg.on {
        background: var(--zm-color-primary);
      }
    `,
  ];

  @property({ type: Number }) value = 1;
  @property({ type: Number }) total = 3;

  override render() {
    const total = Math.max(1, this.total);
    const segs = Array.from({ length: total }, (_, i) => i + 1);
    return html`${segs.map(
        (i) =>
          html`<div class=${`seg ${i <= this.value ? "on" : ""}`.trim()} aria-hidden="true"></div>`,
      )}
      <span class="sr" aria-live="polite" style="position:absolute;left:-9999px"
        >Step ${this.value} of ${total}</span
      >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-progress-stepper": ZmProgressStepper;
  }
}
