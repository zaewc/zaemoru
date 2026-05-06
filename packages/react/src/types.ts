import type { ReactNode, CSSProperties, Ref, MouseEvent } from "react";

export type CommonProps = {
  className?: string;
  style?: CSSProperties;
  id?: string;
  children?: ReactNode;
};

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  type?: ButtonType;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  ref?: Ref<HTMLElement>;
}

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";
export type TextTone = "default" | "subtle" | "muted" | "primary" | "danger";

export interface TextProps extends CommonProps {
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
}

export type HeadingLevel = "1" | "2" | "3" | "4";
export type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export interface HeadingProps extends CommonProps {
  level?: HeadingLevel;
  size?: HeadingSize;
}

export type CardElevation = "flat" | "low" | "medium" | "high";
export type CardPadding = "none" | "small" | "medium" | "large";

export interface CardProps extends CommonProps {
  elevation?: CardElevation;
  padding?: CardPadding;
}

export type BadgeVariant = "fill" | "weak";
export type BadgeSize = "xsmall" | "small" | "medium" | "large";
export type BadgeColor = "blue" | "teal" | "green" | "red" | "yellow" | "elephant";

export interface BadgeProps extends CommonProps {
  variant: BadgeVariant;
  size: BadgeSize;
  color: BadgeColor;
}

export type TextFieldType = "text" | "email" | "password" | "search" | "tel" | "url" | "number";

export type TextFieldSize = "small" | "medium" | "large";

export interface TextFieldProps extends Omit<CommonProps, "children"> {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: TextFieldType;
  size?: TextFieldSize;
  disabled?: boolean;
  invalid?: boolean;
  helperText?: string;
  errorMessage?: string;
  name?: string;
  autoComplete?: string;
  onChange?: (value: string, event: CustomEvent<{ value: string }>) => void;
  onInput?: (value: string, event: CustomEvent<{ value: string }>) => void;
  ref?: Ref<HTMLElement>;
}

export interface CheckboxProps extends CommonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  label?: string;
  onChange?: (checked: boolean, event: CustomEvent<{ checked: boolean; value: string }>) => void;
  ref?: Ref<HTMLElement>;
}

export interface SwitchProps extends CommonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  onChange?: (checked: boolean, event: CustomEvent<{ checked: boolean }>) => void;
  ref?: Ref<HTMLElement>;
}

export interface ListRowProps extends CommonProps {
  title?: string;
  description?: string;
  interactive?: boolean;
  chevron?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export type SectionGap = "none" | "small" | "medium" | "large";

export interface SectionProps extends CommonProps {
  title?: string;
  description?: string;
  gap?: SectionGap;
  action?: ReactNode;
}

export type SpinnerSize = "small" | "medium" | "large";
export type SpinnerTone = "default" | "primary" | "on-primary";

export interface SpinnerProps extends CommonProps {
  size?: SpinnerSize;
  tone?: SpinnerTone;
  label?: string;
}

export type TextButtonTone = "primary" | "neutral" | "danger";
export type TextButtonSize = "small" | "medium";

export interface TextButtonProps extends CommonProps {
  tone?: TextButtonTone;
  size?: TextButtonSize;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export type IconButtonVariant = "ghost" | "subtle" | "solid";
export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps extends CommonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export type ParagraphSize = "sm" | "md" | "lg";
export type ParagraphTone = "default" | "subtle" | "muted";

export interface ParagraphProps extends CommonProps {
  size?: ParagraphSize;
  tone?: ParagraphTone;
}

export type HighlightTone = "primary" | "success" | "warning" | "danger";

export interface HighlightProps extends CommonProps {
  tone?: HighlightTone;
}

export interface GridListProps extends CommonProps {
  columns?: number;
  gap?: "small" | "medium" | "large";
}

export type BottomInfoTone = "default" | "primary" | "warning" | "danger";

export interface BottomInfoProps extends CommonProps {
  tone?: BottomInfoTone;
  icon?: ReactNode;
}

export type ProgressTone = "primary" | "success" | "warning" | "danger";
export type ProgressSize = "small" | "medium";

export interface ProgressBarProps extends Omit<CommonProps, "children"> {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  tone?: ProgressTone;
  size?: ProgressSize;
}

export interface ProgressStepperProps extends Omit<CommonProps, "children"> {
  value?: number;
  total?: number;
}

export type SkeletonShape = "rect" | "circle" | "text";

export interface SkeletonProps extends Omit<CommonProps, "children"> {
  shape?: SkeletonShape;
  width?: string;
  height?: string;
}

export type ResultTone = "neutral" | "success" | "warning" | "danger";

export interface ResultProps extends CommonProps {
  tone?: ResultTone;
  title?: string;
  description?: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

export interface BottomSheetProps extends CommonProps {
  open?: boolean;
  title?: string;
  closeOnBackdrop?: boolean;
  onClose?: (event: CustomEvent) => void;
}

export type BubbleTone = "neutral" | "primary" | "success" | "warning" | "danger";
export type BubblePlacement = "start" | "end";

export interface BubbleProps extends CommonProps {
  tone?: BubbleTone;
  placement?: BubblePlacement;
}

export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps extends CommonProps {
  size?: LoaderSize;
  label?: string;
}

export interface MenuItem {
  value: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
}

export interface MenuProps extends CommonProps {
  items?: MenuItem[];
  onSelect?: (value: string, event: CustomEvent<{ value: string; item: MenuItem }>) => void;
}

export interface ModalProps extends CommonProps {
  open?: boolean;
  title?: string;
  description?: string;
  closeOnBackdrop?: boolean;
  actions?: ReactNode;
  onClose?: (event: CustomEvent) => void;
}

export interface NumericSpinnerProps extends Omit<CommonProps, "children"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number, event: CustomEvent<{ value: number }>) => void;
}

export interface PostProps extends CommonProps {
  title?: string;
  description?: string;
  meta?: string;
}

export type ToastTone = "default" | "success" | "warning" | "danger";

export interface ToastProps extends CommonProps {
  tone?: ToastTone;
  action?: ReactNode;
}

export type TooltipPlacement = "top" | "bottom";

export interface TooltipProps extends CommonProps {
  text?: string;
  placement?: TooltipPlacement;
  open?: boolean;
  content?: ReactNode;
}

export interface AgreementProps extends CommonProps {
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean, event: CustomEvent<{ checked: boolean }>) => void;
}

