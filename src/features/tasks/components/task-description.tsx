import { Task } from "../types";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PencilIcon, XIcon } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { DottedSeperator } from "@/components/dotted-seperator";
import { useUpdateTask } from "../api/use-update-task";
import { useTaskIdFromParams } from "../hooks/user-task-id";

interface TaskDescriptionProps {
  task: Task;
}

export const TaskDescription = ({ task }: TaskDescriptionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.description);

  const taskId = useTaskIdFromParams();
  const { mutate: updateTask, isPending } = useUpdateTask();

  const handleSave = () => {
    updateTask(
      {
        json: { description: value },
        param: { taskId },
      },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      }
    );
  };

  return (
    <div className="p-4 border rounded-lg bg-slate-50">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-indigo-500">About Task</p>
        <Button
          onClick={() => setIsEditing((prev) => !prev)}
          size={"sm"}
          variant={"secondary"}
        >
          {isEditing ? (
            <>
              <XIcon className="!size-4 mr-2" />
              Cancel Edit
            </>
          ) : (
            <>
              <PencilIcon className="!size-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      <DottedSeperator className="my-4" />
      {isEditing ? (
        <>
          <div className="flex flex-col gap-y-4">
            <Textarea
              placeholder="Add a description for your task ..."
              value={value}
              className="h-10 max-h-10"
              onChange={(e) => setValue(e.target.value)}
              disabled={isPending}
            />
            <Button
              disabled={isPending}
              size={"sm"}
              className="w-fit ml-auto"
              onClick={handleSave}
            >
              {isPending ? "Saving" : "Save Changes"}
            </Button>
          </div>
        </>
      ) : (
        <div className="text-sm text-muted-foreground">
          {task.description || (
            <span className="text-muted-foreground">No Description</span>
          )}
        </div>
      )}
    </div>
  );
};
