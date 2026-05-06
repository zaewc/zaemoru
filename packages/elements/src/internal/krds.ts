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

  .skip {
    position: fixed;
    inset: var(--zm-spacing-3) auto auto var(--zm-spacing-3);
    z-index: var(--zm-z-tooltip);
    transform: translateY(-160%);
    padding: var(--zm-spacing-3) var(--zm-spacing-4);
    border-radius: var(--zm-radius-md);
    background: var(--zm-color-primary);
    color: var(--zm-color-on-primary);
  }

  .skip:focus {
    transform: translateY(0);
  }

  img {
    width: 100%;
    max-height: 240px;
    object-fit: cover;
    border-radius: var(--zm-radius-md);
    background: var(--zm-color-background-subtle);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: var(--zm-spacing-3);
    border-bottom: 1px solid var(--zm-color-border-subtle);
    text-align: start;
  }

  .favicon {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--zm-radius-md);
    background: var(--zm-color-primary);
    color: var(--zm-color-on-primary);
    font-weight: var(--zm-font-weight-bold);
  }

  .fab {
    border-radius: var(--zm-radius-pill);
    box-shadow: var(--zm-shadow-lg);
  }

  .remove {
    min-height: 24px;
    width: 24px;
    padding: 0;
    border-radius: var(--zm-radius-pill);
  }

  .switch {
    width: 52px;
    justify-content: flex-start;
    border-radius: var(--zm-radius-pill);
    padding: 3px;
    background: var(--zm-color-background-muted);
  }

  .switch[aria-checked="true"] {
    justify-content: flex-end;
    background: var(--zm-color-primary);
  }

  .switch span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--zm-color-surface);
    box-shadow: var(--zm-shadow-xs);
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    gap: var(--zm-spacing-4);
    list-style: none;
  }

  .steps li {
    display: inline-flex;
    align-items: center;
    gap: var(--zm-spacing-2);
    color: var(--zm-color-text-muted);
  }

  .steps span {
    display: inline-grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--zm-color-background-muted);
  }

  .steps .active {
    color: var(--zm-color-primary);
  }

  .steps .active span {
    background: var(--zm-color-primary);
    color: var(--zm-color-on-primary);
  }

  .context {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .bubble {
    position: absolute;
    inset: auto auto calc(100% + var(--zm-spacing-2)) 0;
    min-width: 220px;
    padding: var(--zm-spacing-3);
    border-radius: var(--zm-radius-md);
    background: var(--zm-color-text);
    color: var(--zm-color-on-primary);
    box-shadow: var(--zm-shadow-lg);
    z-index: var(--zm-z-tooltip);
  }

  .media {
    min-height: 120px;
    display: grid;
    place-items: center;
    border-radius: var(--zm-radius-md);
    background: var(--zm-color-background-subtle);
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  input[type="range"] {
    width: 100%;
    accent-color: var(--zm-color-primary);
  }

  .snackbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--zm-spacing-4);
    padding: var(--zm-spacing-4);
    border-radius: var(--zm-radius-lg);
    background: var(--zm-color-text);
    color: var(--zm-color-on-primary);
    box-shadow: var(--zm-shadow-lg);
  }

  .snackbar button {
    color: var(--zm-color-on-primary);
    border-color: rgba(255, 255, 255, 0.24);
    background: transparent;
  }

  .splash {
    min-height: 240px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: var(--zm-spacing-3);
    border-radius: var(--zm-radius-xl);
    background: var(--zm-color-primary);
    color: var(--zm-color-on-primary);
    text-align: center;
  }

  .splash strong {
    font-size: var(--zm-font-size-3xl);
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

export function dispatchKrdsEvent(
  host: HTMLElement,
  name: string,
  detail: Record<string, unknown>,
) {
  host.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
