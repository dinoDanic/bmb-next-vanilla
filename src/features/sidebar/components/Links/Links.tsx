import { Box } from "@kodiui/ui";
import { SidebarDrawer } from "../SidebarDrawer";
import { NavLinkItem } from "./NavLinkItem";

export const Links = () => {
  return (
    <Box p="2xl" minWidth="96" position="relative">
      <NavLinkItem name="Proizvodi" />
      <SidebarDrawer />
    </Box>
  );
};
