import { StyleSheet, ViewStyle } from "react-native";
import { RedPillThemeTypes } from "./types";
import { DefaultTheme } from "./default-theme";

type StyleFunction<T extends Record<string, ViewStyle>> = (
  theme: RedPillThemeTypes
) => T;

/**
 * Creates styles using the provided style function and theme.
 * @param {StyleFunction<T>} styleFunction - Function that generates styles based on the theme.
 * @param {RedPillThemeTypes} theme - Theme object to apply to the styles (optional).
 * @returns {T} - Created styles.
 */

export const createStyles = <T extends Record<string, ViewStyle>>(
  styleFunction: StyleFunction<T>,
  theme: RedPillThemeTypes = DefaultTheme
): T => {
  return StyleSheet.create(styleFunction(theme));
};
