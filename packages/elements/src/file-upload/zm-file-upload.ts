import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-file-upload")
export class ZmFileUpload extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "File Upload";

  @property({ type: String })
  description = "";

  @property({ type: String })
  href = "#";

  @property({ type: String })
  value = "";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ attribute: false })
  items: KrdsItem[] = [];

  private onFile(event: Event) {
    const files = Array.from((event.currentTarget as HTMLInputElement).files ?? []);
    dispatchKrdsEvent(this, "zm-change", { files });
  }

  override render() {
    return html`<label class="surface"
      ><span class="title">${this.label}</span
      ><input type="file" ?disabled=${this.disabled} @change=${this.onFile} />
      <p class="description">${this.description}</p>
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-file-upload": ZmFileUpload;
  }
}
