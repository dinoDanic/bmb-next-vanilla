import React from "react";
import { useSidebarStore } from "../../stores/useSidebarStore";
import { layerRecipe } from "./layer.css";

export const Layer = () => {
  const { activeNavLink, setActiveNavLink } = useSidebarStore();
  const isOpen = activeNavLink !== undefined;

  const onMouseOver = () => setActiveNavLink(undefined);

  return (
    <div
      className={layerRecipe({ visibility: isOpen ? "vidible" : "hidden" })}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      Layer
    </div>
  );
};
