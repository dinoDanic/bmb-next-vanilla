"use client";

import { graphql } from "@/gql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

const allProductsDocument = graphql(/* GraphQL */ `
  query allProducts {
    allProducts {
      name
    }
  }
`);

export default function Home() {
  const { data } = useQuery(["products"], async () =>
    request("http://127.0.0.1:4000/graphql", allProductsDocument)
  );
  console.log(data, "data");

  return <>nikakav paged</>;
}
