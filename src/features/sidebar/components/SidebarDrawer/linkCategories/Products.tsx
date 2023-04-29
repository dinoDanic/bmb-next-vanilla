import { categoryLinks } from "@/features/sidebar";
import React from "react";
import { MenuLink } from "../../MenuLink";
import { Stack } from "@kodiui/ui";

export const Products = () => {
  return (
    <Stack>
      {categoryLinks.map((category) => {
        return <MenuLink key={category.name} {...category} />;
      })}
    </Stack>
  );
};
