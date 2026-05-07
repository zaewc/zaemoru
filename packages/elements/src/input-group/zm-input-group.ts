import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-input-group")
export class ZmInputGroup extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
      }
      .group {
        display: grid;
        gap: var(--zm-spacing-2);
      }
      label {
        color: var(--zm-color-text-strong);
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-semibold);
      }
      .control {
        display: flex;
        align-items: center;
        min-height: var(--zm-control-height-md);
        overflow: hidden;
        border: 1px solid var(--zm-color-border);
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-surface);
      }
      .affix {
        display: inline-flex;
        align-items: center;
        min-height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-3);
        color: var(--zm-color-text-subtle);
        background: var(--zm-color-background-subtle);
      }
      .input {
        flex: 1;
        min-width: 0;
        padding: 0 var(--zm-spacing-3);
      }
      ::slotted(input) {
        width: 100%;
        min-height: var(--zm-control-height-md);
        border: 0;
        outline: 0;
        font: inherit;
      }
      p {
        margin: 0;
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
      }
    `,
  ];

  @property({ type: String }) label = "";
  @property({ type: String }) description = "";

  override render() {
    return html`<div class="group">
      ${this.label ? html`<label>${this.label}</label>` : null}
      <div class="control">
        <span class="affix"><slot name="prefix"></slot></span>
        <span class="input"><slot></slot></span>
        <span class="affix"><slot name="suffix"></slot></span>
      </div>
      ${this.description ? html`<p>${this.description}</p>` : null}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-input-group": ZmInputGroup;
  }
}
