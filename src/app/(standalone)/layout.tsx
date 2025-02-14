import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@/features/auth/components/user-button";

interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="absolute inset-0 h-full z-0 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex relative justify-between items-center h-20">
          <Link href={"/"}>
            <div className="flex items-center gap-x-3 w-fit">
              <Image src={"/logo.jpg"} alt="TaskFlow" width={45} height={50} />
              <Image
                src={"/logo-text.png"}
                alt="TaskFlow"
                width={80}
                height={50}
              />
            </div>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandaloneLayout;
