import React from "react";
import { Split, Stack } from "@kodiui/ui";
import { Button, Heading, Text } from "@/components";
import { ChevronRight } from "@/assets";
import Image from "next/image";

export const Slide1 = () => {
  return (
    <Split height="full">
      <Stack gap="5xxl" color="white">
        <Stack>
          <Heading color="white" level="1">
            Popusti od 5-10%
          </Heading>
          <Text size="small">
            Za gotovinsko plaćanje <br /> *Ne odnosi se na već snižene proizvode{" "}
          </Text>
        </Stack>
        <Button
          tone="light"
          variant="ghost"
          width="fit"
          icon={<ChevronRight />}
          side="right"
        >
          Saznaj više
        </Button>
      </Stack>
      <Image
        src={"/images/013.png"}
        alt="mino"
        width={400}
        height={642}
        placeholder="blur"
        blurDataURL="lol"
      />
    </Split>
  );
};
