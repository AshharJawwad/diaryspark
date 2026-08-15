"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "./ui/button";

export const ModeToggle = () => {
  const { theme, setTheme } = useState();
  const [mounted, setMounted] = useState(false);

  //   Prevent Hydration

  // Modes
  const modes = [
    {
      value: "system",
      icon: Monitor,
      label: "System Mode",
    },
    {
      value: "light",
      icon: Sun,
      label: "Light Mode",
    },
    {
      value: "dark",
      icon: Moon,
      label: "Dark Mode",
    },
  ];

  return (
    <div className="flex items-center space-x-1 rounded-lg border bg-muted p-1 w-fit">
      {modes.map((mode) => {
        const IconComponent = mode.icon;
        const isActive = theme === mode.value;

        return (
          <Button
            key={mode.value}
            variant={isActive ? "default" : "ghost"}
            size="icon"
            onClick={() => setTheme(mode.value)}
            className={`h-7 w-9 rounded-md p-0 transition-all ${isActive ? "bg-background text-foreground shadow-sm hover:bg-background" : "text-muted-foreground hover:text-foreground"}`}
            aria-label={`Switch to ${mode.label} theme`}
          >
            <IconComponent className="h-5 w-5" />
          </Button>
        );
      })}
    </div>
  );
};
