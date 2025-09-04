import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { InviteCodeClientPage } from './client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taskflow - Join Workspace',
  description: 'Join and collaboarate with your teammates.',
};

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrent();
  if (!user) redirect('/sign-in');

  return <InviteCodeClientPage />;
};

export default WorkspaceIdJoinPage;
