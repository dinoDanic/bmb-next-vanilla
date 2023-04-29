import { useSidebarStore } from "@/features/sidebar";
import React from "react";
import { extendContentRecipe } from "./extendContent.css";

export const ExtendContent = () => {
  const { activeCategoryLink, activeNavLink } = useSidebarStore();

  const hasCategory =
    activeCategoryLink !== undefined && activeCategoryLink.children;

  const hasNavLineActive = activeNavLink !== undefined;

  const visible = hasCategory ? "visible" : "hidden";

  const visibility = hasNavLineActive ? visible : "none";

  return (
    <div
      className={extendContentRecipe({
        visibility,
      })}
    >
      ExtendedContent
    </div>
  );
};
