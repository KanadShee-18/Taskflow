import { Button } from "@/components/ui/button";
import { Task } from "../types";
import { PencilIcon } from "lucide-react";
import { DottedSeperator } from "@/components/dotted-seperator";
import { OverviewProperty } from "./overview-property";
import { MemberAvatar } from "@/features/member/components/member-avatar";
import { TaskDate } from "./task-date";
import { Badge } from "@/components/ui/badge";
import { snakeCaseToTitleCase } from "@/lib/utils";
import { UseEditTaskModal } from "../hooks/use-edit-task-modal";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  const { open } = UseEditTaskModal();

  return (
    <div className="flex flex-col gapy4 col-span-1">
      <div className="bg-muted rounded p-4 shadow-sm shadow-slate-300">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-indigo-600">Overview</p>
          <Button
            onClick={() => open(task.$id)}
            size={"sm"}
            variant={"secondary"}
          >
            <PencilIcon className="mr-2 !size-4" />
            Edit
          </Button>
        </div>
        <DottedSeperator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Assignee">
            <MemberAvatar name={task.assignee.name} className="size-6" />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>
          <OverviewProperty label="Due Date">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>
          <OverviewProperty label="Status">
            <Badge variant={task.status}>
              {snakeCaseToTitleCase(task?.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
