import React from "react";
import { Box, Stack } from "@kodiui/ui";
import { graphqlClient } from "@/lib";
import { CategoryLink } from "./CategoryLink/CategoryLink";
import { GetCategoriesDocument } from "@/gql/graphql";

export const SidebarContent = async () => {
  console.log("im i server?");

  const { getCategories } = await graphqlClient.request(GetCategoriesDocument);

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
        {getCategories?.map((category) => {
          if (!category?.name) return null;
          return <CategoryLink key={category?.id} {...category} />;
        })}
      </Stack>
    </Box>
  );
};
