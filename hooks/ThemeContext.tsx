import React, { useContext, useState } from "react";

export enum Theme {
  DarkMode = "darkmode",
  LightMode = "lightmode",
}

type ThemeContextType = {
  value: Theme;
  toggle: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  value: Theme.LightMode,
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState(Theme.LightMode);
  function toggleTheme() {
    if (activeTheme === Theme.LightMode) {
      setActiveTheme(Theme.DarkMode);
    } else {
      setActiveTheme(Theme.LightMode);
    }
  }
  const style = activeTheme === Theme.DarkMode ? "dark" : "";
  return (
    <ThemeContext.Provider value={{ value: activeTheme, toggle: toggleTheme }}>
      <div className={style}>{children}</div>
    </ThemeContext.Provider>
  );
}
