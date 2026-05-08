import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
import { zaemoruComponents } from "@zaemoru/elements";
import "./styles.css";
import * as si from "simple-icons";

type ComponentDefinition = {
  name: string;
  tag: `zm-${string}`;
  attributes: Record<string, string>;
  booleanAttributes?: readonly string[];
  properties?: readonly string[];
  events?: Record<string, string>;
};

type DocEntry = {
  description: string;
  preview: string;
  setup?: (root: HTMLElement) => void;
};

type ItemList = Array<{
  label: string;
  value?: string;
  href?: string;
  description?: string;
  current?: boolean;
  badge?: string;
}>;

const definitions = (zaemoruComponents as readonly ComponentDefinition[])
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
const firstDefinition: ComponentDefinition =
  definitions[0] ??
  (() => {
    throw new Error("No zaemoru components are registered.");
  })();

function humanize(name: string): string {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
}

function slugify(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function codeBlock(code: string, language?: string): string {
  const langAttr = language ? ` language="${language}"` : "";
  return `<zm-code-block${langAttr}>${escapeHtml(code)}</zm-code-block>`;
}

function dedent(value: string): string {
  const trimmed = value.replace(/^\n+/, "").replace(/\s+$/, "");
  const lines = trimmed.split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => /^ */.exec(line)?.[0].length ?? 0);
  const minimum = indents.length > 0 ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(minimum)).join("\n");
}

const tabItems: ItemList = [
  { value: "all", label: "All", badge: "12" },
  { value: "cards", label: "Cards" },
  { value: "loans", label: "Loans" },
];

const segmentItems: ItemList = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
];

const menuItems = [
  { value: "edit", label: "Edit" },
  { value: "share", label: "Share" },
  { value: "delete", label: "Delete", danger: true },
];

const commandItems = [
  { value: "profile", label: "Open profile", description: "Go to account settings" },
  { value: "transfer", label: "Start transfer", description: "Create a new payment" },
  { value: "support", label: "Contact support", description: "Get help with this service" },
];

const sonnerItems = [
  { label: "Saved", description: "Your application draft is up to date.", tone: "success" },
  { label: "Review required", description: "One attachment needs attention.", tone: "warning" },
];

const navItems: ItemList = [
  { label: "Home", href: "#/", current: true },
  { label: "Components", href: "#/components/button" },
  { label: "Support", href: "#/installation" },
];

const breadcrumbItems: ItemList = [
  { label: "Home", href: "#/" },
  { label: "Components", href: "#/components/button" },
  { label: "Detail", current: true },
];

const sideNavItems: ItemList = [
  { label: "Foundation", href: "#/components/heading", current: true },
  { label: "Forms", href: "#/components/text-field" },
  { label: "Navigation", href: "#/components/tab" },
];

const inPageNavItems: ItemList = [
  { label: "Overview", href: "#overview", current: true },
  { label: "Examples", href: "#examples" },
  { label: "API", href: "#api" },
];

const stepItems: ItemList = [{ label: "Input" }, { label: "Review" }, { label: "Submit" }];

const structuredListItems = [
  { label: "Application number", value: "A-2031" },
  { label: "Status", description: "Review in progress" },
];

const accordionItems = [
  { label: "Eligibility", description: "Citizens and residents may apply." },
  { label: "Processing time", description: "Most requests are processed within 3 days." },
];

const carouselItems = [
  { label: "Notice", description: "Review your information before submitting." },
  { label: "Support", description: "Help is available during every step." },
];

const tableItems = [
  { label: "Fee", value: "Free" },
  { label: "Channel", value: "Online" },
];

const textListItems = [
  { label: "Prepare identification" },
  { label: "Upload required files" },
  { label: "Submit application" },
];

const selectItems = [
  { label: "Certificate", value: "certificate" },
  { label: "Application", value: "application" },
];

const languageItems = [
  { label: "한국어", value: "ko" },
  { label: "English", value: "en" },
];

const tabBarItems: ItemList = [
  { label: "Home", href: "#/", current: true },
  { label: "Search", href: "#/components/search-field" },
  { label: "My", href: "#/components/card" },
];

