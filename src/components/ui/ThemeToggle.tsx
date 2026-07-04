"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) || "dark";
    // Deliberately reading localStorage post-mount, not via a lazy useState
    // initializer: the initializer would run during SSR too (no localStorage,
    // would crash) and desync the server-rendered "dark" default from the
    // client's real preference, causing a hydration mismatch. The one-frame
    // flicker here is the intentional trade-off.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button className="theme-toggle" type="button" aria-label="Toggle light/dark mode" onClick={toggle}>
      {theme === "dark"
        ? <Sun size={15} aria-hidden="true" />
        : <Moon size={15} aria-hidden="true" />}
    </button>
  );
}
