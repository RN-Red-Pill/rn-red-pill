import type React from "react";
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useMemo,
	useState,
} from "react";
import type { RedPillThemeType, ColorSchemeName } from "../types";
import { DefaultTheme } from "../constants/default-theme";

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

	const theme = useMemo(() => DefaultTheme, []);

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

export default ThemeContext;
