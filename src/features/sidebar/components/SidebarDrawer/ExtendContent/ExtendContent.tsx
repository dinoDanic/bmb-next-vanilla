"use client";

import React, { FC } from "react";
import { GetChildCategoriesDocument } from "@/gql/graphql";
import { graphqlClient } from "@/lib";
import { DisplayContent } from "./DisplayContent";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const ExtendContent: FC = async () => {
  const { getChildCategories } = await graphqlClient.request(
    GetChildCategoriesDocument
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <DisplayContent childCategories={getChildCategories} />;
};
