import { Card, CardContent } from "@/components/ui/card";
import { useGetMembers } from "@/features/member/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { Loader } from "lucide-react";
import { useGetSingleTask } from "../api/use-get-single-task";
import { EditTaskForm } from "./edit-task-form";

interface EditTaskFormWrapperProps {
  onCancel: () => void;
  id: string;
}

export const EditTaskFormWrapper = ({
  onCancel,
  id,
}: EditTaskFormWrapperProps) => {
  const workspaceId = useWorkspaceId();

  const { data: initialTaskData, isLoading: isSingleTaskLoading } =
    useGetSingleTask({ taskId: id });

  const { data: projects, isLoading: isProjectLoading } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isMembersLoading } = useGetMembers({
    workspaceId,
  });

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));
  const memberOptions = members?.documents.map((member) => ({
    id: member.$id,
    name: member.name,
  }));

  const isLoading = isMembersLoading || isProjectLoading || isSingleTaskLoading;

  if (isLoading) {
    return (
      <Card className="w-full h-[720px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <Loader className="animate-spin !size-5 text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  if (!initialTaskData) return null;

  return (
    <>
      <EditTaskForm
        onCancel={onCancel}
        intialValues={initialTaskData}
        projectOptions={projectOptions ?? []}
        memberOptions={memberOptions ?? []}
      />
    </>
  );
};
