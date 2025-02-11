"use client";

import { SignInCard } from "@/features/auth/components/sign-in-card";
import React from "react";

const SignInPage = () => {
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
