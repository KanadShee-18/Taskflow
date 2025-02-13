"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DotterSeperator } from "../dotted-seperator";
import NavigationMenus from "./navigation-menus";
import { WorkspaceSwitcher } from "@/features/workspaces/components/workspaces-switcher";

const Sidebar = () => {
  return (
    <aside className="h-full bg-zinc-100 p-4 w-full">
      <Link href={"/"} className="w-full flex items-center justify-start">
        <div className="flex items-center gap-3 w-fit">
          <Image src={"/logo.jpg"} alt="TaskFlow" width={45} height={50} />
          <Image src={"/logo-text.png"} alt="TaskFlow" width={80} height={50} />
        </div>
      </Link>
      <DotterSeperator className="my-4" />
      <WorkspaceSwitcher />
      <DotterSeperator className="my-4" />
      <NavigationMenus />
    </aside>
  );
};

export default Sidebar;
