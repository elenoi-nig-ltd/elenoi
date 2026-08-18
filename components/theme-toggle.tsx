"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="size-10" aria-hidden="true" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="grid size-10 place-items-center border border-black/10 text-slate-700 transition hover:border-elenoi-green hover:text-elenoi-green dark:border-white/15 dark:text-slate-200 dark:hover:border-elenoi-green-light dark:hover:text-elenoi-green-light"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
