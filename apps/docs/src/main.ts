import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
import "./styles.css";
import * as si from "simple-icons";

type MenuItem = {
  value: string;
  label: string;
  danger?: boolean;
};

const componentGroups = [
  {
    id: "foundation",
    title: "Foundation",
    intro:
      "Small primitives that make screens feel consistent before any framework adapter gets involved.",
    demos: [
      {
        title: "Typography",
        body: `
          <div class="typography-stack">
            <zm-heading size="3xl">Calm, readable interfaces</zm-heading>
            <zm-paragraph size="lg" tone="subtle">Zaemoru starts with generous spacing, strong focus states, and mobile-first touch targets.</zm-paragraph>
            <div class="chip-row">
              <zm-badge>Neutral</zm-badge>
              <zm-badge variant="primary">Primary</zm-badge>
              <zm-badge variant="success">Success</zm-badge>
              <zm-badge variant="warning">Warning</zm-badge>
              <zm-badge variant="danger">Danger</zm-badge>
            </div>
          </div>
        `,
      },
      {
        title: "Assets",
        body: `
          <div class="asset-stack">
            <div class="asset-row">
              <zm-asset shape="circle" alt="A">A</zm-asset>
              <zm-asset shape="rounded" alt="Z">Z</zm-asset>
              <zm-asset shape="square" alt="M">M</zm-asset>
            </div>
            <zm-bottom-info tone="primary">Assets are intentionally generic. Bring your own product imagery.</zm-bottom-info>
          </div>
        `,
      },
    ],
  },
  {
    id: "actions",
    title: "Actions",
    intro: "Buttons and bottom CTAs behave like controls, not decorative text.",
    demos: [
      {
        title: "Buttons",
        body: `
          <div class="button-stack">
            <zm-button size="large">Continue</zm-button>
            <zm-button variant="secondary">Review details</zm-button>
            <zm-button variant="tertiary">Maybe later</zm-button>
            <zm-button variant="danger">Delete account</zm-button>
            <zm-button loading>Processing</zm-button>
          </div>
        `,
      },
      {
        title: "Compact controls",
        body: `
          <div class="toolbar">
            <zm-text-button>Resend</zm-text-button>
            <zm-icon-button aria-label="Add">+</zm-icon-button>
            <zm-icon-button variant="solid" aria-label="Confirm">✓</zm-icon-button>
          </div>
        `,
      },
      {
        title: "Bottom CTA",
        body: `
          <div class="phone-frame compact">
            <zm-paragraph tone="subtle">A fixed CTA can be used in app screens; in docs it renders as an inline footer.</zm-paragraph>
            <zm-bottom-cta layout="double">
              <zm-button variant="secondary">Back</zm-button>
              <zm-button>Next</zm-button>
            </zm-bottom-cta>
          </div>
        `,
      },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    intro:
      "Form components expose attributes for HTML and composed custom events for every adapter.",
    demos: [
      {
        title: "Text entry",
        body: `
          <div class="form-stack">
            <zm-text-field label="Name" placeholder="Jane Zaemoru"></zm-text-field>
            <zm-search-field placeholder="Search transactions"></zm-search-field>
            <zm-text-area label="Memo" placeholder="Add a private note"></zm-text-area>
            <zm-split-text-field parts="3" placeholder="Code"></zm-split-text-field>
          </div>
        `,
      },
      {
        title: "Choices",
        body: `
          <div class="form-stack">
            <zm-checkbox label="Email me receipts"></zm-checkbox>
            <zm-switch label="Use biometric login"></zm-switch>
            <zm-agreement label="Agree to all">
              <zm-checkbox label="Terms of service"></zm-checkbox>
              <zm-checkbox label="Privacy policy"></zm-checkbox>
            </zm-agreement>
          </div>
        `,
      },
      {
        title: "Numeric",
        body: `
          <div class="form-stack numeric-stack">
            <div class="slider-field">
              <div class="field-line">
                <span>Monthly limit</span>
                <strong>42%</strong>
              </div>
              <zm-slider value="42"></zm-slider>
            </div>
            <zm-stepper value="2" min="0" max="8"></zm-stepper>
            <zm-numeric-spinner value="3" min="0" max="10"></zm-numeric-spinner>
            <zm-rating value="4"></zm-rating>
          </div>
        `,
      },
      {
        title: "Keypads",
        body: `
          <div class="keypad-grid">
            <zm-number-keypad show-submit></zm-number-keypad>
            <zm-secure-keypad show-submit></zm-secure-keypad>
          </div>
        `,
      },
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    intro:
      "Composable pieces for headers, tabs, segmented choices, menus, rows, and mobile surfaces.",
    demos: [
      {
        title: "App bar",
        body: `
          <zm-top title="Account" subtitle="Personal banking">
            <zm-icon-button slot="leading" aria-label="Back">‹</zm-icon-button>
            <zm-icon-button slot="trailing" aria-label="Settings">⚙</zm-icon-button>
          </zm-top>
        `,
      },
      {
        title: "Tabs",
        body: `<zm-tab id="demo-tabs" value="cards" full-width></zm-tab>`,
      },
      {
        title: "Segmented control",
        body: `<zm-segmented-control id="demo-segments" value="week" full-width></zm-segmented-control>`,
      },
      {
        title: "Menu",
        body: `<zm-menu id="demo-menu"></zm-menu>`,
      },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    intro:
      "Loading, progress, result, toast, tooltip, dialog, modal, and bottom sheet cover common app states.",
    demos: [
      {
        title: "Loading states",
        body: `
          <div class="form-stack">
            <zm-loader label="Loading portfolio"></zm-loader>
            <zm-progress-bar value="64"></zm-progress-bar>
            <zm-progress-stepper value="2" total="5"></zm-progress-stepper>
            <zm-skeleton height="36px"></zm-skeleton>
          </div>
        `,
      },
      {
        title: "Result",
        body: `
          <zm-result tone="success" result-title="Transfer complete" description="Your money arrived safely.">
            <zm-button slot="actions">Done</zm-button>
          </zm-result>
        `,
      },
      {
        title: "Message",
        body: `
          <div class="form-stack">
            <zm-toast tone="success">Saved successfully <span slot="action">Undo</span></zm-toast>
            <zm-tooltip text="This appears on hover or focus">
              <zm-button variant="secondary">Hover me</zm-button>
            </zm-tooltip>
          </div>
        `,
      },
      {
        title: "Overlays",
        body: `
          <div class="toolbar">
            <zm-button id="open-modal">Open modal</zm-button>
            <zm-button id="open-sheet" variant="secondary">Open sheet</zm-button>
            <zm-button id="open-dialog" variant="tertiary">Open dialog</zm-button>
          </div>
        `,
      },
    ],
  },
  {
    id: "content",
    title: "Content And Data",
    intro:
      "Rows, posts, bubbles, charts, table rows, and grids make realistic product screens quickly.",
    demos: [
      {
        title: "Mobile list",
        body: `
          <div class="phone-frame">
            <zm-list-header title="Recent" description="Latest activity"></zm-list-header>
            <zm-list-row title="Coffee" description="Today · Card" chevron></zm-list-row>
            <zm-list-row title="Salary" description="Yesterday · Deposit" chevron></zm-list-row>
            <zm-board-row eyebrow="Insight" title="Budget is healthy" description="You spent less than usual."></zm-board-row>
            <zm-list-footer description="Updated just now"></zm-list-footer>
          </div>
        `,
      },
      {
        title: "Posts and bubbles",
        body: `
          <div class="form-stack">
            <zm-post post-title="A calmer dashboard" meta="Design note" description="Dense enough for work, soft enough for daily use."></zm-post>
            <zm-bubble tone="primary" placement="end">Your request is ready.</zm-bubble>
          </div>
        `,
      },
      {
        title: "Chart",
        body: `<zm-bar-chart id="demo-chart"></zm-bar-chart>`,
      },
      {
        title: "Tables and grids",
        body: `
          <div class="form-stack">
            <zm-table-row label="Principal" value="$12,000"></zm-table-row>
            <zm-table-row label="Interest" value="$420" emphasis></zm-table-row>
            <zm-grid-list columns="3">
              <zm-asset alt="A">A</zm-asset>
              <zm-asset alt="B" shape="circle">B</zm-asset>
              <zm-asset alt="C" shape="square">C</zm-asset>
            </zm-grid-list>
          </div>
        `,
      },
    ],
  },
];

const adapters: Array<[string, string]> = [
  ["React", 'import { Button } from "@zaemoru/react";\n\n<Button>Continue</Button>'],
  ["Vue", 'import { ZaemoruVue } from "@zaemoru/vue";\n\napp.use(ZaemoruVue);'],
  ["Angular", 'import "@zaemoru/angular";\n\n// Add CUSTOM_ELEMENTS_SCHEMA.'],
  ["Svelte", 'import "@zaemoru/svelte";\n\n<zm-button>Continue</zm-button>'],
  ["Solid", 'import "@zaemoru/solid";\n\n<zm-button>Continue</zm-button>'],
  ["Qwik", 'import "@zaemoru/qwik";\n\n<zm-button>Continue</zm-button>'],
  ["Lit", 'import "@zaemoru/lit";\n\nhtml`<zm-button>Continue</zm-button>`'],
  ["Preact", 'import "@zaemoru/preact";\n\n<zm-button>Continue</zm-button>'],
  ["Astro", 'import "@zaemoru/astro";\n\n<zm-button>Continue</zm-button>'],
  [
    "Alpine.js",
    'import "@zaemoru/alpine";\n\n<zm-button x-on:click="open = true">Open</zm-button>',
  ],
  ["HTMX", 'import "@zaemoru/htmx";\n\n<zm-button hx-post="/confirm">Confirm</zm-button>'],
  ["Ember", 'import "@zaemoru/ember";\n\n<zm-button>Continue</zm-button>'],
];

const techStacks = [
  { name: "React", icon: si.siReact },
  { name: "Vue", icon: si.siVuedotjs },
  { name: "Angular", icon: si.siAngular },
  { name: "Svelte", icon: si.siSvelte },
  { name: "Solid", icon: si.siSolid },
  { name: "Qwik", icon: si.siQwik },
  { name: "Lit", icon: si.siLit },
  { name: "Preact", icon: si.siPreact },
  { name: "Astro", icon: si.siAstro },
  { name: "Alpine.js", icon: si.siAlpinedotjs },
  { name: "HTMX", icon: si.siHtmx },
  { name: "Ember", icon: si.siEmberdotjs },
];

const stackIcons = techStacks
  .map(
    ({ name, icon }) => `
      <span class="stack-chip">
        <span class="stack-icon" style="--stack-color: #${icon.hex}">
          ${icon.svg}
        </span>
        <span>${name}</span>
      </span>
    `,
  )
  .join("");

function code(text: string) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="layout">
    <aside class="sidebar">
      <a class="logo" href="#intro">
        zaemoru
      </a>
      <nav>
        ${componentGroups.map((group) => `<a href="#${group.id}">${group.title}</a>`).join("")}
        <a href="#adapters">Adapters</a>
      </nav>
    </aside>

    <main>
      <section class="hero" id="intro">
        <div class="eyebrow">Framework-agnostic UI</div>
        <h1>Design once, feel native everywhere.</h1>
        <p>
          Zaemoru places behavior, accessibility, and visual polish at the Web Component core. Thin adapters make that same interface feel natural across...
        </p>
        <div class="stack-marquee" aria-label="Supported technology stacks">
          <div class="stack-track">
            ${stackIcons}
            <span class="stack-copy" aria-hidden="true">${stackIcons}</span>
          </div>
        </div>
        <div class="hero-actions">
          <zm-button id="hero-modal" size="large">Try overlay</zm-button>
          <zm-button variant="secondary" size="large">Read usage</zm-button>
        </div>
      </section>

      <section class="install-band">
        <div>
          <h2>Install once. Use everywhere.</h2>
          <p>Tokens are CSS variables. Components are standards-based custom elements.</p>
        </div>
        <pre><code>import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";</code></pre>
      </section>

      ${componentGroups
        .map(
          (group) => `
            <section class="section" id="${group.id}">
              <header class="section-header">
                <h2>${group.title}</h2>
                <p>${group.intro}</p>
              </header>
              <div class="demo-grid">
                ${group.demos
                  .map(
                    (demo) => `
                      <article class="demo-card">
                        <header><h3>${demo.title}</h3></header>
                        <div class="demo-stage">${demo.body}</div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `,
        )
        .join("")}

      <section class="section" id="adapters">
        <header class="section-header">
          <h2>Adapters</h2>
          <p>Every adapter registers the same Web Components. React adds typed wrappers; the rest provide framework integration helpers and direct zm-* usage.</p>
        </header>
        <div class="adapter-grid">
          ${adapters
            .map(
              ([name, snippet]) => `
                <article class="adapter-card">
                  <h3>${name}</h3>
                  <pre><code>${code(snippet)}</code></pre>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </main>
  </div>

  <zm-modal id="demo-modal" modal-title="Polished overlay" description="Focus stays inside, Escape closes it, and page scroll is locked.">
    <zm-text-field label="Reason" placeholder="Optional"></zm-text-field>
    <span slot="actions">
      <zm-button variant="secondary" id="close-modal">Cancel</zm-button>
      <zm-button id="save-modal">Save</zm-button>
    </span>
  </zm-modal>

  <zm-dialog id="demo-dialog" kind="confirm" dialog-title="Confirm action" description="This dialog closes itself on confirm or cancel."></zm-dialog>

  <zm-bottom-sheet id="demo-sheet" sheet-title="Bottom sheet">
    <div class="form-stack">
      <zm-list-row title="Share" description="Send this page"></zm-list-row>
      <zm-list-row title="Duplicate" description="Create a copy"></zm-list-row>
      <zm-list-row title="Delete" description="Remove permanently"></zm-list-row>
    </div>
  </zm-bottom-sheet>
`;

const tabs = document.querySelector<HTMLElement & { items: unknown[]; value: string }>(
  "#demo-tabs",
);
if (tabs) {
  tabs.items = [
    { value: "all", label: "All", badge: "12" },
    { value: "cards", label: "Cards" },
    { value: "loans", label: "Loans" },
  ];
}

const segments = document.querySelector<HTMLElement & { options: unknown[]; value: string }>(
  "#demo-segments",
);
if (segments) {
  segments.options = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];
}

const menu = document.querySelector<HTMLElement & { items: MenuItem[] }>("#demo-menu");
if (menu) {
  menu.items = [
    { value: "edit", label: "Edit" },
    { value: "share", label: "Share" },
    { value: "delete", label: "Delete", danger: true },
  ];
}

const chart = document.querySelector<
  HTMLElement & { data: Array<{ label: string; value: number }> }
>("#demo-chart");
if (chart) {
  chart.data = [
    { label: "Mon", value: 24 },
    { label: "Tue", value: 42 },
    { label: "Wed", value: 32 },
    { label: "Thu", value: 64 },
    { label: "Fri", value: 52 },
  ];
}

const modal = document.querySelector<HTMLElement & { open: boolean }>("#demo-modal")!;
const sheet = document.querySelector<HTMLElement & { open: boolean }>("#demo-sheet")!;
const dialog = document.querySelector<HTMLElement & { open: boolean }>("#demo-dialog")!;

document.querySelector("#hero-modal")?.addEventListener("click", () => (modal.open = true));
document.querySelector("#open-modal")?.addEventListener("click", () => (modal.open = true));
document.querySelector("#open-sheet")?.addEventListener("click", () => (sheet.open = true));
document.querySelector("#open-dialog")?.addEventListener("click", () => (dialog.open = true));
document.querySelector("#close-modal")?.addEventListener("click", () => (modal.open = false));
document.querySelector("#save-modal")?.addEventListener("click", () => (modal.open = false));
