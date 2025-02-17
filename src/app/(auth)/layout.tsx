"use client";

import Logo from "@/components/auth/main-logo";
import { Button } from "@/components/ui/button";
import { AuthClientPage } from "@/features/auth/components/auth-landing";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

// const AuthLayout = ({ children }: AuthLayoutProps) => {
//   const pathname = usePathname();
//   return (
//     <main className="bg-neutral-100 min-h-screen">
//       <div className="absolute inset-0 h-full z-0 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
//       <div className="mx-auto max-w-screen-2xl p-4">
//         <div className="relative z-[10]">
//           <nav className="flex justify-between items-center">
//             <Logo />
//             <Button variant={"secondary"}>
//               <Link href={`${pathname === "/sign-in" ? "sign-up" : "sign-in"}`}>
//                 {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
//               </Link>
//             </Button>
//           </nav>
//           <AuthClientPage />
//         </div>
//         <div className="flex relative z-[20] flex-col items-center justify-center pt-4 md:pt-14">
//           {children}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AuthLayout;

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  return (
    <main className="bg-neutral-100 min-h-screen relative">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full z-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="mx-auto max-w-screen-2xl p-4 relative z-20">
        {/* Navbar with higher z-index */}
        <nav className="flex justify-between items-center relative z-50">
          <Logo />
          <Button variant={"secondary"}>
            <Link href={`${pathname === "/sign-in" ? "sign-up" : "sign-in"}`}>
              {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>

        {/* Background Image */}
        <AuthClientPage />

        {/* Main Content */}
        <div className="flex relative z-50 flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
