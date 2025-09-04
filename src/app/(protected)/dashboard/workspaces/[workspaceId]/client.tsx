"use client";

import ErrorPage from "@/app/error";
import { DottedSeperator } from "@/components/dotted-seperator";
import { formatDistanceToNow } from "date-fns";
import PageLoader from "@/components/page-loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetMembers } from "@/features/member/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { ProjectAnalytics } from "@/features/projects/components/project-analytics";
import { UseCreateProjectModal } from "@/features/projects/hook/use-create-project-modal";
import { useGetTasks } from "@/features/tasks/api/use-get-tasks";
import { UseCreateTaskModal } from "@/features/tasks/hooks/use-create-task-modal";
import { Task } from "@/features/tasks/types";
import { useGetWorkspaceAnalytics } from "@/features/workspaces/api/use-get-workspce-analytics";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { CalendarIcon, PlusIcon, SettingsIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { Project } from "@/features/projects/types";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { Member } from "@/features/member/types";
import { MemberAvatar } from "@/features/member/components/member-avatar";

export const WorkspaceIdClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: analytics, isLoading: isLoadingWorkspaceAnalytics } =
    useGetWorkspaceAnalytics({ workspaceId });
  const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({
    workspaceId,
  });
  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId,
  });

  const isLoading =
    isLoadingWorkspaceAnalytics ||
    isLoadingTasks ||
    isLoadingProjects ||
    isLoadingMembers;

  if (isLoading) {
    return <PageLoader />;
  }

  if (!analytics || !tasks || !projects || !members) {
    return <ErrorPage message="Failed to load workspace data!" />;
  }

  return (
    <div className="h-full flex flex-col space-y-4">
      <ProjectAnalytics data={analytics} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <TaskList data={tasks.documents} total={tasks.total} />
        <ProjectList data={projects.documents} total={projects.total} />
        <MemberList data={members.documents} total={members.total} />
      </div>
    </div>
  );
};

interface TaskListProps {
  data: Task[];
  total: number;
}

export const TaskList = ({ data, total }: TaskListProps) => {
  const workspaceId = useWorkspaceId();
  const { open: useCreateTask } = UseCreateTaskModal();

  return (
    <div className="flex relative flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4 shadow">
        <div className="flex items-center justify-between">
          <p className="text-lg text-indigo-600 font-semibold">
            Tasks ({total})
          </p>
          <Button variant={"muted"} size={"icon"} onClick={useCreateTask}>
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <DottedSeperator className="my-4" />

        <ul className="flex flex-col gap-y-4">
          {data.map((task) => (
            <li key={task.$id}>
              <Link
                href={`/dashboard/workspaces/${workspaceId}/tasks/${task.$id}`}
              >
                <Card className="rounded-lg hover:opacity-75 transition">
                  <CardContent className="p-4">
                    <p className="text-lg text-indigo-400 font-semibold truncate">
                      {task.name}
                    </p>
                    <div className="flex items-center gap-x-2">
                      <p>{task.project?.name}</p>
                      <div className="size-1 rounded-full bg-indigo-300" />
                      <div className="text-sm text-muted-foreground flex items-center">
                        <CalendarIcon className="size-3 mr-1" />
                        <span>
                          {formatDistanceToNow(new Date(task.dueDate))}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No Tasks Found
          </li>
        </ul>
        <Button className="mt-4 w-full" variant={"muted"} asChild>
          <Link href={`/dashboard/workspaces/${workspaceId}/tasks`}>
            Show All
          </Link>
        </Button>
      </div>
    </div>
  );
};

interface ProjectListProps {
  data: Project[];
  total: number;
}

export const ProjectList = ({ data, total }: ProjectListProps) => {
  const workspaceId = useWorkspaceId();
  const { open: useCreateProject } = UseCreateProjectModal();

  return (
    <div className="flex relative flex-col gap-y-4 col-span-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg text-indigo-600 font-semibold">
            Proejcts ({total})
          </p>
          <Button
            variant={"secondary"}
            size={"icon"}
            onClick={useCreateProject}
          >
            <PlusIcon className="size-4 text-neutral-400" />
          </Button>
        </div>
        <DottedSeperator className="my-4" />

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data.map((project) => (
            <li key={project.$id}>
              <Link
                href={`/dashboard/workspaces/${workspaceId}/projects/${project.$id}`}
              >
                <Card className="rounded-lg hover:opacity-75 transition">
                  <CardContent className="p-4 flex items-center gap-x-2.5">
                    <ProjectAvatar
                      name={project?.name}
                      image={project.imageUrl}
                      className="size-12"
                      fallbackClassname="text-lg"
                    />
                    <p className="text-lg font-medium truncate">
                      {project.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No Projects Found
          </li>
        </ul>
      </div>
    </div>
  );
};

interface MemberListProps {
  data: Member[];
  total: number;
}

export const MemberList = ({ data, total }: MemberListProps) => {
  const workspaceId = useWorkspaceId();

  return (
    <div className="flex relative flex-col gap-y-4 col-span-1">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg text-indigo-600 font-semibold">
            Members ({total})
          </p>
          <Button variant={"secondary"} size={"icon"} asChild>
            <Link href={`/workspaces/${workspaceId}/members`}>
              <SettingsIcon className="size-4 text-neutral-400" />
            </Link>
          </Button>
        </div>
        <DottedSeperator className="my-4" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((member) => (
            <li key={member.$id}>
              <Card className="rounded-lg overflow-hidden">
                <CardContent className="p-3 flex flex-col gap-x-2 items-center">
                  <MemberAvatar name={member?.name} className="size-12" />
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-medium truncate line-clamp-1">
                      {member.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate line-clamp-1">
                      {member.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">
            No Members
          </li>
        </ul>
      </div>
    </div>
  );
};
