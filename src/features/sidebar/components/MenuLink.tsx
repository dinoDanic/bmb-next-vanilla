import { ChevronRight } from "@/assets";
import { Text, TextLink } from "@/components";
import { Split } from "@kodiui/ui";
import React, { FC, ReactElement } from "react";
import { useSidebarStore } from "../stores/useSidebarStore";
import { CategoryNames } from "../utils/categoryLinks";
import { NavLinkNames } from "../utils/navLinks";

export interface MenuLink {
  href: string;
  name: CategoryNames;
  belongsTo: NavLinkNames;
  children?: MenuLinkChild[];
}

export interface MenuLinkChild {
  href: string;
  name: string;
  svg?: ReactElement;
}

export const MenuLink: FC<MenuLink> = (props) => {
  const { setCategoryLink, activeCategoryLink } = useSidebarStore();
  const hasChildren = Boolean(props.children?.length);

  const isActive = activeCategoryLink?.name === props.name;

  const tone = isActive ? "brand" : "neutral";

  const onMouseOver = () => setCategoryLink(props);

  const withChildren = (
    <Split>
      {props.name}
      <ChevronRight />
    </Split>
  );

  const base = props.name;

  const content = hasChildren ? withChildren : base;

  return (
    <div onMouseOver={onMouseOver} onFocus={onMouseOver}>
      <Text weight="medium" tone={tone}>
        <TextLink href={props.href}>{content}</TextLink>
      </Text>
    </div>
  );
};
