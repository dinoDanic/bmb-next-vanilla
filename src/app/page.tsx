"use client";

// import { graphql } from "@/gql";
// import { useQuery } from "@tanstack/react-query";
// import request from "graphql-request";

// const allProductsDocument = graphql(/* GraphQL */ `
//   query allProducts {
//     allProducts {
//       name
//     }
//   }
// `);

export default function Home() {
  // const { data } = useQuery(["products"], async () =>
  //   request("http://167.235.150.40:4000/graphql", allProductsDocument)
  // );

  return (
    <>
      products:
      {/* {data?.allProducts?.map((product, i) => { */}
      {/*   return <div key={i}>{product?.name}</div>; */}
      {/* })} */}
    </>
  );
}
