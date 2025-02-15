"use client";

import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { UseCreateProjectModal } from "@/features/projects/hook/use-create-project-modal";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { cn } from "@/lib/utils";
import { FolderOpenDot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiAddCircleFill } from "react-icons/ri";

export const Projects = () => {
  const pathname = usePathname();
  const { open } = UseCreateProjectModal();

  const projectId = null; //TODO: use project id

  const workspaceId = useWorkspaceId();
  const { data } = useGetProjects({ workspaceId });

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <span className="w-fit flex gap-2 items-center text-xs uppercase text-indigo-500">
          <FolderOpenDot className="w-4 h-4" />
          <p className="text-xs uppercase text-indigo-500 font-semibold tracking-wider">
            Projects
          </p>
        </span>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-indigo-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {data?.documents.map((project) => {
        const href = `/workspaces/${workspaceId}/projects/${projectId}`;
        const isActive = pathname === href;

        return (
          <Link href={href} key={project.$id}>
            <div
              className={cn(
                "flex group items-center text-sm gap-2.5 p-2.5 rounded-md font-medium hover:text-indigo-500 text-neutral-500 transition",
                isActive &&
                  "bg-indigo-100 shadow-md hover:opacity-100 text-primary"
              )}
            >
              <span className="truncate flex gap-x-4 items-center w-full">
                <ProjectAvatar
                  image={project.imageUrl}
                  name={project.name}
                  className="group-hover:translate-x-1 duration-300 transition-all"
                />
                <p className="group-hover:-translate-x-1 duration-300 transition-all">
                  {project?.name}
                </p>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
