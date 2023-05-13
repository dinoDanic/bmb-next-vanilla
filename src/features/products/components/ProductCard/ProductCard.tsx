import { ChevronRight } from "@/assets";
import { Badge, Button, Text } from "@/components";
import { Box, Cluster, Split, Stack } from "@kodiui/ui";
import React from "react";

export const ProductCard = () => {
  return (
    <Box
      background="white"
      borderRadius="sm"
      borderColor="gray6"
      boxShadow="shadow-2"
      borderStyle="solid"
      p="xs"
    >
      <Stack gap="xs">
        <Cluster gap="xs" p="xs">
          <Badge tone="neutral">Kamini</Badge>
          <Badge>snizeno</Badge>
        </Cluster>
        <Box mx="--xxs" height="72" background="gray3" />
        <Text weight="strong">Title product</Text>
        <Split alignItems="center">
          <Text size="small" weight="medium">
            Cijena:
          </Text>
          <Text size="large" weight="medium">
            76,00 EUR
          </Text>
        </Split>
        <Button
          tone="neutral"
          justifyContent="center"
          icon={<ChevronRight />}
          side="right"
        >
          SAZNAJ VISE
        </Button>
      </Stack>
    </Box>
  );
};
