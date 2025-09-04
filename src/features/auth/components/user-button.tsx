"use client";

import { DottedSeperator } from "@/components/dotted-seperator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon, Loader, LogOut } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useCurrentUser } from "../api/use-current-user";
import { useLogout } from "../api/use-logout";

export const UserButton = () => {
  const router = useTransitionRouter();
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();
  if (isLoading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) return null;
  const { name, email } = user;

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 border border-indigo-300 cursor-pointer">
          <AvatarFallback className="bg-indigo-100 font-medium text-indigo-700 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        side="bottom"
        sideOffset={10}
      >
        <div className="flex flex-col justify-center items-center gap-2 px-2.5 py-4">
          <Avatar className="size-12 border border-indigo-300 cursor-pointer">
            <AvatarFallback className="bg-indigo-100 font-medium text-indigo-700 text-xl flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <DottedSeperator className="mb-1" />
        <DropdownMenuItem
          onClick={() => router.push("/")}
          className="h-10 flex items-center font-medium text-indigo-700 cursor-pointer"
        >
          <HomeIcon className="size-5 mr-2" />
          Back to Home
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => logout()}
          className="h-10 flex items-center font-medium text-indigo-700 cursor-pointer"
        >
          <LogOut className="size-5 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
