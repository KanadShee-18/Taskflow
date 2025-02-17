"use client";

import ErrorPage from "@/app/(dashboard)/error";
import PageLoader from "@/components/page-loader";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/use-get-workspace-info";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { useWorkspaceId } from "@/features/workspaces/hooks/workspaceId-hook";

export const InviteCodeClientPage = () => {
  const workspaceId = useWorkspaceId();

  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <ErrorPage message="Workspace Information not found!" />;
  }

  return (
    <div className="relative w-full">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
