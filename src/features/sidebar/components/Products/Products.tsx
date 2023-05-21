import { Box } from "@kodiui/ui";
import { SidebarDrawer } from "../SidebarDrawer";
import { ProductTrigger } from "./ProductTrigger";

export const Products = () => {
  return (
    <Box p="2xl" minWidth="96" position="relative">
      <ProductTrigger />
      <SidebarDrawer />
    </Box>
  );
};
