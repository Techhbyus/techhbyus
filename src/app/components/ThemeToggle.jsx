"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
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
