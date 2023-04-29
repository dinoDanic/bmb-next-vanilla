"use client";

import { Text } from "@/components";
import { NavLink, useSidebarStore } from "@/feautres/sidebar";
import { FC } from "react";

export const NavLinkItem: FC<NavLink> = (link) => {
  const { setActiveNavLink, activeNavLink } = useSidebarStore();
  const isActive = activeNavLink === link.name;
  return (
    <div onMouseEnter={() => setActiveNavLink(link.name)}>
      <Text weight="medium" size="small" tone={isActive ? "brand" : "neutral"}>
        {link.name}
      </Text>
    </div>
  );
};
