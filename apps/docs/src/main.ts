import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
import { zaemoruComponents } from "@zaemoru/elements";
import "./styles.css";
import * as si from "simple-icons";

type MenuItem = {
  value: string;
  label: string;
  danger?: boolean;
};

const catalogGroups = [
  {
    title: "Foundation",
    names: [
      "Text",
      "Heading",
      "Paragraph",
      "Highlight",
      "Border",
      "Asset",
      "Favicon",
      "Masthead",
      "Identifier",
      "Header",
      "Footer",
      "SkipLink",
    ],
  },
  {
    title: "Actions",
    names: [
      "Button",
      "TextButton",
      "IconButton",
      "Fab",
      "Link",
      "Tag",
      "BackButton",
      "ToggleSwitch",
      "BottomCta",
    ],
  },
  {
    title: "Forms",
    names: [
      "TextField",
      "TextArea",
      "TextInput",
      "SearchField",
      "SplitTextField",
      "DateInput",
      "FileUpload",
      "Checkbox",
      "RadioButton",
      "Switch",
      "Select",
      "Agreement",
      "Slider",
      "RangeSlider",
      "Stepper",
      "NumericSpinner",
      "QuantityToggle",
      "Rating",
      "NumberKeypad",
      "AlphabetKeypad",
      "SecureKeypad",
      "LanguageSwitcher",
      "Resize",
    ],
  },
  {
    title: "Navigation",
    names: [
      "Top",
      "Tab",
      "TabBars",
      "SegmentedControl",
      "Menu",
      "MainMenu",
      "Breadcrumb",
      "SideNavigation",
      "InPageNavigation",
      "Pagination",
      "ListRow",
    ],
  },
  {
    title: "Feedback",
    names: [
      "Spinner",
      "Loader",
      "ProgressBar",
      "ProgressStepper",
      "StepIndicator",
      "Skeleton",
      "Result",
      "BottomInfo",
      "Toast",
      "Snackbar",
      "Tooltip",
      "CriticalAlert",
      "Modal",
      "Dialog",
      "BottomSheet",
      "HelpPanel",
      "TutorialPanel",
      "ContextualHelp",
      "CoachMark",
      "Tts",
      "SplashScreen",
    ],
  },
  {
    title: "Content And Data",
    names: [
      "Card",
      "BoardRow",
      "ListHeader",
      "ListFooter",
      "Post",
      "Bubble",
      "Badge",
      "TableRow",
      "Table",
      "GridList",
      "StructuredList",
      "TextList",
      "Disclosure",
      "Accordion",
      "Calendar",
      "Image",
      "Carousel",
      "BarChart",
      "AccessibleMultimedia",
      "VisuallyHidden",
    ],
  },
];

const componentByName = new Map<string, (typeof zaemoruComponents)[number]>(
  zaemoruComponents.map((component) => [component.name, component]),
);

const renderedCatalogNames = new Set(catalogGroups.flatMap((group) => group.names));
const uncategorizedCatalogNames = zaemoruComponents
  .map((component) => component.name)
  .filter((name) => !renderedCatalogNames.has(name));

