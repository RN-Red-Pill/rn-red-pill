import { StyleSheet } from "react-native";
import { DefaultTheme } from "../constants/default-theme";

/**
 * Creates styles using the provided style function and theme.
 * @param {Function} styleFunction - Function that generates styles based on the theme.
 * @param {Object} theme - Theme object to apply to the styles (optional).
 * @returns {Object} - Created styles.
 */

export const createStyles = (styleFunction, theme = DefaultTheme) =>
  StyleSheet.create(styleFunction(theme));
