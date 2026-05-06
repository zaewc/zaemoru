import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

export type ZmResultTone = "neutral" | "success" | "warning" | "danger";

@customElement("zm-result")
export class ZmResult extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-7) var(--zm-spacing-5);
        font-family: var(--zm-font-family-base);
        color: var(--zm-color-text);
      }
      .icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-subtle);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
      }
      :host([tone="success"]) .icon {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-success);
      }
      :host([tone="warning"]) .icon {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-warning);
      }
      :host([tone="danger"]) .icon {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-danger);
      }
      .title {
        font-size: var(--zm-font-size-xl);
        font-weight: var(--zm-font-weight-bold);
        color: var(--zm-color-text-strong);
        line-height: var(--zm-line-height-tight);
      }
      .description {
        font-size: var(--zm-font-size-md);
        color: var(--zm-color-text-subtle);
        line-height: var(--zm-line-height-normal);
        max-width: 360px;
      }
      .actions {
        display: flex;
        flex-direction: column;
        gap: var(--zm-spacing-2);
        margin-top: var(--zm-spacing-3);
        width: 100%;
        max-width: 320px;
      }
    `,
  ];

  @property({ type: String, reflect: true }) tone: ZmResultTone = "neutral";
  @property({ type: String, attribute: "result-title" }) resultTitle = "";
  @property({ type: String }) description = "";

  override render() {
    return html`
      <div class="icon" aria-hidden="true">
        <slot name="icon">
          ${this.tone === "success"
            ? html`<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M9 19l5 5L27 11"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>`
            : this.tone === "danger"
              ? html`<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M11 11l14 14M25 11L11 25"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>`
              : html`<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="14" stroke="currentColor" stroke-width="2.4" />
                  <path
                    d="M18 11v9M18 24h.01"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  />
                </svg>`}
        </slot>
      </div>
      ${this.resultTitle ? html`<div class="title">${this.resultTitle}</div>` : nothing}
      ${this.description ? html`<div class="description">${this.description}</div>` : nothing}
      <slot></slot>
      <div class="actions"><slot name="actions"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-result": ZmResult;
  }
}
