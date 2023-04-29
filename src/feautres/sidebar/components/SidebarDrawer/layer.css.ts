import { vars } from "@kodiui/ui";
import { recipe } from "@vanilla-extract/recipes";

export const layerRecipe = recipe({
  base: {
    left: "0",
    top: "0",
    position: "fixed",
    width: "100vh",
    height: "100vh",
    background: vars.colors.blackA4,
    zIndex: "10",
    transition: "0.2s ease all",
    opacity: 0,
  },
  variants: {
    visibility: {
      vidible: {
        opacity: 1,
      },
      hidden: {
        opacity: 0,
      },
    },
  },
});
