import { Center } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";

interface Props {
  maxWidth?: number;
}

export const CenterTemplate: FC<PropsWithChildren & Props> = ({
  children,
  maxWidth = 1200,
}) => {
  return (
    <Center position="relative" width="full" __maxwidth={maxWidth}>
      {children}
    </Center>
  );
};
