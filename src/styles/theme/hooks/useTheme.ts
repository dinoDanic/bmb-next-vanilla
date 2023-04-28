"use client";

import { darkTheme, lightTheme, useThemeStore } from "@/styles";
import { useEffect } from "react";

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const activeTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, [setTheme]);

  return activeTheme;
};
