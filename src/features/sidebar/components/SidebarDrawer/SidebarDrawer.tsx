"use client";

import { Box } from "@kodiui/ui";
import React from "react";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { sideBarOpen } from "./sidebarDrawer.css";
import { Layer } from "./Layer";
import { Products } from "./linkCategories";
import { ExtendContent } from "./ExtendContent";

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
        <div
          className={sideBarOpen({
            state,
          })}
        >
          <ExtendContent />
          <SidebarContent />
        </div>
      </Box>
      <Layer />
    </>
  );
};

const SidebarContent = () => {
  const { activeNavLink } = useSidebarStore();
  const contentByCategory = (): JSX.Element => {
    switch (activeNavLink) {
      case "Proizvodi":
        return <Products />;
      default:
        return <>Did not handle link</>;
    }
  };
  return (
    <Box
      position="absolute"
      width="full"
      height="full"
      zIndex="30"
      background="white"
      paddingTop="5xxl"
      p="md"
    >
      {contentByCategory()}
    </Box>
  );
};
