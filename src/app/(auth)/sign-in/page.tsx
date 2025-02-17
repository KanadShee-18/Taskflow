import { getCurrent } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";
import React from "react";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/");
  return (
    <div>
      <div className="relative">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
