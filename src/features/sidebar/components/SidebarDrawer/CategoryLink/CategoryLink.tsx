"use client";

import { Category } from "@/gql/graphql";
import React, { FC } from "react";
import { useSidebarStore } from "@/features/sidebar";
import { Text, TextLink } from "@/components";
import { Split } from "@kodiui/ui";
import { ChevronRight } from "@/assets";

export const CategoryLink: FC<Category> = (category) => {
  const { activeCategory, setActiveCategory } = useSidebarStore();

  const onHover = () => setActiveCategory(category);

  const isActive = activeCategory?.id === category.id;

  const activeColor = isActive ? "brand" : "black";

  return (
    <Text
      weight="medium"
      color={{ hover: "brand", light: activeColor, dark: activeColor }}
    >
      <Split onMouseEnter={onHover}>
        <TextLink href={"#"}>{category.name}</TextLink>
        <ChevronRight />
      </Split>
    </Text>
  );
};
