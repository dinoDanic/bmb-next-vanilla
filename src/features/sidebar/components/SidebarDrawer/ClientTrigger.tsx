"use client";

import { Box } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";
import { sideBarOpen } from "./sidebarDrawer.css";
import { useSidebarStore } from "../../stores/useSidebarStore";

export const ClientTrigger: FC<PropsWithChildren> = ({ children }) => {
  const { isSidebarActive } = useSidebarStore();

  const state = isSidebarActive ? "active" : undefined;

  return (
    <Box
      width="full"
      position="absolute"
      __left="-105%"
      height="screen"
      top="0"
      zIndex="20"
    >
      <div
        className={sideBarOpen({
          state,
        })}
      >
        {children}
      </div>
    </Box>
  );
};
