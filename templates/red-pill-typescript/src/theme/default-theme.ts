import { Appearance } from "react-native";
import { moderateScale } from "@utils/ScaleHelper";
import { DefaultColors, } from "./default-colors";
import { RedPillThemeType } from "./types";

const DefaultTheme: RedPillThemeType = {
  white: "#fff",
  black: "#000",
  themeMode: Appearance.getColorScheme(),
  colors: DefaultColors,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "indigo",
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  defaultRadius: "sm",
  headings: {
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: moderateScale(34), lineHeight: "1.3" },
      h2: { fontSize: moderateScale(26), lineHeight: "1.35" },
      h3: { fontSize: moderateScale(22), lineHeight: "1.4" },
      h4: { fontSize: moderateScale(18), lineHeight: "1.45" },
      h5: { fontSize: moderateScale(16), lineHeight: "1.5" },
      h6: { fontSize: moderateScale(14), lineHeight: "1.5" },
    },
  },
  fontSizes: {
    xs: moderateScale(12),
    sm: moderateScale(14),
    md: moderateScale(16),
    lg: moderateScale(18),
    xl: moderateScale(20),
  },
  lineHeights: {
    xs: moderateScale(1.4),
    sm: moderateScale(1.45),
    md: moderateScale(1.55),
    lg: moderateScale(1.6),
    xl: moderateScale(1.65),
  },
  radius: {
    xs: moderateScale(2),
    sm: moderateScale(4),
    md: moderateScale(8),
    lg: moderateScale(16),
    xl: moderateScale(32),
    full: 9999,
  },
  spacing: {
    xs: moderateScale(10),
    sm: moderateScale(12),
    md: moderateScale(16),
    lg: moderateScale(20),
    xl: moderateScale(32),
  },
  shadows: {},
  other: {},
  components: {},
};

export { DefaultTheme };
