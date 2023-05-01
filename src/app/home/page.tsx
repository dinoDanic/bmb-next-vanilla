"use client";

import { Heading, Text } from "@/components";
import { Hero, Wave } from "@/features/homePage";
import { CenterTemplate } from "@/templates";
import { Box, Stack } from "@kodiui/ui";

export default function Home() {
  return (
    <>
      <Box background="brand" paddingTop="5xxl">
        <Box paddingTop="5xxl" />
        <Hero />
      </Box>
      <Wave />
      <CenterTemplate maxWidth={600}>
        <Box paddingTop="5xxl" />
        <Stack>
          <Heading
            textAlign="center"
            style={{ textTransform: "uppercase" }}
            level="1"
          >
            Novi Proizvodi
          </Heading>
          <Text size="small" textAlign="center">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse
          </Text>
        </Stack>
      </CenterTemplate>
    </>
  );
}
