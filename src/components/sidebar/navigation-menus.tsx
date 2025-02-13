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
                "group flex items-center gap-2.5 p-2.5 rounded-md font-medium transition hover:text-indigo-700 text-indigo-500 hover:bg-slate-200",
                isActiveMenu &&
                  "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="w-5 h-5 text-indigo-500" />
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
