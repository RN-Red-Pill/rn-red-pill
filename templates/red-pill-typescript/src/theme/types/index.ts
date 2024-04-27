export type RedPillSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type RadiusSizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export type LineHeightValues = Record<RedPillSizes | (string & {}), number>;
export type FontSizesValues = Record<RedPillSizes | (string & {}), number>;
export type RadiusValues = Record<RadiusSizes | (string & {}), number>;
export type SpacingValues = Record<RedPillSizes | (string & {}), number>;

export enum Radius {
  xs = 2,
  sm = 4,
  md = 8,
  lg = 16,
  xl = 32,
  full = 99,
}

// export type Radius = keyof RadiusValues | (string & {}) | number;
// export type Spacing = keyof SpacingValues | (string & {}) | number;

export interface RedPillThemeType {
  white: string;
  black: string;
  themeMode: "light" | "dark" | null | undefined;
  colors: DefaultColorsTypes;
  semantic: SemanticColors;
  primaryShade: { light: number; dark: number };
  primaryColor: string;
  fontFamilyMonospace: string;
  defaultRadius: string;
  headings: {
    fontWeight: string;
    textWrap: string;
    sizes: {
      h1: { fontSize: number; lineHeight: string };
      h2: { fontSize: number; lineHeight: string };
      h3: { fontSize: number; lineHeight: string };
      h4: { fontSize: number; lineHeight: string };
      h5: { fontSize: number; lineHeight: string };
      h6: { fontSize: number; lineHeight: string };
    };
  };
  fontSizes: FontSizesValues;
  lineHeights: LineHeightValues;
  radius: RadiusValues;
  spacing: SpacingValues;
  shadows: Record<string, never>;
  other: Record<string, never>;
  components: Record<string, never>;
}

export interface DefaultColorsTypes {
  [key: string]: string[];
  slate: string[];
  gray: string[];
  zinc: string[];
  neutral: string[];
  stone: string[];
  red: string[];
  orange: string[];
  amber: string[];
  yellow: string[];
  lime: string[];
  green: string[];
  emerald: string[];
  teal: string[];
  cyan: string[];
  sky: string[];
  blue: string[];
  indigo: string[];
  violet: string[];
  purple: string[];
  fuchsia: string[];
  pink: string[];
  rose: string[];
}

export type ColorSchemeName = "light" | "dark" | null | undefined;

export interface SemacticColorScheme {
  normal: string;
  hover?: string;
  subtle?: string;
  subtleHover?: string;
  focus?: string;
  active?: string;
  disabled?: string;
  muted?: string;
  invert?: string;
  raised?: string;
  link?: string;
}

export interface SemanticColors {
  primary: string;
  bg: {
    page: string;
    body: string;
    primary: SemacticColorScheme;
    success: SemacticColorScheme;
    warning: SemacticColorScheme;
    error: SemacticColorScheme;
    info: SemacticColorScheme;
    surface: SemacticColorScheme;
    strong: string;
    subtle: string;
    muted: string;
    input: SemacticColorScheme;
  };
  border: {
    primary: SemacticColorScheme;
    container: string;
    strong: string;
    subtle: string;
    inactive: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    input: SemacticColorScheme;
  };
  icon: {
    default: string;
    muted: string;
    inactive: string;
    neutral: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    secondary: string;
    tertiary: string;
    primary: SemacticColorScheme;
  };
  text: {
    body: string;
    secondary: string;
    subtle: string;
    muted: string;
    inactive: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    primary: SemacticColorScheme;
    input: SemacticColorScheme;
    on: {
      subtle: string;
      image: string;
      invert: string;
    };
  };
}
