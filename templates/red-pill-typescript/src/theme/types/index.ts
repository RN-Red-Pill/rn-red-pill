export interface RedPillThemeTypes {
  white: string;
  black: string;
  themeMode: 'light' | 'dark' | null | undefined;
  colors: DefaultColorsTypes;
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
  fontSizes: { [key: string]: number };
  lineHeights: { [key: string]: string };
  radius: { [key: string]: number };
  spacing: { [key: string]: number };
  shadows: Record<string, never>;
  other: Record<string, never>;
  components: Record<string, never>;
}

export interface DefaultColorsTypes {
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
