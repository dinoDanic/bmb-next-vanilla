import React from "react";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { layerRecipe } from "./layer.css";

export const Layer = () => {
  const { activeNavLink, resetStore } = useSidebarStore();
  const isOpen = activeNavLink !== undefined;

  const onMouseOver = () => resetStore();

  return (
    <div
      className={layerRecipe({ visibility: isOpen ? "vidible" : "hidden" })}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    />
  );
};
