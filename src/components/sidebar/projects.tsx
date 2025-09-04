'use client';

import { useGetProjects } from '@/features/projects/api/use-get-projects';
import { ProjectAvatar } from '@/features/projects/components/project-avatar';
import { UseCreateProjectModal } from '@/features/projects/hook/use-create-project-modal';
import { useWorkspaceId } from '@/features/workspaces/hooks/workspaceId-hook';
import { cn } from '@/lib/utils';
import { FolderOpenDot } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { RiAddCircleFill } from 'react-icons/ri';

export const Projects = () => {
  const pathname = usePathname();
  const { open } = UseCreateProjectModal();

  const workspaceId = useWorkspaceId();
  const { data } = useGetProjects({ workspaceId });

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <span className="flex w-fit items-center gap-2 text-xs uppercase text-indigo-500">
          <FolderOpenDot className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Projects
          </p>
        </span>
        <RiAddCircleFill
          onClick={open}
          className="size-5 cursor-pointer text-indigo-500 transition hover:opacity-75"
        />
      </div>
      {data?.documents.map((project) => {
        const href = `/dashboard/workspaces/${workspaceId}/projects/${project.$id}`;
        const isActive = pathname === href;

        return (
          <Link href={href} key={project.$id}>
            <div
              className={cn(
                'group flex items-center gap-2.5 rounded-md p-2.5 text-sm font-medium text-neutral-500 transition hover:text-indigo-500',
                isActive &&
                  'bg-indigo-100 text-primary shadow-md hover:opacity-100'
              )}
            >
              <span className="flex w-full items-center gap-x-4 truncate">
                <ProjectAvatar
                  image={project.imageUrl}
                  name={project.name}
                  className="transition-all duration-300 group-hover:translate-x-1"
                />
                <p className="transition-all duration-300 group-hover:-translate-x-1">
                  {project?.name}
                </p>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
