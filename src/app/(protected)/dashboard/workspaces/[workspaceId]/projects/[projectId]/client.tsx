'use client';

import ErrorPage from '@/app/error';
import PageLoader from '@/components/page-loader';
import { Button } from '@/components/ui/button';
import { useGetProject } from '@/features/projects/api/use-get-project';
import { useGetProjectAnalytics } from '@/features/projects/api/use-get-project-analytics';
import { ProjectAnalytics } from '@/features/projects/components/project-analytics';
import { ProjectAvatar } from '@/features/projects/components/project-avatar';
import { useProjectId } from '@/features/projects/hook/use-project-id';
import { TaskViewSwitcher } from '@/features/tasks/components/task-view-switcher';
import { PencilIcon } from 'lucide-react';
import { Link } from 'next-view-transitions';

export const ProjectIdClientPage = () => {
  const projectId = useProjectId();
  const { data: projectDetails, isLoading: isProjectLoading } = useGetProject({
    projectId,
  });
  const { data: projectAnalytics, isLoading: projectAnalyticsLoading } =
    useGetProjectAnalytics({ projectId });

  const isLoading = isProjectLoading || projectAnalyticsLoading;

  if (isLoading) {
    return <PageLoader />;
  }

  if (!projectDetails) {
    return <ErrorPage message="Project Details not found!" />;
  }

  return (
    <div className="relative flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={projectDetails.name}
            image={projectDetails.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold text-indigo-600">
            {projectDetails.name}
          </p>
        </div>
        <div>
          <Button size={'sm'} variant={'secondary'} asChild>
            <Link
              href={`/workspaces/${projectDetails.workspaceId}/projects/${projectDetails.$id}/settings`}
            >
              <PencilIcon className="mr-2 !size-4" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
      {projectAnalytics && <ProjectAnalytics data={projectAnalytics} />}
      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};
