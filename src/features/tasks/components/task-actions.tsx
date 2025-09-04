import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { useConfirm } from "@/hooks/user-confirmation-modal";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useDeleteTask } from "../api/use-delete-task";
import { UseEditTaskModal } from "../hooks/use-edit-task-modal";

interface TaskActionsProps {
  id: string;
  projectId: string;
  children: React.ReactNode;
}

export const TaskActions = ({ children, id, projectId }: TaskActionsProps) => {
  const router = useTransitionRouter();
  const workspaceId = useWorkspaceId();

  const { open } = UseEditTaskModal();

  const { mutate: deleteTask, isPending: isTaskDeletionPending } =
    useDeleteTask();

  const [ConfirmDeleteTaskDialog, confirmDeleteTask] = useConfirm(
    "Delete Task",
    "This action can't be undone!",
    "destructive"
  );

  const onOpenProject = () => {
    router.push(`/dashboard/workspaces/${workspaceId}/projects/${projectId}`);
  };

  const onOpenTask = () => {
    router.push(`/dashboard/workspaces/${workspaceId}/tasks/${id}`);
  };

  const onTaskDelete = async () => {
    const ok = await confirmDeleteTask();
    if (!ok) return;

    deleteTask({ param: { taskId: id } });
  };

  return (
    <div className="flex justify-end">
      <ConfirmDeleteTaskDialog />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuItem
            onClick={onOpenTask}
            className="font-medium p-[10px]"
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke-2" />
            Task Details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onOpenProject}
            className="font-medium p-[10px]"
          >
            <ExternalLinkIcon className="size-4 mr-2 stroke-2" />
            Open Project
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => open(id)}
            className="font-medium p-[10px]"
          >
            <PencilIcon className="size-4 mr-2 stroke-2" />
            Edit Task
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onTaskDelete}
            disabled={isTaskDeletionPending}
            className="text-rose-600 focus:text-rose-600 font-medium p-[10px]"
          >
            <TrashIcon className="size-4 mr-2 stroke-2" />
            Delete Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
