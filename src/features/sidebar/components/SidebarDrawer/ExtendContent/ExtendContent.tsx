import { categoryLinks, useSidebarStore } from "@/features/sidebar";
import React, { FC } from "react";
import { extendContentRecipe } from "./extendContent.css";
import { MenuLinkChild } from "../../MenuLink";
import { Box, FlexBox, Stack } from "@kodiui/ui";
import { Text, TextLink } from "@/components";
import { Flame } from "@/assets";

export const ExtendContent = () => {
  const { activeCategoryLink, activeNavLink } = useSidebarStore();

  const hasCategory =
    activeCategoryLink !== undefined && activeCategoryLink.children;

  const hasNavLineActive = activeNavLink !== undefined;

  const visible = hasCategory ? "visible" : "hidden";

  const visibility = hasNavLineActive ? visible : "none";

  const generateArray = () => {
    switch (activeCategoryLink?.belongsTo) {
      case "Proizvodi":
        return categoryLinks.find((c) => c.name === activeCategoryLink?.name);
      default:
        return undefined;
    }
  };

  return (
    <Box
      paddingTop="5xxl"
      gap="xl"
      overflow="auto"
      className={extendContentRecipe({
        visibility,
      })}
    >
      <Stack>
        {generateArray()?.children?.map((item) => (
          <ExtendedItem key={item.name} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

const ExtendedItem: FC<MenuLinkChild> = (props) => {
  return (
    <Stack gap="xs">
      <Text
        size="small"
        weight="medium"
        textAlign="center"
        color={{ dark: "gray9", hover: "brand" }}
      >
        <TextLink href={props.href}>
          <FlexBox p="lg" flexDirection="column" alignItems="center">
            <Box>{props.svg || <Flame />}</Box>
          </FlexBox>
          {props.name}
        </TextLink>
      </Text>
    </Stack>
  );
};
