'use client';

import ErrorPage from '@/app/error';
import PageLoader from '@/components/page-loader';
import { useGetProject } from '@/features/projects/api/use-get-project';
import { EditProjectForm } from '@/features/projects/components/edit-project-form';
import { useProjectId } from '@/features/projects/hook/use-project-id';

export const ProjectSettingsClientPage = () => {
  const projectId = useProjectId();
  const { data, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <ErrorPage message="Project Details not found!" />;
  }

  return (
    <div className="relative mx-auto flex h-full w-full items-center justify-center md:max-w-lg">
      <EditProjectForm initialValues={data} />
    </div>
  );
};
