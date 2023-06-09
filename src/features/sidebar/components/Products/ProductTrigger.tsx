"use client";

import { Text } from "@/components";
import { useSidebarStore } from "@/features/sidebar";
import { Box } from "@kodiui/ui";
import { FC } from "react";

export const ProductTrigger: FC = () => {
  const { isSidebarActive, setSidebarActive } = useSidebarStore();

  const color = isSidebarActive ? "brand" : "black";

  return (
    <Box
      position="relative"
      zIndex="40"
      onMouseEnter={() => setSidebarActive(true)}
      cursor="pointer"
    >
      <Text weight="medium" size="small" color={color}>
        Proizvodi
      </Text>
    </Box>
  );
};
