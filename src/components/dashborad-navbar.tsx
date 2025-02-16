import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./sidebar/mobile-sidebar";

export const DashboardNav = () => {
  return (
    <nav className="pt-4 px-6 flex relative items-center justify-between">
      <div className="hidden lg:flex flex-col">
        <h1 className="text-2xl font-semibold text-indigo-600">Home</h1>
        <p className="text-muted-foreground text-sm lg:text-base">
          Track all of your projects and tasks here
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
