import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export interface ZmBarChartDatum {
  label: string;
  value: number;
}

@customElement("zm-bar-chart")
export class ZmBarChart extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .chart {
        display: flex;
        align-items: end;
        gap: var(--zm-spacing-3);
        min-height: 160px;
      }
      .item {
        flex: 1;
        display: grid;
        gap: var(--zm-spacing-2);
        align-items: end;
      }
      .bar {
        min-height: 4px;
        border-radius: var(--zm-radius-md) var(--zm-radius-md) 0 0;
        background: var(--zm-color-primary);
      }
      .label {
        color: var(--zm-color-text-muted);
        font-size: var(--zm-font-size-xs);
        text-align: center;
      }
    `,
  ];

  @property({ attribute: false }) data: ZmBarChartDatum[] = [];

  override render() {
    const max = Math.max(1, ...this.data.map((d) => d.value));
    return html`<div class="chart">
      ${this.data.map(
        (d) =>
          html`<div class="item">
            <div class="bar" style=${`height:${Math.max(4, (d.value / max) * 140)}px`}></div>
            <div class="label">${d.label}</div>
          </div>`,
      )}
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-bar-chart": ZmBarChart;
  }
}
