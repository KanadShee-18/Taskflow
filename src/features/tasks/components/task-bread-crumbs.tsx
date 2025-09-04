"use client";

import { Button } from "@/components/ui/button";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { Project } from "@/features/projects/types";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { useConfirm } from "@/hooks/user-confirmation-modal";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { Link, useTransitionRouter } from "next-view-transitions";
import { useDeleteTask } from "../api/use-delete-task";
import { Task } from "../types";

interface TaskBreadCrumbsProps {
  project: Project;
  task: Task;
}

export const TaskBreadCrumbs = ({ project, task }: TaskBreadCrumbsProps) => {
  const router = useTransitionRouter();
  const workspaceId = useWorkspaceId();

  const { mutate: deleteTask, isPending } = useDeleteTask();

  const [DeleteTaskDialog, confirmDelete] = useConfirm(
    "Delete Task",
    "This action can't be undone. All the task data will ve removed!",
    "destructive"
  );

  const handleTaskDelete = async () => {
    const ok = await confirmDelete();
    if (!ok) return;

    deleteTask(
      { param: { taskId: task.$id } },
      {
        onSuccess: () => {
          router.push(`/dashboard/workspaces/${workspaceId}/tasks`);
        },
      }
    );
  };

  return (
    <div className="flex items-center gap-x-2">
      <DeleteTaskDialog />
      <ProjectAvatar
        name={project.name}
        image={project.imageUrl}
        className="size-6 lg:size-8"
      />
      <Link
        href={`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`}
      >
        <p className="text-sm lg:text-lg font-semibold text-muted-foreground hover:opacity-75 transition">
          {project.name}
        </p>
      </Link>
      <ChevronRightIcon className="size-4 lg:size-5 text-muted-foreground" />
      <p className="text-sm lg:text-lg font-semibold">{task.name}</p>
      <Button
        disabled={isPending}
        onClick={handleTaskDelete}
        className="ml-auto"
        variant={"destructive"}
        size={"sm"}
      >
        <TrashIcon className="size-4 lg:mr-2" />
        <span className="hidden lg:block">
          {isPending ? "Deleting Task" : "Delete Task"}
        </span>
      </Button>
    </div>
  );
};
