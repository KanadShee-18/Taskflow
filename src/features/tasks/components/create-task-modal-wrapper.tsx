import { Card, CardContent } from "@/components/ui/card";
import { useGetMembers } from "@/features/member/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";
import { Loader } from "lucide-react";
import { CreateTaskForm } from "./create-task-form";

interface CreateTaskFormWrapperProps {
  onCancel: () => void;
}

export const CreateTaskFormWrapper = ({
  onCancel,
}: CreateTaskFormWrapperProps) => {
  const workspaceId = useWorkspaceId();
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

  const isLoading = isMembersLoading || isProjectLoading;

  if (isLoading) {
    return (
      <Card className="w-full h-[720px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <Loader className="animate-spin !size-5 text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <CreateTaskForm
        onCancel={onCancel}
        projectOptions={projectOptions ?? []}
        memberOptions={memberOptions ?? []}
      />
    </>
  );
};
