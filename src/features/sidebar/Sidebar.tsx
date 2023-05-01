import React from "react";
import { FlexBox } from "@kodiui/ui";
import { Links } from "./components";
// import { Actions, Links, Logo } from "./components";

export const Sidebar = () => {
  return (
    <FlexBox
      position="fixed"
      justifyContent="space-between"
      top="0"
      width="full"
    >
      <Links />
      {/* <Logo /> */}
      {/* <Actions /> */}
    </FlexBox>
  );
};
