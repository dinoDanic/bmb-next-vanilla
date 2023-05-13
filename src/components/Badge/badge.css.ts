import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const badgeRecipe = recipe({
  base: {
    padding: `${vars.space.xxs} ${vars.space.xs}`,
    fontSize: vars.fontSize.xs,
    borderRadius: vars.borderRadius.md,
    width: "fit-content",
  },
  variants: {
    tone: {
      neutral: {
        background: vars.colors.black,
        color: vars.colors.white,
      },
      brand: {
        background: vars.colors.brand,
        color: vars.colors.white,
      },
      brandAccent: {
        background: vars.colors.brandAccentSoft,
        color: vars.colors.brandAccent,
      },
      critical: {
        background: vars.colors.criticalSoft,
        color: vars.colors.critical,
      },
      info: {
        background: vars.colors.infoSoft,
        color: vars.colors.infoActive,
      },
      success: {
        background: vars.colors.successSoft,
        color: vars.colors.success,
      },
    },
    weight: {
      regular: {
        fontWeight: "normal",
      },
      medium: {
        fontWeight: 500,
      },
      strong: {
        fontWeight: "bolder",
      },
    },
  },
  defaultVariants: {
    tone: "brand",
    weight: "regular",
  },
});

export type BadgeVariants = RecipeVariants<typeof badgeRecipe>;
