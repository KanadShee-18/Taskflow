import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { WorkspaceIdClient } from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taskflow - Workspace Insights',
  description: 'Get all insights about your workspace.',
};

const WorkspceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect('/sign-in');
  return (
    <div>
      <WorkspaceIdClient />
    </div>
  );
};

export default WorkspceIdPage;
