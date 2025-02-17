"use client";

import ErrorPage from "@/app/(dashboard)/error";
import PageLoader from "@/components/page-loader";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { EditWorkSpaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";

export const WorkspaceSettingsClient = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = useGetWorkspace({ workspaceId });
  if (isLoading) {
    return <PageLoader />;
  }
  if (!data) {
    return <ErrorPage message="Workspace Data not found!" />;
  }
  return (
    <div className="relative h-full w-full md:max-w-lg flex items-center justify-center mx-auto">
      <EditWorkSpaceForm initialValues={data} />
    </div>
  );
};
