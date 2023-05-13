import React from "react";
import { Box, Stack, Switcher } from "@kodiui/ui";
import { Button, Heading, Text } from "@/components";
import { ChevronRight } from "@/assets";

export const Slide1 = () => {
  return (
    <Switcher>
      <Stack gap="5xxl">
        <Stack>
          <Heading level="1">Popusti od 5-10%</Heading>
          <Text size="small">
            Za gotovinsko plaćanje <br /> *Ne odnosi se na već snižene proizvode{" "}
          </Text>
        </Stack>
        <Button
          variant="ghost"
          width="fit"
          icon={<ChevronRight />}
          side="right"
        >
          Saznaj više
        </Button>
      </Stack>
      <Box borderColor="gray7" borderStyle="solid" borderWidth="md" />
    </Switcher>
  );
};
