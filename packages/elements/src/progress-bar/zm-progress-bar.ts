import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmProgressTone = "primary" | "success" | "warning" | "danger";
export type ZmProgressSize = "small" | "medium";

@customElement("zm-progress-bar")
export class ZmProgressBar extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        width: 100%;
      }
      .track {
        height: 8px;
        background: var(--zm-color-background-muted);
        border-radius: var(--zm-radius-pill);
        overflow: hidden;
      }
      :host([size="small"]) .track {
        height: 4px;
      }
      .fill {
        height: 100%;
        width: 0;
        background: var(--zm-color-primary);
        border-radius: inherit;
        transition: width var(--zm-duration-base) var(--zm-easing-standard);
      }
      :host([tone="success"]) .fill {
        background: var(--zm-color-success);
      }
      :host([tone="warning"]) .fill {
        background: var(--zm-color-warning);
      }
      :host([tone="danger"]) .fill {
        background: var(--zm-color-danger);
      }
      :host([indeterminate]) .fill {
        width: 35% !important;
        animation: zm-progress 1.4s var(--zm-easing-standard) infinite;
      }
      @keyframes zm-progress {
        0% {
          margin-left: -35%;
        }
        100% {
          margin-left: 100%;
        }
      }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  @property({ type: String, reflect: true }) tone: ZmProgressTone = "primary";
  @property({ type: String, reflect: true }) size: ZmProgressSize = "medium";

  override render() {
    const pct = Math.max(0, Math.min(100, (this.value / Math.max(1, this.max)) * 100));
    return html`
      <div
        class="track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax=${String(this.max)}
        aria-valuenow=${this.indeterminate ? "" : String(this.value)}
      >
        <div class="fill" style=${`width:${pct}%`}></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-progress-bar": ZmProgressBar;
  }
}
