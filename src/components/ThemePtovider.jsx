"use client";
import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children, ...props }) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
