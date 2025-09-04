'use client';

import ErrorPage from '@/app/error';
import PageLoader from '@/components/page-loader';
import { useGetWorkspace } from '@/features/workspaces/api/use-get-workspace';
import { EditWorkSpaceForm } from '@/features/workspaces/components/edit-workspace-form';
import { useWorkspaceId } from '@/features/workspaces/hooks/workspaceId-hook';

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
    <div className="relative mx-auto flex h-full w-full items-center justify-center md:max-w-lg">
      <EditWorkSpaceForm initialValues={data} />
    </div>
  );
};
