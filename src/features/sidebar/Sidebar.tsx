import React from "react";
import { FlexBox } from "@kodiui/ui";
import { Links } from "./components";

export const Sidebar = () => {
  return (
    <FlexBox justifyContent="space-between">
      <Links />
    </FlexBox>
  );
};
