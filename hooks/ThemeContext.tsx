import React, { useContext, useEffect, useState } from "react";

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
  const [activeTheme, setActiveTheme] = useState<Theme>(Theme.LightMode);

  useEffect(() => {
    const systemTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme.DarkMode
        : Theme.LightMode;

    const sessionTheme = sessionStorage.getItem("theme");
    if (sessionTheme === Theme.LightMode || sessionTheme === Theme.DarkMode) {
      setActiveTheme(sessionTheme);
    } else {
      setActiveTheme(systemTheme);
    }
  }, []);

  function toggleTheme() {
    if (activeTheme === Theme.LightMode) {
      setActiveTheme(Theme.DarkMode);
      sessionStorage.setItem("theme", Theme.DarkMode);
    } else {
      setActiveTheme(Theme.LightMode);
      sessionStorage.setItem("theme", Theme.LightMode);
    }
  }
  const style = activeTheme === Theme.DarkMode ? "dark" : "";
  return (
    <ThemeContext.Provider value={{ value: activeTheme, toggle: toggleTheme }}>
      <div className={style}>{children}</div>
    </ThemeContext.Provider>
  );
}
