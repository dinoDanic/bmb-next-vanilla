"use client";

import { AllProductsDocument } from "@/gql/graphql";
import { graphqlClient } from "@/lib";
import { Stack } from "@kodiui/ui";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ProductsPage() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await graphqlClient.request(AllProductsDocument),
  });

  return (
    <Stack>
      products:
      {data?.allProducts?.map((product, i) => {
        return (
          <Link href={`product/${product?.id}`} key={i}>
            {product?.name}
          </Link>
        );
      })}
    </Stack>
  );
}
