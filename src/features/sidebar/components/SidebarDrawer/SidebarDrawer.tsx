import React from "react";
import { Layer } from "./Layer";
import { ClientTrigger } from "./ClientTrigger";
import { SidebarContent } from "./SidebarContent";
import { ExtendContent } from "./ExtendContent";

export const SidebarDrawer = () => {
  return (
    <>
      <ClientTrigger>
        {/* this is not an error. Typescirpt dose not know about server components*/}
        {/* @ts-expect-error Server Component */}
        <SidebarContent />
        <ExtendContent />
      </ClientTrigger>
      <Layer />
    </>
  );
};
