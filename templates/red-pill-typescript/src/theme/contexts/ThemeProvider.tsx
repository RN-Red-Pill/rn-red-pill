import type React from "react";
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useMemo,
	useState,
} from "react";
import type { RedPillThemeType, ColorSchemeName, DefaultColorsTypes } from "../types";
import { DefaultTheme } from "../constants/default-theme";
import { Appearance, StyleSheet } from "react-native";
import { LightTheme } from "../constants/semantic-colors/light";
import { DarkTheme } from "../constants/semantic-colors/dark";

interface ThemeProviderProps {
	children: React.ReactNode;
}

interface ThemeContextType {
	theme: RedPillThemeType;
	colorScheme: ColorSchemeName;
	setColorScheme: Dispatch<SetStateAction<ColorSchemeName>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
		DefaultTheme.themeMode,
	);

	const theme = useMemo(() => {
		DefaultTheme.semantic =
		  colorScheme === "light" ? LightTheme() : DarkTheme();
		return DefaultTheme;
	  }, [colorScheme]);
	

	const values: ThemeContextType = {
		theme,
		colorScheme,
		setColorScheme,
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
}

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles:
      | T
      | ((
          theme: {
            colors: DefaultColorsTypes;
          } & RedPillThemeType,
          props: V
        ) => T)
  ) =>
  (props?: V): T => {
    const { theme } = useTheme();

	const css =
	  typeof styles === 'function'
		? styles(theme, props ?? ({} as any))
		: styles;
	return StyleSheet.create(css);
  };

export default ThemeContext;
