"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./sidebar/mobile-sidebar";
import { usePathname } from "next/navigation";

const NavigationMenusMap = {
  tasks: {
    title: "My Tasks",
    description: "View all tasks here",
  },
  projects: {
    title: "My Project",
    description: "Find all your projects tasks in multiple views",
  },
};

const defaultNavigationMap = {
  title: "Home",
  description: "Track all of your projects and tasks here",
};

export const DashboardNav = () => {
  const pathname = usePathname();
  const partsInPathname = pathname.split("/");

  const pathnameKey = partsInPathname[3] as keyof typeof NavigationMenusMap;

  const { title, description } =
    NavigationMenusMap[pathnameKey] || defaultNavigationMap;

  return (
    <nav className="pt-4 px-6 flex relative items-center justify-between">
      <div className="hidden lg:flex flex-col">
        <h1 className="text-2xl font-semibold text-indigo-600">{title}</h1>
        <p className="text-muted-foreground text-sm lg:text-base">
          {description}
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
