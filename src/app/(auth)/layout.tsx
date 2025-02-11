"use client";

import Logo from "@/components/auth/main-logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <div className="relative z-10">
          <nav className="flex justify-between items-center">
            <Logo />
            <Button variant={"secondary"}>
              <Link href={`${pathname === "/sign-in" ? "sign-up" : "sign-in"}`}>
                {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
              </Link>
            </Button>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
