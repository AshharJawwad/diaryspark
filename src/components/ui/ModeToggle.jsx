"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom hook to detect client-side mounting without setState in useEffect
function useMounted() {
  return React.useSyncExternalStore(
    () => () => {}, // No-op subscribe
    () => true,     // Client snapshot
    () => false     // Server snapshot
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  // Return a placeholder button of identical dimensions during SSR/initial hydration
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme" disabled>
        <span className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  // Cycle order: light -> dark -> system -> light
  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getLabel = () => {
    if (theme === "light") return "Light mode";
    if (theme === "dark") return "Dark mode";
    return "System mode";
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      title={getLabel()}
      aria-label={getLabel()}
      className="relative overflow-hidden md:rounded-full transition-colors"
    >
      {/* Light Mode Icon (Sun) */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out text-amber-500 ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />

      {/* Dark Mode Icon (Moon) */}
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out text-blue-500 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0 absolute"
        }`}
      />

      {/* System Mode Icon (Laptop/Monitor) */}
      <Laptop
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out text-emerald-500 ${
          theme === "system"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-180 scale-0 opacity-0 absolute"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}