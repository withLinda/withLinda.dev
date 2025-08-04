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
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-white/20 dark:bg-white/10 backdrop-blur-xl backdrop-saturate-150 border border-[#5C6A72]/40 dark:border-white/30 supports-[backdrop-filter]:backdrop-blur-xl supports-[-webkit-backdrop-filter]:[-webkit-backdrop-blur-xl]">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked
                ? "bg-white/30 dark:bg-white/20"
                : "bg-transparent"
            } cursor-pointer rounded-3xl p-2 transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10 transform-gpu`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? (
              <IoSunny className="text-solarized-yellow dark:text-nightowl-yellow" />
            ) : (
              <IoMoon className="text-[#2b6cb0] dark:text-nightowl-blue" />
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
