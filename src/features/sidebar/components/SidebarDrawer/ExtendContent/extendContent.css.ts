import { vars } from "@kodiui/ui";
import { recipe } from "@vanilla-extract/recipes";

export const extendContentRecipe = recipe({
  base: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "250px",
    background: vars.colors.gray3,
    zIndex: "10",
    height: "100vh",
    transition: `${vars.animationTimingFunction["ease-out-3"]} 0.3s`,
    padding: vars.space.md,
  },
  variants: {
    visibility: {
      visible: {
        transform: "translateX(100%) skew(0deg)",
      },
      hidden: {
        transform: "translateX(0%) skew(5deg)",
        opacity: 0,
      },
      none: {
        display: "none",
      },
    },
  },
});
