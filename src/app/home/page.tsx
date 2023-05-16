// import { SectionCard } from "@/components";
import { Hero } from "@/features/homePage";
import { CenterTemplate } from "@/templates";
import { Box } from "@kodiui/ui";
// import { CategoriesTest } from "./CategoriesTest";
// import { graphqlClient } from "@/lib/graphql-client";
// import { AllProductsDocument } from "@/gql/graphql";

export default async function Home() {
  // const data = await graphqlClient.request(AllProductsDocument);
  console.log("server component");

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
        lol
      </CenterTemplate>
      <div>
        {/* {data.allProducts?.map((p: any, i: number) => ( */}
        {/*   <div key={i}>{p?.name}</div> */}
        {/* ))} */}
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
