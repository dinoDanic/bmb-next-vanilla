// import { AllProductsDocument } from "@/gql/graphql";
// import { graphqlClient } from "@/lib";
import { Stack } from "@kodiui/ui";
// import Link from "next/link";

export default async function ProductsPage() {
  // const data = await graphqlClient.request(AllProductsDocument);

  return (
    <Stack>
      products:
      {/* {data.allProducts?.map((product, i) => { */}
      {/*   return ( */}
      {/*     <Link href={`product/${product?.id}`} key={i}> */}
      {/*       {product?.name} */}
      {/*     </Link> */}
      {/*   ); */}
      {/* })} */}
    </Stack>
  );
}
