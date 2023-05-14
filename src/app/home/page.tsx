// import { SectionCard } from "@/components";
import { Hero } from "@/features/homePage";
import { CenterTemplate } from "@/templates";
import { Box } from "@kodiui/ui";
// import { CategoriesTest } from "./CategoriesTest";
// import { graphql } from "@/gql";
// import { graphqlClient } from "@/lib/graphql-client";

// const allProductsDocument = graphql(/* GraphQL */ `
//   query allProducts {
//     allProducts {
//       name
//     }
//   }
// `);
//
export default async function Home() {
  // const data = await graphqlClient.request(allProductsDocument);
  const data = await fetch("http://167.235.150.40:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
    query allProducts {
      allProducts {
        name
      }
    }
  `,
    }),
  }).then((res) => res.json());

  return (
    <>
      <Box paddingTop="5xxl" />
      <Box paddingTop="5xxl" />
      <Box paddingTop="5xxl" />
      <CenterTemplate>
        <Hero />
        <Box paddingTop="5xxl" />
        <Box paddingTop="5xxl" />
        <Box paddingTop="5xxl" />
        {/* <BestSellingProducst /> */}
      </CenterTemplate>
      <div>
        {data.data.allProducts?.map((p: any, i: number) => (
          <div key={i}>{p?.name}</div>
        ))}
      </div>
    </>
  );
}

// const BestSellingProducst = () => (
//   <SectionCard
//     title="NAJPRODAVANIJI PROIZVODI"
//     descirption="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Repr"
//     action={{ text: "pogledaj sve proizvode", fn: () => {} }}
//   />
// );
