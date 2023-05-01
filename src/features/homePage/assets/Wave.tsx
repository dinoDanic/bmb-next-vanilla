import { vars } from "@kodiui/ui";
import React from "react";

export const Wave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={vars.colors.brand} />
          <stop offset="100%" stopColor={vars.colors.red11} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        fillOpacity="1"
        d="M0,288L48,277.3C96,267,192,245,288,234.7C384,224,480,224,576,234.7C672,245,768,267,864,277.3C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};