if (uncategorizedCatalogNames.length > 0) {
  catalogGroups.push({ title: "Other Components", names: uncategorizedCatalogNames });
}

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
              <zm-badge size="xsmall" color="blue" variant="fill">Blue</zm-badge>
              <zm-badge size="small" color="teal" variant="fill">Teal</zm-badge>
              <zm-badge size="medium" color="green" variant="weak">Green</zm-badge>
              <zm-badge size="large" color="red" variant="weak">Red</zm-badge>
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
      {
        title: "Brand identity",
        body: `
          <div class="form-stack">
            <zm-skip-link href="#catalog">Skip to component catalog</zm-skip-link>
            <zm-masthead label="This service is operated by a public institution."></zm-masthead>
            <zm-identifier label="Ministry Service" description="Operating organization identifier"></zm-identifier>
            <zm-header label="Public Portal">
              <zm-link href="#forms">Apply</zm-link>
              <zm-link href="#feedback">Help</zm-link>
            </zm-header>
            <zm-footer label="Public Portal" description="Helpful links and service information.">
              <zm-link>Contact</zm-link>
              <zm-link>Policy</zm-link>
            </zm-footer>
            <div class="asset-row">
              <zm-favicon>Z</zm-favicon>
              <zm-paragraph size="sm" tone="subtle">A favicon, masthead, and footer set the institutional context before content begins.</zm-paragraph>
            </div>
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
            <zm-back-button label="Back"></zm-back-button>
            <zm-link href="#forms">Go to forms</zm-link>
            <zm-tag label="Selected"></zm-tag>
            <zm-fab label="Create"></zm-fab>
            <zm-toggle-switch label="Use notifications"></zm-toggle-switch>
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
            <zm-text-input label="Applicant name" description="As shown on your ID"></zm-text-input>
            <zm-search-field placeholder="Search transactions"></zm-search-field>
            <zm-text-area label="Memo" placeholder="Add a private note"></zm-text-area>
            <zm-split-text-field parts="3" placeholder="Code"></zm-split-text-field>
            <zm-date-input label="Start date"></zm-date-input>
            <zm-file-upload label="Attach file" description="PDF or image files are accepted."></zm-file-upload>
          </div>
        `,
      },
      {
        title: "Choices",
        body: `
          <div class="form-stack">
            <zm-checkbox label="Email me receipts"></zm-checkbox>
            <zm-radio-button label="Receive by email" value="email"></zm-radio-button>
            <zm-switch label="Use biometric login"></zm-switch>
            <zm-select id="krds-select" label="Service type"></zm-select>
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
            <zm-range-slider label="Range" value="40"></zm-range-slider>
            <zm-stepper value="2" min="0" max="8"></zm-stepper>
            <zm-numeric-spinner value="3" min="0" max="10"></zm-numeric-spinner>
            <zm-quantity-toggle label="Quantity" value="2" min="0" max="5"></zm-quantity-toggle>
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
      {
        title: "Personalization",
        body: `
          <div class="form-stack">
            <zm-language-switcher id="krds-language" label="Language"></zm-language-switcher>
            <zm-resize label="Text size" value="medium"></zm-resize>
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
      {
        title: "Site navigation",
        body: `
          <div class="form-stack">
            <zm-main-menu id="krds-main-menu" label="Main menu"></zm-main-menu>
            <zm-breadcrumb id="krds-breadcrumb" label="Breadcrumb"></zm-breadcrumb>
            <zm-side-navigation id="krds-side-nav" label="Side navigation"></zm-side-navigation>
            <zm-in-page-navigation id="krds-in-page-nav" label="In-page navigation"></zm-in-page-navigation>
            <zm-pagination value="2"></zm-pagination>
          </div>
        `,
      },
      {
        title: "Mobile bars",
        body: `<zm-tab-bars id="krds-tab-bars" label="Tab bars"></zm-tab-bars>`,
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
            <zm-step-indicator id="krds-step-indicator" current="2"></zm-step-indicator>
            <zm-skeleton height="36px"></zm-skeleton>
            <zm-splash-screen label="zaemoru" description="Loading public service"></zm-splash-screen>
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
            <zm-snackbar label="Draft saved" description="Undo"></zm-snackbar>
            <zm-critical-alert label="Important notice" description="Service hours may change during maintenance."></zm-critical-alert>
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
      {
        title: "Help patterns",
        body: `
          <div class="form-stack">
            <zm-help-panel label="Help panel" description="Contextual help for the current section."></zm-help-panel>
            <zm-tutorial-panel label="Tutorial panel" description="Step-by-step support for complex tasks."></zm-tutorial-panel>
            <zm-contextual-help label="Why is this required?" description="This helps verify eligibility."></zm-contextual-help>
            <zm-coach-mark label="Coach mark" description="A focused hint for a new feature."></zm-coach-mark>
            <zm-tts label="Read aloud" description="This text can be spoken by the browser."></zm-tts>
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
            <zm-table id="krds-table"></zm-table>
            <zm-grid-list columns="3">
              <zm-asset alt="A">A</zm-asset>
              <zm-asset alt="B" shape="circle">B</zm-asset>
              <zm-asset alt="C" shape="square">C</zm-asset>
            </zm-grid-list>
          </div>
        `,
      },
      {
        title: "Structured content",
        body: `
          <div class="form-stack">
            <zm-structured-list id="krds-structured-list"></zm-structured-list>
            <zm-text-list id="krds-text-list"></zm-text-list>
            <zm-disclosure label="Required documents" description="Open to review documents.">Identification and application form.</zm-disclosure>
            <zm-accordion id="krds-accordion"></zm-accordion>
            <zm-visually-hidden>Screen-reader only status text used for live regions.</zm-visually-hidden>
          </div>
        `,
      },
      {
        title: "Media",
        body: `
          <div class="form-stack">
            <zm-image href="/favicon.png" label="Service image" description="Inspectable image content."></zm-image>
            <zm-carousel id="krds-carousel"></zm-carousel>
            <zm-accessible-multimedia label="Accessible media" description="Transcript and alternative description live with media.">
              Transcript: This media explains the application process.
            </zm-accessible-multimedia>
          </div>
        `,
      },
      {
        title: "Calendar",
        body: `<zm-calendar label="Reservation date"></zm-calendar>`,
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

function componentSnippet(name: string, tag: string) {
  if (name === "Button") return `<${tag}>Continue</${tag}>`;
  if (name === "TextField") return `<${tag} label="Name"></${tag}>`;
  if (name === "Select") return `<${tag} label="Service type"></${tag}>`;
  if (name === "Table") return `<${tag} id="service-table"></${tag}>`;
  if (name === "Modal") return `<${tag} open modal-title="Confirm"></${tag}>`;
  if (tag.includes("input") || tag.includes("field")) return `<${tag} label="${name}"></${tag}>`;
  return `<${tag} label="${name}"></${tag}>`;
}

const catalogMarkup = catalogGroups
  .map(
    (group) => `
      <article class="catalog-group">
        <header>
          <h3>${group.title}</h3>
          <span>${group.names.length}</span>
        </header>
        <div class="catalog-grid">
          ${group.names
            .map((name) => {
              const component = componentByName.get(name);
              if (!component) return "";
              const snippet = componentSnippet(name, component.tag);
              return `
                <div class="catalog-card">
                  <div class="catalog-card-head">
                    <strong>${name}</strong>
                  </div>
                  <code>${component.tag}</code>
                  <pre><code>${code(snippet)}</code></pre>
                  <pre><code>${code(`import { ${name} } from "@zaemoru/react";`)}</code></pre>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    `,
  )
  .join("");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="layout">
    <aside class="sidebar">
      <a class="logo" href="#intro">
        zaemoru
      </a>
      <nav>
        ${componentGroups.map((group) => `<a href="#${group.id}">${group.title}</a>`).join("")}
        <a href="#catalog">Catalog</a>
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

      <section class="section" id="catalog">
        <header class="section-header">
          <span>${zaemoruComponents.length} components</span>
          <h2>Component Catalog</h2>
          <p>Every shipped component is listed with its custom element tag and React export, grouped by the role it plays in a screen.</p>
        </header>
        <div class="catalog-stack">
          ${catalogMarkup}
        </div>
      </section>

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

const krdsItems: Record<
  string,
  Array<{ label: string; value?: string; href?: string; description?: string; current?: boolean }>
> = {
  "krds-main-menu": [
    { label: "Home", href: "#intro", current: true },
    { label: "Forms", href: "#forms" },
    { label: "Support", href: "#adapters" },
  ],
  "krds-breadcrumb": [
    { label: "Home", href: "#intro" },
    { label: "Navigation", href: "#navigation" },
    { label: "Site navigation", href: "#navigation", current: true },
  ],
  "krds-side-nav": [
    { label: "Foundation", href: "#foundation", current: true },
    { label: "Navigation", href: "#navigation" },
    { label: "Forms", href: "#forms" },
  ],
  "krds-in-page-nav": [
    { label: "Content", href: "#content" },
    { label: "Feedback", href: "#feedback" },
    { label: "Catalog", href: "#catalog" },
  ],
  "krds-structured-list": [
    { label: "Application number", value: "A-2031" },
    { label: "Status", description: "Review in progress" },
  ],
  "krds-accordion": [
    { label: "Eligibility", description: "Citizens and residents may apply." },
    { label: "Processing time", description: "Most requests are processed within 3 days." },
  ],
  "krds-carousel": [
    { label: "Notice", description: "Review your information before submitting." },
    { label: "Support", description: "Help is available during every step." },
  ],
  "krds-table": [
    { label: "Fee", value: "Free" },
    { label: "Channel", value: "Online" },
  ],
  "krds-text-list": [
    { label: "Prepare identification" },
    { label: "Upload required files" },
    { label: "Submit application" },
  ],
  "krds-select": [
    { label: "Certificate", value: "certificate" },
    { label: "Application", value: "application" },
  ],
  "krds-step-indicator": [{ label: "Input" }, { label: "Review" }, { label: "Submit" }],
  "krds-language": [
    { label: "한국어", value: "ko" },
    { label: "English", value: "en" },
  ],
  "krds-tab-bars": [
    { label: "Home", href: "#intro", current: true },
    { label: "Search", href: "#forms" },
    { label: "My", href: "#content" },
  ],
};

Object.entries(krdsItems).forEach(([id, items]) => {
  const element = document.querySelector<HTMLElement & { items: typeof items }>(`#${id}`);
  if (element) element.items = items;
});

const modal = document.querySelector<HTMLElement & { open: boolean }>("#demo-modal")!;
const sheet = document.querySelector<HTMLElement & { open: boolean }>("#demo-sheet")!;
const dialog = document.querySelector<HTMLElement & { open: boolean }>("#demo-dialog")!;

document.querySelector("#hero-modal")?.addEventListener("click", () => (modal.open = true));
document.querySelector("#open-modal")?.addEventListener("click", () => (modal.open = true));
document.querySelector("#open-sheet")?.addEventListener("click", () => (sheet.open = true));
document.querySelector("#open-dialog")?.addEventListener("click", () => (dialog.open = true));
document.querySelector("#close-modal")?.addEventListener("click", () => (modal.open = false));
document.querySelector("#save-modal")?.addEventListener("click", () => (modal.open = false));
