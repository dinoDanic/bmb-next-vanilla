"use client";

import { SectionCard } from "@/components";
import { Hero } from "@/features/homePage";
import { CenterTemplate } from "@/templates";
import { Box } from "@kodiui/ui";

export default function Home() {
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
        <BestSellingProducst />
      </CenterTemplate>
    </>
  );
}

const BestSellingProducst = () => (
  <SectionCard
    title="NAJPRODAVANIJI PROIZVODI"
    descirption="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Repr"
    action={{ text: "pogledaj sve proizvode", fn: () => {} }}
  />
);
