"use client";

import { DotterSeperator } from "@/components/dotted-seperator";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader, PlusIcon } from "lucide-react";
import { UseCreateTaskModal } from "../hooks/use-create-task-modal";
import { useGetTasks } from "../api/use-get-tasks";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { DataFilters } from "./data-filters";
import { useTaskFilters } from "../hooks/use-tasks-filters";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { DataKanban } from "./data-kanban";
import { useCallback } from "react";
import { TaskStatus } from "../types";
import { useBulkUpdatesTask } from "../api/use-bulk-updates-task";
import { DataCalenar } from "./data-calendar";
import { useProjectId } from "@/features/projects/hook/use-project-id";

interface TaskViewSwitcherProps {
  hideProjectFilter?: boolean;
}

export const TaskViewSwitcher = ({
  hideProjectFilter,
}: TaskViewSwitcherProps) => {
  const [{ status, search, assigneeId, projectId, dueDate }] = useTaskFilters();

  const { mutate: bulkUpdateTasks } = useBulkUpdatesTask();

  const [view, setView] = useQueryState("task-view", {
    defaultValue: "table",
  });

  const workspaceId = useWorkspaceId();
  const paramProjectId = useProjectId();

  const { open } = UseCreateTaskModal();
  const { data: tasks, isLoading: isTasksLoading } = useGetTasks({
    workspaceId,
    projectId: paramProjectId || projectId,
    assigneeId,
    dueDate,
    search,
    status,
  });

  const onKanbanChange = useCallback(
    (tasks: { $id: string; status: TaskStatus; position: number }[]) => {
      bulkUpdateTasks({
        json: { tasks },
      });
    },
    [bulkUpdateTasks]
  );

  return (
    <Tabs
      className="flex-1 w-full border rounded-lg bg-white"
      defaultValue={view}
      onValueChange={setView}
    >
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button
            onClick={open}
            size={"sm"}
            className="w-full tracking-wider lg:w-auto"
          >
            <PlusIcon />
            NEW TASK
          </Button>
        </div>
        <DotterSeperator className="my-4" />
        <DataFilters hideProjectFilters={hideProjectFilter} />
        <DotterSeperator className="my-4" />
        {isTasksLoading ? (
          <div className="w-full h-[200px] flex flex-col items-center justify-center border rounded-lg ">
            <Loader className="animate-spin size-5 text-muted-foreground" />
          </div>
        ) : (
          <>
            <TabsContent value="table" className="mt-0">
              <DataTable columns={columns} data={tasks?.documents ?? []} />
            </TabsContent>
            <TabsContent value="kanban" className="mt-0">
              <DataKanban
                onChange={onKanbanChange}
                data={tasks?.documents ?? []}
              />
            </TabsContent>
            <TabsContent value="calendar" className="mt-0 h-full pb-4">
              <DataCalenar data={tasks?.documents ?? []} />
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  );
};
