"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/60 bg-slate-900/60 px-2.5 py-1 text-[10px] font-medium text-slate-100 shadow-sm backdrop-blur-md transition hover:border-slate-300/70 hover:text-slate-50 data-[mode=light]:bg-slate-100 data-[mode=light]:text-slate-900"
      data-mode={theme}
    >
      <span
        className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-[9px] text-slate-900 data-[mode=light]:bg-slate-900 data-[mode=light]:text-slate-100"
        data-mode={theme}
      >
        {isDark ? "☾" : "☼"}
      </span>
      <span>{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
}


