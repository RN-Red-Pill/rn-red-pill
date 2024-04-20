import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { RedPillThemeType } from "../types";
import { DefaultTheme } from "../constants/default-theme";

type StyleFunction<T extends Record<string, ViewStyle>> = (
  theme: RedPillThemeType
) => T;

/**
 * Creates styles using the provided style function and theme.
 * @param {StyleFunction<T>} styleFunction - Function that generates styles based on the theme.
 * @param {RedPillThemeType} theme - Theme object to apply to the styles (optional).
 * @returns {T} - Created styles.
 */

export const createStyles = <T extends Record<string, ViewStyle | TextStyle>>(
  styleFunction: StyleFunction<T>,
  theme: RedPillThemeType = DefaultTheme
): T => {
  return StyleSheet.create(styleFunction(theme));
};
