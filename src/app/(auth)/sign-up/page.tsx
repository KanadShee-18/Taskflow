import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import { SignUpCard } from '@/features/auth/components/sign-up-card';

const SignUpPage = async () => {
  const user = await getCurrent();
  if (user) redirect('/dashboard');
  return (
    <div>
      <div className="relative">
        <SignUpCard />
      </div>
    </div>
  );
};

export default SignUpPage;
