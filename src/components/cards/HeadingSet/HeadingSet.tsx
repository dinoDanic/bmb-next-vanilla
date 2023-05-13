import React, { FC } from "react";
import { Stack } from "@kodiui/ui";
import { Heading, Text } from "@/components";

export interface HeadingSet {
  heading: string;
  text: string;
}

export const HeadingSet: FC<HeadingSet> = (props) => {
  return (
    <Stack>
      <Heading textAlign="center" level="1">
        {props.heading}
      </Heading>
      <Text size="small" textAlign="center">
        {props.text}
      </Text>
    </Stack>
  );
};
