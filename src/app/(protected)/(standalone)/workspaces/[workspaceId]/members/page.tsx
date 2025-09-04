import { getCurrent } from '@/features/auth/queries';
import { MembersList } from '@/features/workspaces/components/members-list';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Taskflow - Workspace Members',
  description: 'Manage member role in workspace.',
};

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <div className="relative w-full md:max-w-xl">
      <MembersList />
    </div>
  );
};

export default WorkspaceIdMembersPage;
