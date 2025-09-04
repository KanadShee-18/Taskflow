import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { WorkspaceSettingsClient } from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taskflow - Workspace Settings',
  description: 'Update your workspace according to your needs.',
};

const WorkspaceSettings = async () => {
  const user = await getCurrent();
  if (!user) redirect('/sign-in');

  return <WorkspaceSettingsClient />;
};

export default WorkspaceSettings;
