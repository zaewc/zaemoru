import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-item")
export class ZmItem extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: var(--zm-spacing-3);
        width: 100%;
        min-height: 56px;
        padding: var(--zm-spacing-3) var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        color: var(--zm-color-text);
        text-align: start;
      }
      button.item {
        cursor: pointer;
        font: inherit;
      }
      button.item:hover,
      button.item:focus-visible {
        outline: none;
        background: var(--zm-color-background-subtle);
      }
      :host([selected]) .item {
        border-color: var(--zm-color-primary);
        background: var(--zm-color-primary-subtle);
      }
      .content {
        display: grid;
        flex: 1;
        min-width: 0;
        gap: var(--zm-spacing-1);
      }
      .title {
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-semibold);
      }
      .description {
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
      }
      .item[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  ];

  @property({ type: String }) override title = "";
  @property({ type: String }) description = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) interactive = false;

  private activate() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent("zm-action", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    const content = html`<slot name="leading"></slot>
      <span class="content">
        <span class="title">${this.title}<slot></slot></span>
        ${this.description ? html`<span class="description">${this.description}</span>` : null}
      </span>
      <slot name="trailing"></slot>`;
    return this.interactive
      ? html`<button class="item" type="button" ?disabled=${this.disabled} @click=${this.activate}>
          ${content}
        </button>`
      : html`<div class="item" aria-disabled=${this.disabled ? "true" : "false"}>${content}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-item": ZmItem;
  }
}
