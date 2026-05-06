import { css } from "lit";

export const krdsComponentStyles = css`
  :host {
    display: block;
    color: var(--zm-color-text);
  }

  .surface {
    display: grid;
    gap: var(--zm-spacing-4);
    padding: var(--zm-spacing-5);
    border: 1px solid var(--zm-color-border-subtle);
    border-radius: var(--zm-radius-lg);
    background: var(--zm-color-surface);
    box-shadow: var(--zm-shadow-xs);
  }

  .row {
    display: flex;
    align-items: center;
    gap: var(--zm-spacing-3);
  }

  .row.wrap {
    flex-wrap: wrap;
  }

  .between {
    justify-content: space-between;
  }

  .stack {
    display: grid;
    gap: var(--zm-spacing-3);
  }

  .title {
    margin: 0;
    color: var(--zm-color-text-strong);
    font-size: var(--zm-font-size-lg);
    font-weight: var(--zm-font-weight-bold);
    line-height: var(--zm-line-height-snug);
  }

  .description {
    margin: 0;
    color: var(--zm-color-text-subtle);
    font-size: var(--zm-font-size-md);
    line-height: var(--zm-line-height-normal);
  }

  a,
  button,
  select,
  input {
    font: inherit;
    font-family: var(--zm-font-family-base);
  }

  a {
    color: var(--zm-color-primary);
    text-decoration: none;
    font-weight: var(--zm-font-weight-semibold);
  }

  a:hover {
    text-decoration: underline;
  }

  button,
  select,
  input[type="date"],
  input[type="text"],
  input[type="file"]::file-selector-button {
    min-height: var(--zm-control-height-md);
    border-radius: var(--zm-radius-md);
    border: 1px solid var(--zm-color-border);
    background: var(--zm-color-surface);
    color: var(--zm-color-text);
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--zm-spacing-2);
    padding: 0 var(--zm-spacing-4);
    cursor: pointer;
    font-weight: var(--zm-font-weight-semibold);
  }

  button.primary {
    border-color: transparent;
    background: var(--zm-color-primary);
    color: var(--zm-color-on-primary);
  }

  button.subtle {
    background: var(--zm-color-background-subtle);
    border-color: transparent;
  }

  button:focus,
  a:focus,
  select:focus,
  input:focus {
    outline: none;
  }

  button:focus-visible,
  a:focus-visible,
  select:focus-visible,
  input:focus-visible {
    box-shadow: var(--zm-focus-ring);
  }

  button:disabled,
  select:disabled,
  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .muted {
    color: var(--zm-color-text-muted);
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: var(--zm-spacing-2);
    min-height: 32px;
    padding: 0 var(--zm-spacing-3);
    border-radius: var(--zm-radius-pill);
    background: var(--zm-color-background-subtle);
    color: var(--zm-color-text-subtle);
    font-weight: var(--zm-font-weight-semibold);
  }

  .list {
    display: grid;
    gap: var(--zm-spacing-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export type KrdsItem = {
  label: string;
  value?: string;
  href?: string;
  description?: string;
  current?: boolean;
  disabled?: boolean;
};

export function dispatchKrdsEvent(host: HTMLElement, name: string, detail: Record<string, unknown>) {
  host.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
