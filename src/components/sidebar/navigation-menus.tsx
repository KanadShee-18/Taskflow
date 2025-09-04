"use client";

import { NAVIGATION_ITEMS } from "@/utils/constants";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";

const NavigationMenus = () => {
  const pathname = usePathname();
  const workspaceId = useWorkspaceId();
  return (
    <ul className="flex flex-col">
      {NAVIGATION_ITEMS.map((item) => {
        const actualRedirectHref =
          item.tag === "tasks" || item.tag === "home"
            ? `/dashboard/workspaces/${workspaceId}${item.href}`
            : `/workspaces/${workspaceId}${item.href}`;
        const isActiveMenu = pathname === actualRedirectHref;
        const Icon = isActiveMenu ? item.activeIcon : item.icon;
        return (
          <Link href={actualRedirectHref} key={item.label} className="group">
            <div
              className={cn(
                "flex items-center text-sm gap-2.5 p-2.5 rounded-md font-medium hover:text-indigo-500 text-neutral-500 transition",
                isActiveMenu &&
                  "bg-indigo-100 shadow-md hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500 group-hover:text-indigo-600 transition duration-300" />
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
