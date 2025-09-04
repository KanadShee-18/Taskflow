import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { ProjectSettingsClientPage } from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taskflow - Manage Project Settings',
  description: 'Update your project settings according to your needs.',
};

const ProjectSettingsPage = async () => {
  const user = getCurrent();
  if (!user) {
    redirect('/sign-in');
  }

  return <ProjectSettingsClientPage />;
};

export default ProjectSettingsPage;
