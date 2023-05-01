import { keyframes, style } from "@vanilla-extract/css";

const dash = keyframes({
  "100%": {
    strokeDashoffset: 0,
  },
});

export const testing = style({
  strokeDasharray: 1000,
  strokeDashoffset: 1000,
  animation: `${dash} 5s linear alternate infinite`,
});
