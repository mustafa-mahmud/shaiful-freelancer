import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "sf-theme-preference";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem(STORAGE_KEY) === "dark";
    } catch {
      // localStorage unavailable
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // localStorage unavailable
    }
    try {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", dark ? "#0f172a" : "#f8fafc");
    } catch {
      // meta unavailable
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      const root = document.documentElement;
      if (next) root.classList.add("dark");
      else root.classList.remove("dark");
      try {
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {
        // localStorage unavailable
      }
      try {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", next ? "#0f172a" : "#f8fafc");
      } catch {
        // meta unavailable
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