export type AssetShape = "rounded" | "circle" | "square";

export interface AssetProps extends CommonProps {
  src?: string;
  alt?: string;
  shape?: AssetShape;
}

export type BottomCtaLayout = "single" | "double";

export interface BottomCtaProps extends CommonProps {
  layout?: BottomCtaLayout;
  fixed?: boolean;
}

export interface BarChartDatum {
  label: string;
  value: number;
}

export interface BarChartProps extends CommonProps {
  data?: BarChartDatum[];
}

export type DialogKind = "alert" | "confirm";

export interface DialogProps extends CommonProps {
  open?: boolean;
  kind?: DialogKind;
  title?: string;
  description?: string;
  onClose?: (event: CustomEvent) => void;
  onCancel?: (event: CustomEvent) => void;
  onConfirm?: (event: CustomEvent) => void;
}

export interface SplitTextFieldProps extends Omit<CommonProps, "children"> {
  parts?: number;
  placeholder?: string;
  onChange?: (value: string, event: CustomEvent<{ values: string[]; value: string }>) => void;
}

export interface KeypadProps extends Omit<CommonProps, "children"> {
  showSubmit?: boolean;
  onKey?: (value: string, event: CustomEvent<{ value: string }>) => void;
}

export type TopVariant = "default" | "transparent";

export interface TopProps extends CommonProps {
  title?: string;
  subtitle?: string;
  variant?: TopVariant;
  align?: "start" | "center";
  sticky?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export type TableRowAlign = "start" | "center" | "end";

export interface TableRowProps extends CommonProps {
  label?: string;
  value?: string;
  emphasis?: boolean;
  align?: TableRowAlign;
}

export interface BoardRowProps extends CommonProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  interactive?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export interface ListHeaderProps extends CommonProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export interface ListFooterProps extends CommonProps {
  description?: string;
  action?: ReactNode;
}

export interface TabItem {
  value: string;
  label: string;
  badge?: string;
  disabled?: boolean;
}

export type TabVariant = "underline" | "filled";

export interface TabProps extends Omit<CommonProps, "children"> {
  items: TabItem[];
  value?: string;
  variant?: TabVariant;
  fullWidth?: boolean;
  onChange?: (value: string, event: CustomEvent<{ value: string }>) => void;
}

export interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps extends Omit<CommonProps, "children"> {
  options: SegmentedOption[];
  value?: string;
  fullWidth?: boolean;
  onChange?: (value: string, event: CustomEvent<{ value: string }>) => void;
}

export interface RatingProps extends Omit<CommonProps, "children"> {
  value?: number;
  defaultValue?: number;
  max?: number;
  size?: "small" | "medium" | "large";
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (value: number, event: CustomEvent<{ value: number }>) => void;
}

export interface SliderProps extends Omit<CommonProps, "children"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  name?: string;
  onInput?: (value: number, event: CustomEvent<{ value: number }>) => void;
  onChange?: (value: number, event: CustomEvent<{ value: number }>) => void;
}

export interface StepperProps extends Omit<CommonProps, "children"> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number, event: CustomEvent<{ value: number }>) => void;
}

export interface SearchFieldProps extends Omit<CommonProps, "children"> {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  onInput?: (value: string, event: CustomEvent<{ value: string }>) => void;
  onChange?: (value: string, event: CustomEvent<{ value: string }>) => void;
  onClear?: () => void;
}

export interface TextAreaProps extends Omit<CommonProps, "children"> {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
  invalid?: boolean;
  helperText?: string;
  errorMessage?: string;
  name?: string;
  onInput?: (value: string, event: CustomEvent<{ value: string }>) => void;
  onChange?: (value: string, event: CustomEvent<{ value: string }>) => void;
}

export type BorderOrientation = "horizontal" | "vertical";
export type BorderTone = "subtle" | "default" | "strong";

export interface BorderProps extends Omit<CommonProps, "children"> {
  orientation?: BorderOrientation;
  tone?: BorderTone;
  thick?: boolean;
}

export interface KrdsComponentProps extends CommonProps {
  label?: string;
  description?: string;
  href?: string;
  value?: string | number;
  disabled?: boolean;
  checked?: boolean;
  open?: boolean;
  items?: Array<{
    label: string;
    value?: string;
    href?: string;
    description?: string;
    current?: boolean;
    disabled?: boolean;
  }>;
  min?: number;
  max?: number;
  current?: number;
  [key: string]: unknown;
}
