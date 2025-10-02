import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const themes = ["light", "dark"];

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center p-px rounded-3xl
                    bg-black/[0.06] dark:bg-white/10
                    backdrop-blur-[30px] backdrop-saturate-150
                    border border-[#5C6A72]/40 dark:border-white/30
                    supports-backdrop-filter:backdrop-blur-[30px]
                    supports-[-webkit-backdrop-filter]:[-webkit-backdrop-blur-[30px]]">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`group relative isolate ${
              checked
                ? "bg-white/80 dark:bg-white/20 ring-1 ring-black/10 dark:ring-white/30 shadow-sm"
                : "bg-transparent"
            } cursor-pointer rounded-3xl p-2 transition-all duration-200
               hover:bg-white/30 dark:hover:bg-white/10 transform-gpu
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:focus-visible:ring-white/30`}
            onClick={toggleTheme}
            aria-label={`Switch to ${t === "light" ? "light" : "dark"} theme`}
            aria-pressed={checked}
            type="button"
          >
            {checked && <span aria-hidden className="glossy-knob absolute inset-0 rounded-3xl" />}
            {t === "light" ? (
              <IoSunny className="relative z-10 text-everforest-yellow dark:text-everforest-yellow" />
            ) : (
              <IoMoon className="relative z-10 text-everforest-blue dark:text-everforest-blue" />
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
