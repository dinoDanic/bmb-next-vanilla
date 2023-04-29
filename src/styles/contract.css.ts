import { vars, tokens, DarkColors } from "@kodiui/ui";
import { createTheme } from "@vanilla-extract/css";

const { colors, ...restTokens } = tokens;

export const lightTheme = createTheme(vars, {
  ...restTokens,
  colors: {
    ...colors,
    brand: colors.red10,
  },
});

export const darkTheme = createTheme(vars, {
  ...restTokens,
  colors: DarkColors,
});
