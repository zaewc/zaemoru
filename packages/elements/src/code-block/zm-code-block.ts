import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-code-block")
export class ZmCodeBlock extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
      }
      .frame {
        position: relative;
        border: 1px solid var(--zm-color-border);
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        overflow: hidden;
      }
      .meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-2);
        padding: var(--zm-spacing-2) var(--zm-spacing-3);
        border-bottom: 1px solid var(--zm-color-border);
        color: var(--zm-color-text-muted);
        font-family: var(--zm-font-family-mono);
        font-size: var(--zm-font-size-xs);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      pre {
        margin: 0;
        padding: var(--zm-spacing-4) var(--zm-spacing-5);
        overflow: auto;
        color: var(--zm-color-text-strong);
        font-family: var(--zm-font-family-mono);
        font-size: var(--zm-font-size-sm);
        line-height: 1.65;
      }
      :host([max-height]) pre {
        max-height: var(--zm-code-block-max-height, 460px);
      }
      .copy {
        position: absolute;
        top: var(--zm-spacing-2);
        right: var(--zm-spacing-2);
        display: inline-flex;
        align-items: center;
        height: 28px;
        padding: 0 var(--zm-spacing-3);
        border: 1px solid var(--zm-color-border-strong);
        border-radius: var(--zm-radius-sm);
        background: var(--zm-color-surface);
        color: var(--zm-color-text-subtle);
        font-family: var(--zm-font-family-base);
        font-size: var(--zm-font-size-xs);
        font-weight: var(--zm-font-weight-semibold, 600);
        cursor: pointer;
        transition: background-color var(--zm-duration-fast) var(--zm-easing-standard, ease);
      }
      .copy:hover {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-strong);
      }
      .copy:focus-visible {
        outline: var(--zm-focus-ring, 2px solid var(--zm-color-border-focus));
        outline-offset: 2px;
      }
      :host([no-copy]) .copy {
        display: none;
      }
    `,
  ];

  @property({ type: String }) code = "";
  @property({ type: String }) language = "";
  @property({ type: String, attribute: "copy-label" }) copyLabel = "Copy";
  @property({ type: String, attribute: "copied-label" }) copiedLabel = "Copied";
  @property({ type: String, attribute: "max-height", reflect: true }) maxHeight = "";
  @property({ type: Boolean, attribute: "no-copy", reflect: true }) noCopy = false;

  @state() private copied = false;

  private async handleCopy() {
    const text = this.code || this.textContent?.trim() || "";
    try {
      await navigator.clipboard.writeText(text);
      this.copied = true;
      this.dispatchEvent(
        new CustomEvent("zm-copy", { detail: { text }, bubbles: true, composed: true }),
      );
      window.setTimeout(() => {
        this.copied = false;
      }, 1500);
    } catch {
      // navigator.clipboard may be unavailable in insecure contexts; ignore.
    }
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has("maxHeight")) {
      if (this.maxHeight) {
        this.style.setProperty("--zm-code-block-max-height", this.maxHeight);
      } else {
        this.style.removeProperty("--zm-code-block-max-height");
      }
    }
  }

  override render() {
    const text = this.code || this.textContent?.trim() || "";
    const showMeta = this.language.length > 0;
    return html`
      <div class="frame">
        ${showMeta ? html`<div class="meta"><span>${this.language}</span></div>` : null}
        <pre><code>${text}</code></pre>
        <button
          class="copy"
          type="button"
          part="copy"
          aria-label=${this.copied ? this.copiedLabel : this.copyLabel}
          @click=${this.handleCopy}
        >
          ${this.copied ? this.copiedLabel : this.copyLabel}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-code-block": ZmCodeBlock;
  }
}
