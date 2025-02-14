"use client";

import React from "react";
import { NAVIGATION_ITEMS } from "@/utils/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavigationMenus = () => {
  return (
    <ul className="flex flex-col">
      {NAVIGATION_ITEMS.map((item) => {
        const isActiveMenu = false;
        const Icon = isActiveMenu ? item.activeIcon : item.icon;
        return (
          <Link href={item.href} key={item.label}>
            <div
              className={cn(
                "group flex text-sm items-center gap-2.5 p-2.5 rounded-md font-medium opacity-70 transition hover:text-slate-900 text-indigo-500 hover:bg-slate-200",
                isActiveMenu &&
                  "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="w-5 transition h-5 group-hover:text-opacity-100 text-indigo-500" />
              <p className="group-hover:translate-x-2 duration-300 transition-all">
                {item.label}
              </p>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationMenus;
