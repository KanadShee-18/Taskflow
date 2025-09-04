import { DashboardNav } from '@/components/dashborad-navbar';
import Sidebar from '@/components/sidebar/sidebar-section';
import CreateProjectModal from '@/features/projects/components/create-project-modal';
import { CreateTaskModal } from '@/features/tasks/components/create-task-modal';
import { EditTaskModal } from '@/features/tasks/components/edit-task-modal';
import CreateWorkspaceModal from '@/features/workspaces/components/create-workspace-modal';
import { Metadata } from 'next';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Taskflow - Workspaces',
  description:
    'Your own place. Plan, manage, design your next big adventure with your teammates.',
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <CreateWorkspaceModal />
      <CreateProjectModal />
      <CreateTaskModal />
      <EditTaskModal />
      <div className="flex h-full w-full">
        <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="fixed left-0 top-0 hidden h-full overflow-y-auto lg:block lg:w-[264px]">
          <Sidebar />
        </div>
        <div className="w-full lg:pl-[264px]">
          <div className="mx-auto h-full max-w-screen-2xl">
            <DashboardNav />
            <main className="flex h-full flex-col px-6 py-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
