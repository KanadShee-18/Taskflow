import { getCurrent } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";
import React from "react";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");
  return (
    <div>
      <div className="absolute inset-0 h-full z-0 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
