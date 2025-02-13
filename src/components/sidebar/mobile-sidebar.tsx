"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "./sidebar-section";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const MobileSidebar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);
  return (
    <Sheet modal={false} open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"secondary"} className="lg:hidden">
          <MenuIcon className="size-4 text-indigo-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 w-64">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
