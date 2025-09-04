"use client";

import { RiAddCircleFill } from "react-icons/ri";
import { useGetWorkspaces } from "../api/use-get-workspaces";
import { UseCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";
import { useWorkspaceId } from "../hooks/workspaceId-hook";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutDashboard } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { WorkspaceAvatar } from "./workspace-avatar";

export const WorkspaceSwitcher = () => {
  const router = useTransitionRouter();
  const workspaceId = useWorkspaceId();
  const { data: workspaces } = useGetWorkspaces();
  const { open } = UseCreateWorkspaceModal();

  const onWorkspaceSelect = (id: string) => {
    router.push(`/dashboard/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <span className="w-fit flex gap-2 items-center text-xs uppercase text-indigo-500">
          <LayoutDashboard className="w-4 h-4" />
          <p className="text-xs uppercase text-indigo-500 font-semibold tracking-wider">
            Workspaces
          </p>
        </span>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-indigo-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      <Select onValueChange={onWorkspaceSelect} value={workspaceId}>
        <SelectTrigger className="w-full text-muted-foreground bg-slate-200 font-medium p-1">
          <SelectValue placeholder="No Workspace Selected" />
        </SelectTrigger>
        <SelectContent>
          {workspaces?.documents.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              <div className="flex justify-start items-center gap-3 font-medium cursor-pointer hover:scale-95 duration-300 transition-all">
                <WorkspaceAvatar
                  name={workspace.name}
                  image={workspace.imageUrl}
                />
                <span
                  className="truncate text-gray-600 hover:text-indigo-500 text-wrap
                "
                >
                  {workspace.name}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
