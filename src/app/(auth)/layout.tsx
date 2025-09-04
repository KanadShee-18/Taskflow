// "use client";

import { Navbar } from '@/components/landing/landing-nav';
import { AuthClientPage } from '@/features/auth/components/auth-landing';
import { Metadata } from 'next';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Taskflow - Authentication',
  description: 'Authenticate to get best result from our side',
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="relative min-h-screen bg-neutral-100">
      <Navbar />
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative z-20 mx-auto max-w-screen-2xl p-4">
        {/* <AuthClientPage /> */}
        <div className="relative z-50 flex flex-col items-center justify-center pt-24 md:pt-32">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
