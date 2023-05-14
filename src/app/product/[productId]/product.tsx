"use client";

import { getProductById } from "@/features/products";
import { Product as ProductType } from "@/gql/graphql";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";

export const Product: FC<ProductType> = (props) => {
  const { data } = useQuery({
    queryKey: ["product", { productId: props?.id }],
    queryFn: () => getProductById(props?.id || ""),
    initialData: props,
  });
  return <div>product {data?.name}</div>;
};
