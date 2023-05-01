"use client";

import { Text } from "@/components";
import { NavLink, useSidebarStore } from "@/features/sidebar";
import { FC } from "react";

export const NavLinkItem: FC<NavLink> = (link) => {
  const { setActiveNavLink, activeNavLink, setCategoryLink } =
    useSidebarStore();

  const isActive = activeNavLink === link.name;
  const isOpen = activeNavLink !== undefined;

  const color = isActive ? "brand" : isOpen ? "black" : "white";

  const onMouseLeave = () => setCategoryLink(undefined);

  return (
    <div
      onMouseEnter={() => setActiveNavLink(link.name)}
      onMouseLeave={onMouseLeave}
    >
      <Text weight="medium" size="small" color={color}>
        {link.name}
      </Text>
    </div>
  );
};
