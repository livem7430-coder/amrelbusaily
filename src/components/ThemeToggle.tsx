import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "amrelbusaily-theme";

function getSystemTheme(): Theme {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = saved === "light" || saved === "dark" ? saved : getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      title={isLight ? "Dark mode" : "Light mode"}
      className="fixed bottom-5 left-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/95 text-foreground shadow-lg backdrop-blur transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background md:bottom-6 md:left-6"
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      )}
      <span className="sr-only">{isLight ? "Switch to dark mode" : "Switch to light mode"}</span>
    </button>
  );
}
