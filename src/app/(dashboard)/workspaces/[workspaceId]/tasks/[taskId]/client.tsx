"use client";

import ErrorPage from "@/app/(dashboard)/error";
import { DotterSeperator } from "@/components/dotted-seperator";
import PageLoader from "@/components/page-loader";
import { useGetSingleTask } from "@/features/tasks/api/use-get-single-task";
import { TaskBreadCrumbs } from "@/features/tasks/components/task-bread-crumbs";
import { TaskDescription } from "@/features/tasks/components/task-description";
import { TaskOverview } from "@/features/tasks/components/task-overview";
import { useTaskIdFromParams } from "@/features/tasks/hooks/user-task-id";

export const TaskIdClient = () => {
  const taskId = useTaskIdFromParams();
  const { data: taskData, isLoading } = useGetSingleTask({ taskId });

  if (isLoading) {
    return (
      <>
        <PageLoader />
      </>
    );
  }

  if (!taskData) {
    return <ErrorPage message="Task Data Not Found!" />;
  }

  return (
    <div className="flex flex-col relative">
      <TaskBreadCrumbs project={taskData.projectOfTask} task={taskData} />
      <DotterSeperator className="my-6" />
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-4">
        <TaskOverview task={taskData} />
        <TaskDescription task={taskData}/>
      </div>
    </div>
  );
};
