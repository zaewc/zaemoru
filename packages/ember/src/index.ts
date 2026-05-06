import "@zaemoru/elements";
import {
  applyZaemoruProps,
  defineZaemoruElements,
  getZaemoruComponent,
  isZaemoruElement,
  toZaemoruAttributes,
  zaemoruComponents,
  zaemoruComponentTags,
} from "@zaemoru/elements";
import type {
  ZaemoruAdapterAttrs,
  ZaemoruAdapterProps,
  ZaemoruComponentDefinition,
  ZaemoruComponentName,
  ZaemoruElementTag,
} from "@zaemoru/elements";

export {
  applyZaemoruProps,
  defineZaemoruElements,
  getZaemoruComponent,
  isZaemoruElement,
  toZaemoruAttributes,
  zaemoruComponents,
  zaemoruComponentTags,
};
export type {
  ZaemoruAdapterAttrs,
  ZaemoruAdapterProps,
  ZaemoruComponentDefinition,
  ZaemoruComponentName,
  ZaemoruElementTag,
};

export const Agreement = zaemoruComponentTags.Agreement;
export const AlphabetKeypad = zaemoruComponentTags.AlphabetKeypad;
export const Asset = zaemoruComponentTags.Asset;
export const Badge = zaemoruComponentTags.Badge;
export const BarChart = zaemoruComponentTags.BarChart;
export const BoardRow = zaemoruComponentTags.BoardRow;
export const Border = zaemoruComponentTags.Border;
export const BottomCta = zaemoruComponentTags.BottomCta;
export const BottomInfo = zaemoruComponentTags.BottomInfo;
export const BottomSheet = zaemoruComponentTags.BottomSheet;
export const Bubble = zaemoruComponentTags.Bubble;
export const Button = zaemoruComponentTags.Button;
export const Card = zaemoruComponentTags.Card;
export const Checkbox = zaemoruComponentTags.Checkbox;
export const Dialog = zaemoruComponentTags.Dialog;
export const GridList = zaemoruComponentTags.GridList;
export const Heading = zaemoruComponentTags.Heading;
export const Highlight = zaemoruComponentTags.Highlight;
export const IconButton = zaemoruComponentTags.IconButton;
export const ListFooter = zaemoruComponentTags.ListFooter;
export const ListHeader = zaemoruComponentTags.ListHeader;
export const ListRow = zaemoruComponentTags.ListRow;
export const Loader = zaemoruComponentTags.Loader;
export const Menu = zaemoruComponentTags.Menu;
export const Modal = zaemoruComponentTags.Modal;
export const NumberKeypad = zaemoruComponentTags.NumberKeypad;
export const NumericSpinner = zaemoruComponentTags.NumericSpinner;
export const Paragraph = zaemoruComponentTags.Paragraph;
export const Post = zaemoruComponentTags.Post;
export const ProgressBar = zaemoruComponentTags.ProgressBar;
export const ProgressStepper = zaemoruComponentTags.ProgressStepper;
export const Rating = zaemoruComponentTags.Rating;
export const Result = zaemoruComponentTags.Result;
export const SearchField = zaemoruComponentTags.SearchField;
export const Section = zaemoruComponentTags.Section;
export const SecureKeypad = zaemoruComponentTags.SecureKeypad;
export const SegmentedControl = zaemoruComponentTags.SegmentedControl;
export const Skeleton = zaemoruComponentTags.Skeleton;
export const Slider = zaemoruComponentTags.Slider;
export const Spinner = zaemoruComponentTags.Spinner;
export const SplitTextField = zaemoruComponentTags.SplitTextField;
export const Stepper = zaemoruComponentTags.Stepper;
export const Switch = zaemoruComponentTags.Switch;
export const Tab = zaemoruComponentTags.Tab;
export const TableRow = zaemoruComponentTags.TableRow;
export const Text = zaemoruComponentTags.Text;
export const TextArea = zaemoruComponentTags.TextArea;
export const TextButton = zaemoruComponentTags.TextButton;
export const TextField = zaemoruComponentTags.TextField;
export const Toast = zaemoruComponentTags.Toast;
export const Tooltip = zaemoruComponentTags.Tooltip;
export const Top = zaemoruComponentTags.Top;
export const Masthead = zaemoruComponentTags.Masthead;
export const Identifier = zaemoruComponentTags.Identifier;
export const Header = zaemoruComponentTags.Header;
export const Footer = zaemoruComponentTags.Footer;
export const SkipLink = zaemoruComponentTags.SkipLink;
export const MainMenu = zaemoruComponentTags.MainMenu;
export const Breadcrumb = zaemoruComponentTags.Breadcrumb;
export const SideNavigation = zaemoruComponentTags.SideNavigation;
export const InPageNavigation = zaemoruComponentTags.InPageNavigation;
export const Pagination = zaemoruComponentTags.Pagination;
export const StructuredList = zaemoruComponentTags.StructuredList;
export const CriticalAlert = zaemoruComponentTags.CriticalAlert;
export const Calendar = zaemoruComponentTags.Calendar;
export const Disclosure = zaemoruComponentTags.Disclosure;
export const Accordion = zaemoruComponentTags.Accordion;
export const Image = zaemoruComponentTags.Image;
export const Carousel = zaemoruComponentTags.Carousel;
export const Table = zaemoruComponentTags.Table;
export const TextList = zaemoruComponentTags.TextList;
export const Favicon = zaemoruComponentTags.Favicon;
export const Link = zaemoruComponentTags.Link;
export const Fab = zaemoruComponentTags.Fab;
export const RadioButton = zaemoruComponentTags.RadioButton;
export const Select = zaemoruComponentTags.Select;
export const Tag = zaemoruComponentTags.Tag;
export const ToggleSwitch = zaemoruComponentTags.ToggleSwitch;
export const StepIndicator = zaemoruComponentTags.StepIndicator;
export const HelpPanel = zaemoruComponentTags.HelpPanel;
export const TutorialPanel = zaemoruComponentTags.TutorialPanel;
export const ContextualHelp = zaemoruComponentTags.ContextualHelp;
export const CoachMark = zaemoruComponentTags.CoachMark;
export const Tts = zaemoruComponentTags.Tts;
export const DateInput = zaemoruComponentTags.DateInput;
export const TextInput = zaemoruComponentTags.TextInput;
export const FileUpload = zaemoruComponentTags.FileUpload;
export const LanguageSwitcher = zaemoruComponentTags.LanguageSwitcher;
export const Resize = zaemoruComponentTags.Resize;
export const AccessibleMultimedia = zaemoruComponentTags.AccessibleMultimedia;
export const VisuallyHidden = zaemoruComponentTags.VisuallyHidden;
export const RangeSlider = zaemoruComponentTags.RangeSlider;
export const BackButton = zaemoruComponentTags.BackButton;
export const QuantityToggle = zaemoruComponentTags.QuantityToggle;
export const Snackbar = zaemoruComponentTags.Snackbar;
export const TabBars = zaemoruComponentTags.TabBars;
export const SplashScreen = zaemoruComponentTags.SplashScreen;

export const ZaemoruEmberComponents = zaemoruComponentTags;

export function initializeZaemoruEmber(application?: {
  register?: (name: string, value: unknown) => void;
}) {
  application?.register?.("config:zaemoru-components", ZaemoruEmberComponents);
}

export function resolveZaemoruEmberComponent(name: ZaemoruComponentName) {
  return zaemoruComponentTags[name];
}

export function createZaemoruEmberAttrs(
  name: ZaemoruComponentName,
  props: ZaemoruAdapterProps = {},
) {
  return toZaemoruAttributes(name, props);
}