const chartData = [
  { label: "Mon", value: 24 },
  { label: "Tue", value: 42 },
  { label: "Wed", value: 32 },
  { label: "Thu", value: 64 },
  { label: "Fri", value: 52 },
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

function applyItems(root: HTMLElement, selector: string, items: unknown) {
  const element = root.querySelector(selector) as
    | (HTMLElement & { items?: unknown; options?: unknown; data?: unknown })
    | null;
  if (!element) return;
  if ("items" in element) (element as HTMLElement & { items?: unknown }).items = items;
}

function applyOptions(root: HTMLElement, selector: string, options: unknown) {
  const element = root.querySelector(selector) as (HTMLElement & { options?: unknown }) | null;
  if (element) element.options = options;
}

function applyData(root: HTMLElement, selector: string, data: unknown) {
  const element = root.querySelector(selector) as (HTMLElement & { data?: unknown }) | null;
  if (element) element.data = data;
}

const docs: Record<string, DocEntry> = {
  Button: {
    description:
      "A clickable button that triggers actions. Variants express hierarchy from primary to danger; sizes scale to mobile-first touch targets.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-button>Continue</zm-button>
        <zm-button variant="secondary">Review details</zm-button>
        <zm-button variant="tertiary">Maybe later</zm-button>
        <zm-button variant="danger">Delete account</zm-button>
        <zm-button loading>Processing</zm-button>
        <zm-button disabled>Disabled</zm-button>
      </div>
    `),
  },
  TextButton: {
    description: "An inline text button for low-emphasis actions inside paragraphs and rows.",
    preview: dedent(`
      <div class="docs-row">
        <zm-text-button tone="primary">Resend</zm-text-button>
        <zm-text-button tone="neutral">Skip</zm-text-button>
        <zm-text-button tone="danger">Remove</zm-text-button>
      </div>
    `),
  },
  IconButton: {
    description: "A square button containing a single icon. Sized for comfortable touch.",
    preview: dedent(`
      <div class="docs-row">
        <zm-icon-button aria-label="Add">+</zm-icon-button>
        <zm-icon-button variant="solid" aria-label="Confirm">✓</zm-icon-button>
        <zm-icon-button variant="ghost" aria-label="More">⋯</zm-icon-button>
      </div>
    `),
  },
  Fab: {
    description: "A floating action button surfacing the most common screen action.",
    preview: `<zm-fab label="Create"></zm-fab>`,
  },
  Link: {
    description: "An anchor styled to match the design system's typography and focus state.",
    preview: dedent(`
      <div class="docs-row">
        <zm-link href="#/">Default link</zm-link>
        <zm-link href="#/components/button" tone="strong">Strong link</zm-link>
      </div>
    `),
  },
  Tag: {
    description: "A short label for selected filters, status pills, or contextual metadata.",
    preview: dedent(`
      <div class="docs-row">
        <zm-tag label="Selected"></zm-tag>
        <zm-tag label="Beta"></zm-tag>
        <zm-tag label="Removable" removable></zm-tag>
      </div>
    `),
  },
  BackButton: {
    description: "A leading-icon button for returning to the previous screen.",
    preview: `<zm-back-button label="Back"></zm-back-button>`,
  },
  ToggleSwitch: {
    description: "A labeled toggle switching a binary preference on or off.",
    preview: `<zm-toggle-switch label="Use notifications"></zm-toggle-switch>`,
  },
  BottomCta: {
    description:
      "A fixed-to-bottom CTA region for the primary action of an entire screen. Renders inline in docs.",
    preview: dedent(`
      <div class="docs-phone">
        <zm-paragraph tone="subtle">Review the application before submitting.</zm-paragraph>
        <zm-bottom-cta layout="double">
          <zm-button variant="secondary">Back</zm-button>
          <zm-button>Next</zm-button>
        </zm-bottom-cta>
      </div>
    `),
  },
  Badge: {
    description:
      "A small status pill. Combine variant, size, and color to express different intensities.",
    preview: dedent(`
      <div class="docs-row">
        <zm-badge size="small" color="blue" variant="fill">Fill</zm-badge>
        <zm-badge size="small" color="blue" variant="weak">Weak</zm-badge>
        <zm-badge size="small" color="green" variant="fill">Success</zm-badge>
        <zm-badge size="small" color="red" variant="weak">Danger</zm-badge>
        <zm-badge size="small" color="yellow" variant="weak">Warning</zm-badge>
      </div>
    `),
  },
  Heading: {
    description: "Display headings sized via the level and size attributes.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-heading level="1" size="3xl">Display heading</zm-heading>
        <zm-heading level="2" size="2xl">Section heading</zm-heading>
        <zm-heading level="3" size="xl">Subsection heading</zm-heading>
      </div>
    `),
  },
  Paragraph: {
    description: "Body copy block with size and tone variants for hierarchy.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-paragraph size="lg">Body large for important descriptions.</zm-paragraph>
        <zm-paragraph>Default paragraph for normal content.</zm-paragraph>
        <zm-paragraph size="sm" tone="subtle">Small subtle helper text.</zm-paragraph>
      </div>
    `),
  },
  Text: {
    description: "Inline text node with size, weight, and tone props.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-text size="lg" weight="bold">Large bold text</zm-text>
        <zm-text tone="subtle">Subtle supporting text</zm-text>
        <zm-text tone="danger">Danger text</zm-text>
      </div>
    `),
  },
  Highlight: {
    description: "Emphasizes a span of text with a colored highlight background.",
    preview: `<zm-highlight tone="primary">Highlighted phrase</zm-highlight>`,
  },
  Kbd: {
    description: "A compact keyboard-key token for command labels and shortcuts.",
    preview: dedent(`
      <div class="docs-row">
        <zm-kbd>⌘</zm-kbd>
        <zm-kbd>K</zm-kbd>
        <zm-text tone="subtle">Open command menu</zm-text>
      </div>
    `),
  },
  Border: {
    description: "A horizontal or vertical divider with optional tone and weight.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-border></zm-border>
        <zm-border tone="strong"></zm-border>
        <zm-border thick></zm-border>
      </div>
    `),
  },
  Asset: {
    description:
      "A neutral placeholder for product imagery, with circle, rounded, and square shapes.",
    preview: dedent(`
      <div class="docs-row">
        <zm-asset shape="circle" alt="A">A</zm-asset>
        <zm-asset shape="rounded" alt="Z">Z</zm-asset>
        <zm-asset shape="square" alt="M">M</zm-asset>
      </div>
    `),
  },
  AspectRatio: {
    description:
      "A fixed-ratio media frame that keeps images, videos, and embedded content from shifting layout.",
    preview: dedent(`
      <zm-aspect-ratio ratio="16 / 9">
        <img src="/favicon.png" alt="Zaemoru mark" />
      </zm-aspect-ratio>
    `),
  },
  Avatar: {
    description: "A circular identity image with a fallback label when no image is available.",
    preview: dedent(`
      <div class="docs-row">
        <zm-avatar fallback="ZM"></zm-avatar>
        <zm-avatar size="small" fallback="A"></zm-avatar>
        <zm-avatar size="large" alt="Zaemoru" src="/favicon.png"></zm-avatar>
      </div>
    `),
  },
  Favicon: {
    description: "A small brand mark used in service identifiers.",
    preview: `<zm-favicon>Z</zm-favicon>`,
  },
  Masthead: {
    description: "A top-of-page banner that signals the institutional source of a service.",
    preview: `<zm-masthead label="This service is operated by a public institution."></zm-masthead>`,
  },
  Identifier: {
    description: "Names the operating organization or unit responsible for a service.",
    preview: `<zm-identifier label="Ministry Service" description="Operating organization identifier"></zm-identifier>`,
  },
  Header: {
    description: "Top-of-app header with brand label and trailing navigation links.",
    preview: dedent(`
      <zm-header label="Public Portal">
        <zm-link href="#/components/text-field">Apply</zm-link>
        <zm-link href="#/components/help-panel">Help</zm-link>
      </zm-header>
    `),
  },
  Footer: {
    description: "Bottom-of-page footer with description and supporting links.",
    preview: dedent(`
      <zm-footer label="Public Portal" description="Helpful links and service information.">
        <zm-link>Contact</zm-link>
        <zm-link>Policy</zm-link>
      </zm-footer>
    `),
  },
  SkipLink: {
    description: "A keyboard-only link to skip past navigation to the main content area.",
    preview: `<zm-skip-link href="#main">Skip to content</zm-skip-link>`,
  },
  TextField: {
    description: "A labeled single-line text input with helper, error, and validation states.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-text-field label="Name" placeholder="Jane Zaemoru"></zm-text-field>
        <zm-text-field label="Email" helper-text="We'll only use this for receipts."></zm-text-field>
        <zm-text-field label="Amount" invalid error-message="Enter a valid amount."></zm-text-field>
        <zm-text-field label="Disabled" disabled></zm-text-field>
      </div>
    `),
  },
  Label: {
    description: "A standalone form label with required and helper text states.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-label for="docs-label-input" required description="Use the name on your ID">Applicant name</zm-label>
        <zm-text-field id="docs-label-input" placeholder="Jane Zaemoru"></zm-text-field>
      </div>
    `),
  },
  InputGroup: {
    description: "A grouped input frame with prefix and suffix slots for units or fixed context.",
    preview: dedent(`
      <zm-input-group label="Amount" description="Prefix and suffix stay aligned with the input.">
        <span slot="prefix">$</span>
        <input value="1200" aria-label="Amount" />
        <span slot="suffix">USD</span>
      </zm-input-group>
    `),
  },
  InputOtp: {
    description:
      "A one-time-code input with fixed character cells, value aggregation, and optional masking.",
    preview: `<zm-input-otp parts="6" value="123"></zm-input-otp>`,
  },
  Combobox: {
    description: "A searchable single-select input for picking from a larger option set.",
    preview: `<zm-combobox id="demo-combobox" label="Service" placeholder="Search services"></zm-combobox>`,
    setup(root) {
      applyOptions(root, "#demo-combobox", selectItems);
    },
  },
  TextInput: {
    description: "A simpler text input variant matching public-service conventions.",
    preview: `<zm-text-input label="Applicant name" description="As shown on your ID"></zm-text-input>`,
  },
  TextArea: {
    description: "A multi-line text input with optional row count and max length counter.",
    preview: `<zm-text-area label="Memo" rows="4" max-length="120" placeholder="Add a note"></zm-text-area>`,
  },
  SearchField: {
    description: "A search input with leading icon, clear button, and submit on enter.",
    preview: `<zm-search-field placeholder="Search transactions"></zm-search-field>`,
  },
  SplitTextField: {
    description: "A grouped multi-segment input for codes, OTPs, or split tokens.",
    preview: `<zm-split-text-field parts="3" placeholder="Code"></zm-split-text-field>`,
  },
  DateInput: {
    description: "A labeled date input with calendar trigger and keyboard parsing.",
    preview: `<zm-date-input label="Start date"></zm-date-input>`,
  },
  FileUpload: {
    description: "A file picker with description, drag-drop area, and accepted-types hint.",
    preview: `<zm-file-upload label="Attach file" description="PDF or image files are accepted."></zm-file-upload>`,
  },
  Checkbox: {
    description: "A binary toggle for opt-in choices and item selection.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-checkbox label="Unchecked"></zm-checkbox>
        <zm-checkbox label="Checked" checked></zm-checkbox>
        <zm-checkbox label="Disabled" disabled></zm-checkbox>
      </div>
    `),
  },
  RadioButton: {
    description: "A single choice within a related group of radio inputs.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-radio-button label="Email" value="email" checked></zm-radio-button>
        <zm-radio-button label="SMS" value="sms"></zm-radio-button>
        <zm-radio-button label="Push" value="push"></zm-radio-button>
      </div>
    `),
  },
  Switch: {
    description: "An on/off toggle for instant settings.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-switch label="Use biometric login"></zm-switch>
        <zm-switch label="Enable notifications" checked></zm-switch>
      </div>
    `),
  },
  Select: {
    description: "A labeled dropdown for picking one option from a list.",
    preview: `<zm-select id="demo-select" label="Service type"></zm-select>`,
    setup(root) {
      applyItems(root, "#demo-select", selectItems);
    },
  },
  Agreement: {
    description: "A grouped agreement control with a master checkbox and child consents.",
    preview: dedent(`
      <zm-agreement label="Agree to all">
        <zm-checkbox label="Terms of service"></zm-checkbox>
        <zm-checkbox label="Privacy policy"></zm-checkbox>
      </zm-agreement>
    `),
  },
  Slider: {
    description: "A draggable single-value selector along a continuous range.",
    preview: `<zm-slider value="40"></zm-slider>`,
  },
  RangeSlider: {
    description: "A labeled slider with min, max, and value attributes.",
    preview: `<zm-range-slider label="Volume" value="40"></zm-range-slider>`,
  },
  Stepper: {
    description: "A compact +/- control for incrementing a small numeric value.",
    preview: `<zm-stepper value="2" min="0" max="8"></zm-stepper>`,
  },
  NumericSpinner: {
    description: "A larger numeric input with hold-to-repeat increment buttons.",
    preview: `<zm-numeric-spinner value="3" min="0" max="10"></zm-numeric-spinner>`,
  },
  QuantityToggle: {
    description: "A labeled add-to-cart style quantity toggle with min and max bounds.",
    preview: `<zm-quantity-toggle label="Quantity" value="2" min="0" max="5"></zm-quantity-toggle>`,
  },
  Rating: {
    description: "A star-rating control for 1-5 ratings.",
    preview: `<zm-rating value="4"></zm-rating>`,
  },
  NumberKeypad: {
    description: "An on-screen numeric keypad for amount entry on mobile.",
    preview: `<zm-number-keypad show-submit></zm-number-keypad>`,
  },
  AlphabetKeypad: {
    description: "An on-screen alphabet keypad for accessible text entry.",
    preview: `<zm-alphabet-keypad show-submit></zm-alphabet-keypad>`,
  },
  SecureKeypad: {
    description: "A randomized-key numeric keypad for sensitive PIN entry.",
    preview: `<zm-secure-keypad show-submit></zm-secure-keypad>`,
  },
  LanguageSwitcher: {
    description: "A labeled selector for switching the active locale.",
    preview: `<zm-language-switcher id="demo-language" label="Language"></zm-language-switcher>`,
    setup(root) {
      applyItems(root, "#demo-language", languageItems);
    },
  },
  Resize: {
    description: "A small/medium/large text-size selector for accessibility.",
    preview: `<zm-resize label="Text size" value="medium"></zm-resize>`,
  },
  Top: {
    description:
      "An app-bar-style top region with title, subtitle, and slotted leading and trailing controls.",
    preview: dedent(`
      <zm-top title="Account" subtitle="Personal banking">
        <zm-icon-button slot="leading" aria-label="Back">‹</zm-icon-button>
        <zm-icon-button slot="trailing" aria-label="Settings">⚙</zm-icon-button>
      </zm-top>
    `),
  },
  Tab: {
    description: "Switches between related views by selection. Items are passed as a property.",
    preview: `<zm-tab id="demo-tab" value="cards" full-width></zm-tab>`,
    setup(root) {
      applyItems(root, "#demo-tab", tabItems);
    },
  },
  TabBars: {
    description: "Bottom-of-screen mobile tab bar for switching between top-level destinations.",
    preview: `<zm-tab-bars id="demo-tab-bars" label="Tab bars"></zm-tab-bars>`,
    setup(root) {
      applyItems(root, "#demo-tab-bars", tabBarItems);
    },
  },
  SegmentedControl: {
    description: "A grouped segmented selector for switching between a small fixed set.",
    preview: `<zm-segmented-control id="demo-segments" value="week" full-width></zm-segmented-control>`,
    setup(root) {
      applyOptions(root, "#demo-segments", segmentItems);
    },
  },
  ButtonGroup: {
    description: "A semantic action group for related buttons, either spaced or visually attached.",
    preview: dedent(`
      <zm-button-group label="View mode" attached>
        <zm-button variant="secondary">List</zm-button>
        <zm-button variant="secondary">Grid</zm-button>
        <zm-button variant="secondary">Map</zm-button>
      </zm-button-group>
    `),
  },
  Menu: {
    description: "A dropdown menu of action items, supporting destructive entries.",
    preview: `<zm-menu id="demo-menu"></zm-menu>`,
    setup(root) {
      applyItems(root, "#demo-menu", menuItems);
    },
  },
  Command: {
    description: "A searchable command list for fast navigation and action selection.",
    preview: `<zm-command id="demo-command" placeholder="Search actions"></zm-command>`,
    setup(root) {
      applyItems(root, "#demo-command", commandItems);
    },
  },
  ContextMenu: {
    description: "A right-click action menu for contextual actions on a target element.",
    preview: dedent(`
      <zm-context-menu id="demo-context-menu">
        <zm-item title="Right-click this row" description="The context menu opens at the pointer." interactive></zm-item>
      </zm-context-menu>
    `),
    setup(root) {
      applyItems(root, "#demo-context-menu", menuItems);
    },
  },
  MainMenu: {
    description: "A primary navigation menu with current-state highlight.",
    preview: `<zm-main-menu id="demo-main-menu" label="Main menu"></zm-main-menu>`,
    setup(root) {
      applyItems(root, "#demo-main-menu", navItems);
    },
  },
  Breadcrumb: {
    description: "A trail of links showing the current location within a hierarchy.",
    preview: `<zm-breadcrumb id="demo-breadcrumb" label="Breadcrumb"></zm-breadcrumb>`,
    setup(root) {
      applyItems(root, "#demo-breadcrumb", breadcrumbItems);
    },
  },
  SideNavigation: {
    description: "A vertical navigation list, typically used in side panels.",
    preview: `<zm-side-navigation id="demo-side-nav" label="Side navigation"></zm-side-navigation>`,
    setup(root) {
      applyItems(root, "#demo-side-nav", sideNavItems);
    },
  },
  InPageNavigation: {
    description: "An inline list of jump links to anchors within the current page.",
    preview: `<zm-in-page-navigation id="demo-in-page-nav" label="On this page"></zm-in-page-navigation>`,
    setup(root) {
      applyItems(root, "#demo-in-page-nav", inPageNavItems);
    },
  },
  Pagination: {
    description: "A numbered pager with previous/next controls and a current page indicator.",
    preview: `<zm-pagination value="2"></zm-pagination>`,
  },
  ListRow: {
    description: "A row in a list view, with title, description, and an optional chevron.",
    preview: dedent(`
      <div class="docs-phone">
        <zm-list-row title="Coffee" description="Today · Card" chevron></zm-list-row>
        <zm-list-row title="Salary" description="Yesterday · Deposit" chevron></zm-list-row>
        <zm-list-row title="Refund" description="2 days ago" chevron></zm-list-row>
      </div>
    `),
  },
  Spinner: {
    description: "A circular indeterminate loading indicator.",
    preview: `<zm-spinner></zm-spinner>`,
  },
  Loader: {
    description: "A labeled loader for slow operations.",
    preview: `<zm-loader label="Loading portfolio"></zm-loader>`,
  },
  ProgressBar: {
    description: "A horizontal progress indicator. Tone signals state.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-progress-bar value="64"></zm-progress-bar>
        <zm-progress-bar value="72" tone="success"></zm-progress-bar>
        <zm-progress-bar value="40" tone="warning"></zm-progress-bar>
        <zm-progress-bar indeterminate></zm-progress-bar>
      </div>
    `),
  },
  ProgressStepper: {
    description: "A multi-step progress indicator showing the current step within a total.",
    preview: `<zm-progress-stepper value="2" total="5"></zm-progress-stepper>`,
  },
  StepIndicator: {
    description: "A labeled step indicator for multi-page workflows.",
    preview: `<zm-step-indicator id="demo-step-indicator" current="2"></zm-step-indicator>`,
    setup(root) {
      applyItems(root, "#demo-step-indicator", stepItems);
    },
  },
  Skeleton: {
    description: "A placeholder shape for content that's still loading.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-skeleton shape="text" width="70%" height="20px"></zm-skeleton>
        <zm-skeleton shape="rounded" height="44px"></zm-skeleton>
        <zm-skeleton shape="circle" width="48px" height="48px"></zm-skeleton>
      </div>
    `),
  },
  Result: {
    description:
      "A full-screen result confirmation with tone, title, description, and actions slot.",
    preview: dedent(`
      <zm-result tone="success" result-title="Transfer complete" description="Your money arrived safely.">
        <zm-button slot="actions">Done</zm-button>
      </zm-result>
    `),
  },
  BottomInfo: {
    description: "A small inline notice for context placed below related content.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-bottom-info tone="primary">Info: assets are intentionally generic.</zm-bottom-info>
        <zm-bottom-info tone="warning">Check your input before submitting.</zm-bottom-info>
      </div>
    `),
  },
  Toast: {
    description: "A short-lived message confirming an action, optionally with an undo affordance.",
    preview: `<zm-toast tone="success">Saved successfully <span slot="action">Undo</span></zm-toast>`,
  },
  Snackbar: {
    description: "A persistent message bar with a label and trailing action.",
    preview: `<zm-snackbar label="Draft saved" description="Undo"></zm-snackbar>`,
  },
  Tooltip: {
    description: "A small contextual hint shown on hover or focus of its trigger.",
    preview: dedent(`
      <zm-tooltip text="This appears on hover or focus">
        <zm-button variant="secondary">Hover me</zm-button>
      </zm-tooltip>
    `),
  },
  CriticalAlert: {
    description: "A high-emphasis alert for service-level information that must not be missed.",
    preview: `<zm-critical-alert label="Important notice" description="Service hours may change during maintenance."></zm-critical-alert>`,
  },
  Sonner: {
    description: "A stacked toast region for multiple short status messages.",
    preview: `<zm-sonner id="demo-sonner"></zm-sonner>`,
    setup(root) {
      applyItems(root, "#demo-sonner", sonnerItems);
    },
  },
  Modal: {
    description:
      "A focused overlay that interrupts the page. Focus is trapped, scroll locked, and Escape closes it.",
    preview: dedent(`
      <div class="docs-row">
        <zm-button id="open-modal">Open modal</zm-button>
      </div>
      <zm-modal id="demo-modal" modal-title="Polished overlay" description="Focus stays inside, Escape closes it.">
        <zm-text-field label="Reason" placeholder="Optional"></zm-text-field>
        <span slot="actions">
          <zm-button variant="secondary" id="close-modal">Cancel</zm-button>
          <zm-button id="save-modal">Save</zm-button>
        </span>
      </zm-modal>
    `),
    setup(root) {
      const modal = root.querySelector<HTMLElement & { open: boolean }>("#demo-modal");
      if (!modal) return;
      root.querySelector("#open-modal")?.addEventListener("click", () => (modal.open = true));
      root.querySelector("#close-modal")?.addEventListener("click", () => (modal.open = false));
      root.querySelector("#save-modal")?.addEventListener("click", () => (modal.open = false));
    },
  },
  Dialog: {
    description: "A confirm-style dialog. Self-closes on confirm or cancel.",
    preview: dedent(`
      <div class="docs-row">
        <zm-button id="open-dialog">Open dialog</zm-button>
      </div>
      <zm-dialog id="demo-dialog" kind="confirm" dialog-title="Confirm action" description="This dialog closes itself on confirm or cancel."></zm-dialog>
    `),
    setup(root) {
      const dialog = root.querySelector<HTMLElement & { open: boolean }>("#demo-dialog");
      if (!dialog) return;
      root.querySelector("#open-dialog")?.addEventListener("click", () => (dialog.open = true));
    },
  },
  BottomSheet: {
    description: "A bottom-anchored sheet for selection or context actions on mobile.",
    preview: dedent(`
      <div class="docs-row">
        <zm-button id="open-sheet">Open sheet</zm-button>
      </div>
      <zm-bottom-sheet id="demo-sheet" sheet-title="Bottom sheet">
        <div class="docs-stack">
          <zm-list-row title="Share" description="Send this page"></zm-list-row>
          <zm-list-row title="Duplicate" description="Create a copy"></zm-list-row>
          <zm-list-row title="Delete" description="Remove permanently"></zm-list-row>
        </div>
      </zm-bottom-sheet>
    `),
    setup(root) {
      const sheet = root.querySelector<HTMLElement & { open: boolean }>("#demo-sheet");
      if (!sheet) return;
      root.querySelector("#open-sheet")?.addEventListener("click", () => (sheet.open = true));
    },
  },
  HelpPanel: {
    description: "A side panel of contextual help content for a section of the page.",
    preview: `<zm-help-panel label="Help panel" description="Contextual help for the current section."></zm-help-panel>`,
  },
  TutorialPanel: {
    description: "A guided tutorial panel for stepping users through complex tasks.",
    preview: `<zm-tutorial-panel label="Tutorial panel" description="Step-by-step support for complex tasks."></zm-tutorial-panel>`,
  },
  ContextualHelp: {
    description: "An inline trigger that reveals a focused explanation of a single field or term.",
    preview: `<zm-contextual-help label="Why is this required?" description="This helps verify eligibility."></zm-contextual-help>`,
  },
  HoverCard: {
    description: "A richer hover/focus preview for people, links, or compact entities.",
    preview: dedent(`
      <zm-hover-card>
        <zm-button slot="trigger" variant="secondary">Hover profile</zm-button>
        <div class="docs-stack">
          <zm-avatar fallback="ZM"></zm-avatar>
          <zm-heading level="3" size="lg">Zaemoru</zm-heading>
          <zm-paragraph tone="subtle">Framework-agnostic UI components.</zm-paragraph>
        </div>
      </zm-hover-card>
    `),
  },
  Popover: {
    description: "A click-triggered floating panel for compact forms and contextual actions.",
    preview: dedent(`
      <zm-popover>
        <zm-button slot="trigger" variant="secondary">Open popover</zm-button>
        <div class="docs-stack">
          <zm-heading level="3" size="lg">Quick note</zm-heading>
          <zm-text-field label="Memo" placeholder="Add context"></zm-text-field>
        </div>
      </zm-popover>
    `),
  },
  CoachMark: {
    description: "A spotlight pointer that calls out a new or non-obvious feature.",
    preview: `<zm-coach-mark label="Coach mark" description="A focused hint for a new feature."></zm-coach-mark>`,
  },
  Tts: {
    description: "A read-aloud trigger that uses the Web Speech API to speak its content.",
    preview: `<zm-tts label="Read aloud" description="This text can be spoken by the browser."></zm-tts>`,
  },
  SplashScreen: {
    description: "A full-screen brand splash with label and supporting description.",
    preview: `<zm-splash-screen label="zaemoru" description="Loading public service"></zm-splash-screen>`,
  },
  Card: {
    description: "A container for grouped content with consistent padding and rounded corners.",
    preview: dedent(`
      <zm-card>
        <zm-heading level="3" size="lg">Recent activity</zm-heading>
        <zm-paragraph tone="subtle">Latest updates from your account.</zm-paragraph>
      </zm-card>
    `),
  },
  Empty: {
    description: "A centered empty state with icon, title, description, and optional actions.",
    preview: dedent(`
      <zm-empty title="No applications yet" description="Start a new application when you're ready.">
        <zm-button slot="actions">Create application</zm-button>
      </zm-empty>
    `),
  },
  Item: {
    description: "A generic selectable item row for lists, menus, and command-like surfaces.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-item title="Passport renewal" description="Updated today" interactive selected></zm-item>
        <zm-item title="Vehicle registration" description="Requires identity verification" interactive></zm-item>
      </div>
    `),
  },
  BoardRow: {
    description: "An eyebrow + title + description row used in dashboards and summary boards.",
    preview: `<zm-board-row eyebrow="Insight" title="Budget is healthy" description="You spent less than usual."></zm-board-row>`,
  },
  ListHeader: {
    description: "A list-section header with title and supporting description.",
    preview: `<zm-list-header title="Recent" description="Latest activity"></zm-list-header>`,
  },
  ListFooter: {
    description: "A list-section footer for last-updated time or supporting metadata.",
    preview: `<zm-list-footer description="Updated just now"></zm-list-footer>`,
  },
  Post: {
    description: "A title + meta + description block for content cards and articles.",
    preview: `<zm-post post-title="A calmer dashboard" meta="Design note" description="Dense enough for work, soft enough for daily use."></zm-post>`,
  },
  Bubble: {
    description: "A chat-bubble container with start and end placement and tone.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-bubble tone="neutral" placement="start">Hi! How can I help?</zm-bubble>
        <zm-bubble tone="primary" placement="end">Your request is ready.</zm-bubble>
      </div>
    `),
  },
  TableRow: {
    description: "A label/value row used in summary tables, with optional emphasis and alignment.",
    preview: dedent(`
      <div class="docs-stack">
        <zm-table-row label="Principal" value="$12,000"></zm-table-row>
        <zm-table-row label="Interest" value="$420" emphasis></zm-table-row>
        <zm-table-row label="Right aligned" value="Ready" align="right"></zm-table-row>
      </div>
    `),
  },
  Table: {
    description: "A simple key-value table fed by an items property.",
    preview: `<zm-table id="demo-table"></zm-table>`,
    setup(root) {
      applyItems(root, "#demo-table", tableItems);
    },
  },
  GridList: {
    description: "A grid of items with a configurable column count.",
    preview: dedent(`
      <zm-grid-list columns="3">
        <zm-asset alt="A">A</zm-asset>
        <zm-asset alt="B" shape="circle">B</zm-asset>
        <zm-asset alt="C" shape="square">C</zm-asset>
      </zm-grid-list>
    `),
  },
  StructuredList: {
    description: "A definition-list-style component for label/value detail blocks.",
    preview: `<zm-structured-list id="demo-structured-list"></zm-structured-list>`,
    setup(root) {
      applyItems(root, "#demo-structured-list", structuredListItems);
    },
  },
  TextList: {
    description: "An ordered list of short text items with consistent spacing.",
    preview: `<zm-text-list id="demo-text-list"></zm-text-list>`,
    setup(root) {
      applyItems(root, "#demo-text-list", textListItems);
    },
  },
  ScrollArea: {
    description: "A constrained scrolling viewport for long content without expanding the page.",
    preview: dedent(`
      <zm-scroll-area height="160px">
        <div class="docs-stack">
          <zm-list-row title="January" description="Statement ready"></zm-list-row>
          <zm-list-row title="February" description="Statement ready"></zm-list-row>
          <zm-list-row title="March" description="Statement ready"></zm-list-row>
          <zm-list-row title="April" description="Statement ready"></zm-list-row>
          <zm-list-row title="May" description="Statement ready"></zm-list-row>
        </div>
      </zm-scroll-area>
    `),
  },
  Resizable: {
    description: "A two-panel layout with a visible separator and configurable starting size.",
    preview: dedent(`
      <zm-resizable size="38%">
        <zm-list-row slot="start" title="Navigation" description="Left panel"></zm-list-row>
        <zm-card slot="end">
          <zm-heading level="3" size="lg">Detail panel</zm-heading>
          <zm-paragraph tone="subtle">The second panel fills the remaining space.</zm-paragraph>
        </zm-card>
      </zm-resizable>
    `),
  },
  Direction: {
    description: "A layout wrapper that applies left-to-right or right-to-left text direction.",
    preview: dedent(`
      <zm-direction direction="rtl">
        <zm-card>
          <zm-heading level="3" size="lg">RTL content</zm-heading>
          <zm-paragraph tone="subtle">Direction is applied to everything inside.</zm-paragraph>
        </zm-card>
      </zm-direction>
    `),
  },
  Disclosure: {
    description: "A single expand/collapse region with label, description, and content.",
    preview: dedent(`
      <zm-disclosure label="Required documents" description="Open to review documents.">
        Identification and application form.
      </zm-disclosure>
    `),
  },
  Accordion: {
    description: "A vertically stacked set of expandable sections.",
    preview: `<zm-accordion id="demo-accordion"></zm-accordion>`,
    setup(root) {
      applyItems(root, "#demo-accordion", accordionItems);
    },
  },
  Calendar: {
    description: "A month-view calendar for date selection.",
    preview: `<zm-calendar label="Reservation date"></zm-calendar>`,
  },
  Image: {
    description: "An inspectable image with description and accessible label.",
    preview: `<zm-image href="/favicon.png" label="Service image" description="Inspectable image content."></zm-image>`,
  },
  Carousel: {
    description: "A horizontally swipeable carousel of items with prev/next controls.",
    preview: `<zm-carousel id="demo-carousel"></zm-carousel>`,
    setup(root) {
      applyItems(root, "#demo-carousel", carouselItems);
    },
  },
  BarChart: {
    description: "A simple bar chart driven by a label/value data property.",
    preview: `<zm-bar-chart id="demo-chart"></zm-bar-chart>`,
    setup(root) {
      applyData(root, "#demo-chart", chartData);
    },
  },
  AccessibleMultimedia: {
    description:
      "A media block with transcript, alternative description, and accessibility helpers.",
    preview: dedent(`
      <zm-accessible-multimedia label="Accessible media" description="Transcript and alternative description live with media.">
        Transcript: This media explains the application process.
      </zm-accessible-multimedia>
    `),
  },
  VisuallyHidden: {
    description: "A container that is invisible to sight but read by assistive technology.",
    preview: `<zm-visually-hidden>Screen-reader only status text used for live regions.</zm-visually-hidden>`,
  },
  Section: {
    description: "A semantic content section with consistent vertical rhythm.",
    preview: dedent(`
      <zm-section>
        <zm-heading level="2" size="xl">Section title</zm-heading>
        <zm-paragraph tone="subtle">Content inside a section.</zm-paragraph>
      </zm-section>
    `),
  },
};

function defaultPreview(definition: ComponentDefinition): string {
  if ("label" in definition.attributes) {
    return `<${definition.tag} label="${humanize(definition.name)}"></${definition.tag}>`;
  }
  return `<${definition.tag}></${definition.tag}>`;
}

function getDocEntry(definition: ComponentDefinition): DocEntry {
  const entry = docs[definition.name];
  if (entry) return entry;
  return {
    description: `${humanize(definition.name)} component from the Zaemoru design system.`,
    preview: defaultPreview(definition),
  };
}

function renderApiReference(definition: ComponentDefinition): string {
  const reservedAttributes = new Set(["id", "class", "className", "slot", "title"]);
  const ownAttributes = Object.entries(definition.attributes).filter(
    ([attribute]) => !reservedAttributes.has(attribute),
  );
  const booleanAttributes = definition.booleanAttributes ?? [];
  const properties = definition.properties ?? [];
  const events = Object.entries(definition.events ?? {});

  const sections: Array<{ title: string; rows: Array<[string, string]> }> = [];
  if (ownAttributes.length > 0) {
    sections.push({
      title: "Attributes",
      rows: ownAttributes.map(([prop, attribute]) => [prop, attribute]),
    });
  }
  if (booleanAttributes.length > 0) {
    sections.push({
      title: "Boolean attributes",
      rows: booleanAttributes.map((attribute) => [attribute, "boolean"]),
    });
  }
  if (properties.length > 0) {
    sections.push({
      title: "Properties",
      rows: properties.map((property) => [property, "JS property"]),
    });
  }
  if (events.length > 0) {
    sections.push({
      title: "Events",
      rows: events.map(([reactName, customEvent]) => [reactName, customEvent]),
    });
  }

  if (sections.length === 0) {
    return `<p class="api-empty">No component-specific attributes or events.</p>`;
  }

  return sections
    .map(
      (section) => `
        <h3>${section.title}</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>React prop</th>
              <th>HTML attribute / event</th>
            </tr>
          </thead>
          <tbody>
            ${section.rows
              .map(
                ([reactName, attribute]) => `
                  <tr>
                    <td><code>${escapeHtml(reactName)}</code></td>
                    <td><code class="muted">${escapeHtml(attribute)}</code></td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      `,
    )
    .join("");
}

const root = document.querySelector<HTMLDivElement>("#app")!;
root.innerHTML = `
  <header class="topnav">
    <a class="logo" href="#/">zaemoru</a>
    <nav class="topnav-links">
      <a href="#/" data-nav="intro">Docs</a>
      <a href="#/components/${slugify(firstDefinition.name)}" data-nav="components">Components</a>
      <a href="#/installation" data-nav="installation">Installation</a>
    </nav>
    <div class="topnav-spacer"></div>
    <div class="topnav-meta">
      <span>${definitions.length} components</span>
    </div>
  </header>
  <div class="layout">
    <aside class="sidebar"></aside>
    <main class="content"></main>
  </div>
`;

const sidebarEl = root.querySelector<HTMLElement>(".sidebar")!;
const contentEl = root.querySelector<HTMLElement>(".content")!;

function renderSidebar(activeKey: string) {
  sidebarEl.innerHTML = `
    <div class="side-section">
      <h4>Getting Started</h4>
      <zm-side-navigation id="sidebar-getting-started" label="Getting Started"></zm-side-navigation>
    </div>
    <div class="side-section">
      <h4>Components</h4>
      <zm-side-navigation id="sidebar-components" label="Components"></zm-side-navigation>
    </div>
  `;

  applyItems(sidebarEl, "#sidebar-getting-started", [
    { label: "Introduction", href: "#/", current: activeKey === "intro" },
    { label: "Installation", href: "#/installation", current: activeKey === "installation" },
  ]);
  applyItems(
    sidebarEl,
    "#sidebar-components",
    definitions.map((definition) => {
      const slug = slugify(definition.name);
      return {
        label: humanize(definition.name),
        href: `#/components/${slug}`,
        current: slug === activeKey,
      };
    }),
  );
}

function setTopnavActive(key: "intro" | "components" | "installation") {
  root
    .querySelectorAll<HTMLAnchorElement>(".topnav-links a")
    .forEach((anchor) => anchor.classList.toggle("active", anchor.dataset.nav === key));
}

function wirePreviewMode(scope: HTMLElement) {
  const control = scope.querySelector<HTMLElement>("#preview-mode");
  if (!control) return;
  control.addEventListener("zm-change", (event) => {
    const value = (event as CustomEvent<{ value: string }>).detail.value;
    scope
      .querySelectorAll<HTMLElement>(".preview-panel")
      .forEach((panel) => panel.classList.toggle("hidden", panel.dataset.panel !== value));
  });
}

function renderIntro() {
  setTopnavActive("intro");
  renderSidebar("intro");
  contentEl.innerHTML = `
    <div class="intro-page">
      <section class="intro-hero" id="intro">
        <zm-badge class="intro-eyebrow" size="large" variant="weak" color="elephant">Framework-agnostic UI</zm-badge>
        <zm-heading class="intro-title" level="1" size="4xl">Design once, feel native everywhere.</zm-heading>
        <zm-paragraph class="intro-lead" size="lg" tone="subtle">
          Zaemoru places behavior, accessibility, and visual polish at the Web Component core. Thin adapters make that same interface feel natural across 12 frameworks.
        </zm-paragraph>
        <div class="stack-marquee" aria-label="Supported technology stacks">
          <div class="stack-track">
            ${stackIcons}
            <span class="stack-copy" aria-hidden="true">${stackIcons}</span>
          </div>
        </div>
        <div class="hero-actions">
          <zm-button id="intro-get-started" size="large">Get started</zm-button>
          <zm-button id="intro-browse-components" variant="secondary" size="large">Browse components</zm-button>
        </div>
      </section>

      <section class="intro-continuation" aria-label="Documentation overview">
        <a class="intro-link-card" href="#/installation">
          <zm-board-row
            eyebrow="Start"
            row-title="Install once"
            description="Register tokens and elements at the app boundary."
          ></zm-board-row>
        </a>
        <a class="intro-link-card" href="#/components/${slugify(firstDefinition.name)}">
          <zm-board-row
            eyebrow="Explore"
            row-title="${definitions.length} components"
            description="Preview behavior, props, events, and framework usage."
          ></zm-board-row>
        </a>
        <zm-board-row
          eyebrow="Adapters"
          row-title="One core, many frameworks"
          description="React gets typed wrappers; every other stack uses the same custom elements."
        ></zm-board-row>
      </section>

    </div>
  `;

  contentEl.querySelector("#intro-get-started")?.addEventListener("click", () => {
    location.hash = "#/installation";
  });
  contentEl.querySelector("#intro-browse-components")?.addEventListener("click", () => {
    location.hash = `#/components/${slugify(firstDefinition.name)}`;
  });
}

function renderInstallation() {
  setTopnavActive("installation");
  renderSidebar("installation");

  const blocks: Array<{ title: string; lines: string[] }> = [
    { title: "Install", lines: ["pnpm add @zaemoru/elements @zaemoru/tokens"] },
    { title: "Add tokens", lines: [`import "@zaemoru/tokens/index.css";`] },
    { title: "Register elements", lines: [`import "@zaemoru/elements";`] },
    {
      title: "Use anywhere",
      lines: [`<zm-button>Continue</zm-button>`, `<zm-text-field label="Name"></zm-text-field>`],
    },
    {
      title: "React",
      lines: [
        `import { Button, TextField } from "@zaemoru/react";`,
        ``,
        `<Button>Continue</Button>`,
        `<TextField label="Name" />`,
      ],
    },
  ];

  contentEl.innerHTML = `
    <div class="page">
      <zm-breadcrumb id="page-breadcrumb" label="Breadcrumb"></zm-breadcrumb>
      <zm-heading level="1" size="3xl">Installation</zm-heading>
      <zm-paragraph class="lead" size="lg" tone="subtle">
        Zaemoru ships as Web Components plus tokens. Install the two core packages and import them once at the entry of your app.
      </zm-paragraph>

      ${blocks
        .map(
          (block) => `
            <zm-heading class="page-section" level="2" size="xl">${block.title}</zm-heading>
            ${codeBlock(block.lines.join("\n"))}
          `,
        )
        .join("")}

      <zm-heading class="page-section" level="2" size="xl">Frameworks</zm-heading>
      <zm-paragraph tone="subtle">
        React users install <code>@zaemoru/react</code> for typed wrappers. Vue, Svelte, Angular, Solid, Qwik, and every other framework consume the Web Components directly &mdash; no extra runtime.
      </zm-paragraph>

      <div class="page-nav">
        <a href="#/" class="prev">
          <zm-board-row eyebrow="Previous" row-title="Introduction"></zm-board-row>
        </a>
        <a href="#/components/${slugify(firstDefinition.name)}" class="next">
          <zm-board-row eyebrow="Next" row-title="${humanize(firstDefinition.name)}"></zm-board-row>
        </a>
      </div>
    </div>
  `;

  applyItems(contentEl, "#page-breadcrumb", [
    { label: "Docs", href: "#/" },
    { label: "Installation", current: true },
  ]);
}

function getNeighbors(definition: ComponentDefinition) {
  const index = definitions.findIndex((entry) => entry.name === definition.name);
  return {
    previous: index > 0 ? definitions[index - 1] : null,
    next: index < definitions.length - 1 ? definitions[index + 1] : null,
  };
}

function renderComponentPage(definition: ComponentDefinition) {
  setTopnavActive("components");
  renderSidebar(slugify(definition.name));

  const entry = getDocEntry(definition);
  const previewMarkup = entry.preview.trim();
  const codeText = previewMarkup;
  const { previous, next } = getNeighbors(definition);

  const reactImport = `import { ${definition.name} } from "@zaemoru/react";`;

  contentEl.innerHTML = `
    <div class="page">
      <zm-breadcrumb id="page-breadcrumb" label="Breadcrumb"></zm-breadcrumb>
      <zm-heading level="1" size="3xl">${humanize(definition.name)}</zm-heading>
      <zm-paragraph class="lead" size="lg" tone="subtle">${entry.description}</zm-paragraph>

      <zm-segmented-control id="preview-mode" value="preview" full-width></zm-segmented-control>
      <div class="preview-panel" data-panel="preview">
        <div class="preview-stage">${previewMarkup}</div>
      </div>
      <div class="preview-panel hidden" data-panel="code">
        ${codeBlock(codeText, "html")}
      </div>

      <zm-heading class="page-section" level="2" size="xl">Usage</zm-heading>
      <zm-paragraph tone="subtle">Import the elements package once at your app entry to register <code>${definition.tag}</code>.</zm-paragraph>
      ${codeBlock(`import "@zaemoru/elements";`, "ts")}

      <zm-heading level="3" size="sm">React</zm-heading>
      <zm-paragraph tone="subtle">The React adapter exports a typed <code>${definition.name}</code> wrapper with camelCase props and React-style event callbacks.</zm-paragraph>
      ${codeBlock(reactImport, "ts")}

      <zm-heading class="page-section" level="2" size="xl">API Reference</zm-heading>
      ${renderApiReference(definition)}

      <div class="page-nav">
        ${
          previous
            ? `<a href="#/components/${slugify(previous.name)}" class="prev"><zm-board-row eyebrow="Previous" row-title="${humanize(previous.name)}"></zm-board-row></a>`
            : `<span></span>`
        }
        ${
          next
            ? `<a href="#/components/${slugify(next.name)}" class="next"><zm-board-row eyebrow="Next" row-title="${humanize(next.name)}"></zm-board-row></a>`
            : `<span></span>`
        }
      </div>
    </div>
  `;

  applyOptions(contentEl, "#preview-mode", [
    { value: "preview", label: "Preview" },
    { value: "code", label: "Code" },
  ]);
  wirePreviewMode(contentEl);
  applyItems(contentEl, "#page-breadcrumb", [
    { label: "Components", href: `#/components/${slugify(definitions[0]?.name ?? "")}` },
    { label: humanize(definition.name), current: true },
  ]);
  if (entry.setup) entry.setup(contentEl);
}

function renderNotFound(slug: string) {
  setTopnavActive("components");
  renderSidebar("intro");
  contentEl.innerHTML = `
    <div class="page">
      <zm-breadcrumb id="page-breadcrumb" label="Breadcrumb"></zm-breadcrumb>
      <zm-empty
        title="Component not found"
        description="${escapeAttr(`No component matched the URL "${slug}". Pick one from the sidebar to continue.`)}"
      >
        <zm-button slot="actions" id="not-found-back">Back to introduction</zm-button>
      </zm-empty>
    </div>
  `;

  contentEl.querySelector("#not-found-back")?.addEventListener("click", () => {
    location.hash = "#/";
  });

  applyItems(contentEl, "#page-breadcrumb", [
    { label: "Components", href: `#/components/${slugify(definitions[0]?.name ?? "")}` },
    { label: slug, current: true },
  ]);
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  if (!hash || hash === "/") {
    renderIntro();
    contentEl.scrollTop = 0;
    return;
  }
  if (hash === "installation") {
    renderInstallation();
    contentEl.scrollTop = 0;
    return;
  }
  if (hash.startsWith("components/")) {
    const slug = hash.slice("components/".length);
    const definition = definitions.find((entry) => slugify(entry.name) === slug);
    if (definition) {
      renderComponentPage(definition);
    } else {
      renderNotFound(slug);
    }
    contentEl.scrollTop = 0;
    return;
  }
  renderIntro();
}

window.addEventListener("hashchange", route);
route();
