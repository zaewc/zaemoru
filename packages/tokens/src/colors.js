const grey = Object.freeze({
  grey50: "#f9fafb",
  grey100: "#f2f4f6",
  grey200: "#e5e8eb",
  grey300: "#d1d6db",
  grey400: "#b0b8c1",
  grey500: "#8b95a1",
  grey600: "#6b7684",
  grey700: "#4e5968",
  grey800: "#333d4b",
  grey900: "#191f28",
});

const blue = Object.freeze({
  blue50: "#e8f1fe",
  blue100: "#cfe3ff",
  blue200: "#9ec8ff",
  blue300: "#6dacff",
  blue400: "#4f97fa",
  blue500: "#3182f6",
  blue600: "#2272eb",
  blue700: "#1b64da",
  blue800: "#1957c2",
  blue900: "#194aa6",
});

const red = Object.freeze({
  red50: "#fff1f2",
  red100: "#ffe1e4",
  red200: "#ffc4ca",
  red300: "#fb8890",
  red400: "#f66570",
  red500: "#f04452",
  red600: "#e42939",
  red700: "#d22030",
  red800: "#bc1b2a",
  red900: "#a51926",
});

const orange = Object.freeze({
  orange50: "#fff4e5",
  orange100: "#ffe4bd",
  orange200: "#ffd091",
  orange300: "#ffbd64",
  orange400: "#ffac3d",
  orange500: "#ff9800",
  orange600: "#f08a00",
  orange700: "#df7800",
  orange800: "#c96500",
  orange900: "#ad5200",
});

const yellow = Object.freeze({
  yellow50: "#fff9e7",
  yellow100: "#ffefbf",
  yellow200: "#ffe69b",
  yellow300: "#ffdd78",
  yellow400: "#ffd158",
  yellow500: "#ffc342",
  yellow600: "#ffb331",
  yellow700: "#faa131",
  yellow800: "#ee8f11",
  yellow900: "#dd7d02",
});

const green = Object.freeze({
  green50: "#ecfbf4",
  green100: "#c8f5df",
  green200: "#94eac2",
  green300: "#5cdda2",
  green400: "#2dcc85",
  green500: "#00c471",
  green600: "#00a967",
  green700: "#008f5a",
  green800: "#00764d",
  green900: "#005f40",
});

const teal = Object.freeze({
  teal50: "#edfafa",
  teal100: "#c7eeee",
  teal200: "#93dede",
  teal300: "#62cdcd",
  teal400: "#36baba",
  teal500: "#18a5a5",
  teal600: "#109595",
  teal700: "#0c8585",
  teal800: "#097575",
  teal900: "#076565",
});

const purple = Object.freeze({
  purple50: "#faf0ff",
  purple100: "#efd3ff",
  purple200: "#dda6f7",
  purple300: "#c979ed",
  purple400: "#b755df",
  purple500: "#a234c7",
  purple600: "#9128b4",
  purple700: "#8222a2",
  purple800: "#73228e",
  purple900: "#65237b",
});

export const colorGroups = Object.freeze({
  grey,
  blue,
  red,
  orange,
  yellow,
  green,
  teal,
  purple,
});

export const colors = Object.freeze({
  ...grey,
  ...blue,
  ...red,
  ...orange,
  ...yellow,
  ...green,
  ...teal,
  ...purple,

  primary: blue.blue500,
  primaryHover: blue.blue700,
  primaryPressed: blue.blue800,
  primarySubtle: blue.blue50,
  onPrimary: "#ffffff",

  success: green.green500,
  warning: orange.orange500,
  danger: red.red500,
  dangerHover: red.red700,
  info: blue.blue500,

  background: "#ffffff",
  greyBackground: grey.grey100,
  layeredBackground: "#ffffff",
  floatedBackground: "#ffffff",
  surface: "#ffffff",
  surfaceRaised: "#ffffff",

  text: grey.grey900,
  textStrong: "#0d1117",
  textSubtle: grey.grey700,
  textMuted: grey.grey500,
  textDisabled: grey.grey400,
  textOnPrimary: "#ffffff",
  textDanger: red.red500,

  border: grey.grey200,
  borderStrong: grey.grey300,
  borderSubtle: "#eef0f2",
  borderFocus: blue.blue500,
  borderDanger: red.red500,
});

export const colorCssVars = Object.freeze(
  Object.fromEntries(
    Object.keys(colors).map((name) => [
      name,
      `var(--zm-color-${name
        .replace(/([a-z])(\d)/g, "$1-$2")
        .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)})`,
    ]),
  ),
);
