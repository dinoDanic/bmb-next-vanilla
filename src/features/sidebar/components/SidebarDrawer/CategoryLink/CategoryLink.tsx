import { Category } from "@/gql/graphql";
import React, { FC } from "react";
import { Item } from "./Item";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const CategoryLink: FC<Category> = async (category) => {
  console.log("I AM SERVER ");

  return (
    <>
      <Item {...category} />
    </>
  );
};
