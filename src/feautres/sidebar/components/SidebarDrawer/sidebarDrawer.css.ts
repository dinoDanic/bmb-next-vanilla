import { vars } from "@kodiui/ui";
import { recipe } from "@vanilla-extract/recipes";

export const sideBarOpen = recipe({
  base: {
    transform: "translateX(-100%)",
    background: vars.colors.red8,
    transition: "0.2s ease all",
  },
  variants: {
    state: {
      active: {
        transform: "translateX(0%)",
      },
    },
  },
});
