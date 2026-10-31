import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function subscribe(onChange: () => void) {
  window.addEventListener("portfolio:theme", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("portfolio:theme", onChange);
    window.removeEventListener("storage", onChange);
  };
}

const getSnapshot = () => document.documentElement.dataset.theme === "dark";
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#070709" : "#ffffff");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Storage may be unavailable. */
    }
    window.dispatchEvent(new Event("portfolio:theme"));
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="theme-toggle"
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <svg
        className="moon"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <svg
        className="sun"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
    </Button>
  );
}
