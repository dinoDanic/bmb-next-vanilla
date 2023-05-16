import React from "react";
import { Box, Stack } from "@kodiui/ui";
import { graphqlClient } from "@/lib";
import { GetParentCategoriesDocument } from "@/gql/graphql";
import { CategoryLink } from "./CategoryLink/CategoryLink";

export const SidebarContent = async () => {
  console.log("im i server?");

  const { getParentCategories } = await graphqlClient.request(
    GetParentCategoriesDocument
  );

  return (
    <Box
      position="absolute"
      width="full"
      height="full"
      zIndex="30"
      background="white"
      p="2xl"
    >
      <Box paddingTop="5xxl" />
      <Stack>
        {getParentCategories?.map((category) => {
          if (!category?.name) return null;
          return <CategoryLink key={category?.id} {...category} />;
        })}
      </Stack>
    </Box>
  );
};
