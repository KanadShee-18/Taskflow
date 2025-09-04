import { getCurrent } from '@/features/auth/queries';
import { TaskViewSwitcher } from '@/features/tasks/components/task-view-switcher';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Taskflow - Workspace Tasks',
  description: 'Get your all workspace tasks over here.',
};

const TasksPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <div className="relative flex h-full flex-col">
      <TaskViewSwitcher />
    </div>
  );
};

export default TasksPage;
