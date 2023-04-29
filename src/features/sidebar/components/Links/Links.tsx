import { navLinks } from "@/features/sidebar";
import { Box, Cluster } from "@kodiui/ui";
import { SidebarDrawer } from "../SidebarDrawer";
import { NavLinkItem } from "./NavLinkItem";

export const Links = () => {
  return (
    <Box p="md" position="relative">
      <Cluster gap="3xl" position="relative" zIndex="40">
        {navLinks.map((link) => {
          return <NavLinkItem key={link.name} {...link} />;
        })}
      </Cluster>
      <SidebarDrawer />
    </Box>
  );
};
