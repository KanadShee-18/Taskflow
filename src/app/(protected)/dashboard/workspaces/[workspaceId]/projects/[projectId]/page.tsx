import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { ProjectIdClientPage } from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taskflow - Project Insights',
  description: 'See and manage specific workspace project',
};

const ProjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect('/sign-in');
  }
  return <ProjectIdClientPage />;
};

export default ProjectIdPage;
