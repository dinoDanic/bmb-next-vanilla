import { ChevronRight } from "@/assets";
import { Text, TextLink } from "@/components";
import { Split } from "@kodiui/ui";
import React, { FC } from "react";
import { useSidebarStore } from "../stores/useSidebarStore";

export interface MenuLink {
  href: string;
  name: string;
  children?: MenuLink[];
}

export const MenuLink: FC<MenuLink> = (props) => {
  const { setCategoryLink, activeCategoryLink } = useSidebarStore();
  const hasChildren = Boolean(props.children?.length);

  const isActive = activeCategoryLink?.name === props.name;

  const tone = isActive ? "brand" : "neutral";

  const onMouseOver = () => setCategoryLink(props);

  // const onMouseLeave = () => setCategoryLink(undefined);

  const withChildren = (
    <Split>
      {props.name}
      <ChevronRight />
    </Split>
  );

  const base = props.name;

  const content = hasChildren ? withChildren : base;

  return (
    <div
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
      // onMouseLeave={onMouseLeave}
    >
      <Text weight="medium" tone={tone}>
        <TextLink href={props.href}>{content}</TextLink>
      </Text>
    </div>
  );
};
