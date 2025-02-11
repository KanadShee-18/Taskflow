"use client";

import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SignUpPage = () => {
  return (
    <div>
      <div className="absolute inset-0 h-full z-0 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative">
        <SignUpCard />
      </div>
    </div>
  );
};

export default SignUpPage;
