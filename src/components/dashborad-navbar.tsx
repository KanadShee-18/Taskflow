import { UserButton } from "@/features/auth/components/user-button";
import { MobileSidebar } from "./sidebar/mobile-sidebar";

export const DashboardNav = () => {
  return (
    <nav className="pt-4 w-full px-6 flex items-center justify-between">
      <div className="hidden lg:flex flex-col">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Track all of your projects and tasks here
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
