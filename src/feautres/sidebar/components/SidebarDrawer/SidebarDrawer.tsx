"use client";

import { Box } from "@kodiui/ui";
import React from "react";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { sideBarOpen } from "./sidebarDrawer.css";
import { Layer } from "./Layer";

export const SidebarDrawer = () => {
  const { activeNavLink } = useSidebarStore();

  const ifHaveActiveLink = activeNavLink !== undefined;

  const state = ifHaveActiveLink ? "active" : undefined;

  return (
    <>
      <Box
        width="full"
        position="absolute"
        left="0"
        height="screen"
        top="0"
        zIndex="20"
      >
        <Box
          className={sideBarOpen({
            state,
          })}
          height="full"
        ></Box>
      </Box>
      <Layer />
    </>
  );
};
