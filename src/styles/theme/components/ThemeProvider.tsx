"use client";

import React, { FC, PropsWithChildren } from "react";
import { Noto_Sans } from "next/font/google";

import "@kodiui/ui/style.css";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";

const roboto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <body className={classNames(roboto.className, theme)}>{children}</body>
  );
};
