import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-empty")
export class ZmEmpty extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .empty {
        display: grid;
        justify-items: center;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-8) var(--zm-spacing-4);
        text-align: center;
      }
      .icon {
        display: grid;
        place-items: center;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-muted);
        font-weight: var(--zm-font-weight-bold);
      }
      h3 {
        margin: 0;
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-xl);
      }
      p {
        margin: 0;
        max-width: 360px;
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-normal);
      }
      .actions {
        margin-top: var(--zm-spacing-2);
      }
    `,
  ];

  @property({ type: String }) override title = "No results";
  @property({ type: String }) description = "";

  override render() {
    return html`<div class="empty">
      <div class="icon"><slot name="icon">∅</slot></div>
      <h3>${this.title}</h3>
      ${this.description ? html`<p>${this.description}</p>` : null}
      <div class="actions"><slot name="actions"></slot></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-empty": ZmEmpty;
  }
}
