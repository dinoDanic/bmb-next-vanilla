"use client";

import { Box, Stack } from "@kodiui/ui";
import React, { FC } from "react";
import { extendContentRecipe } from "./extendContent.css";
import { Category } from "@/gql/graphql";
import { useSidebarStore } from "@/features/sidebar";
import { Text, TextLink } from "@/components";

export const DisplayContent: FC<{ childCategories: Category[] }> = ({
  childCategories,
}) => {
  const { activeCategory } = useSidebarStore();

  const categories = childCategories.filter(
    (c) => c.parentId === activeCategory?.id
  );

  return (
    <Box
      paddingTop="5xxl"
      gap="xl"
      overflow="auto"
      className={extendContentRecipe({
        visibility: activeCategory ? "visible" : "hidden",
      })}
    >
      <Box paddingTop="2xl" />
      <Stack gap="xl">
        {categories?.map((c) => (
          <Text
            // textAlign="center"
            size="small"
            color={{ hover: "brand", dark: "gray12" }}
            key={c.id}
            weight="medium"
          >
            <TextLink href="#">
              {/* <Center> */}
              {/*   <Flame /> */}
              {/* </Center> */}
              {c.name}
            </TextLink>
          </Text>
        ))}
      </Stack>
    </Box>
  );
};
