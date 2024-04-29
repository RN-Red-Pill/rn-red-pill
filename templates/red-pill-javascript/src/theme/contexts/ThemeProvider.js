import React, { createContext, useContext, useMemo, useState } from "react";
import { DefaultTheme } from "../constants/default-theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useState(DefaultTheme.themeMode);

  const theme = useMemo(() => DefaultTheme, []);

  const values = {
    theme,
    colorScheme,
    setColorScheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
