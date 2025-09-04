import { MainLogo } from "@/components/common/app-logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCurrent } from "@/features/auth/queries";
import { Feather, Layers2, Users } from "lucide-react";
import { Link } from "next-view-transitions";

export async function Navbar() {
  const user = await getCurrent();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 backdrop-blur-lg`}
    >
      <div className="container mx-auto max-w-[1408px] px-4 py-3 md:py-4 flex items-center justify-between">
        <MainLogo />

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <Link
            href="/#features"
            className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-3 group"
          >
            <Feather className="size-4 group-hover:translate-x-1 transition-all duration-300" />
            <p className="group-hover:-translate-x-1 transition-all duration-300">
              Features
            </p>
          </Link>
          <div className="h-5">
            <Separator orientation="vertical" />
          </div>
          <Link
            href="/#how-it-works"
            className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-3 group"
          >
            <Layers2 className="size-4 group-hover:translate-x-1 transition-all duration-300" />
            <p className="group-hover:-translate-x-1 transition-all duration-300">
              Workflow
            </p>
          </Link>
          <div className="h-5">
            <Separator orientation="vertical" />
          </div>
          <Link
            href="/#userRoles"
            className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-3 group"
          >
            <Users className="size-4 group-hover:translate-x-1 transition-all duration-300" />
            <p className="group-hover:-translate-x-1 transition-all duration-300">
              Role
            </p>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link href={`${user ? "/dashboard" : "/sign-in"}`}>
            <Button variant="secondary">{user ? "Workspace" : "Login"}</Button>
          </Link>
          {!user && (
            <Link href={"/sign-up"}>
              <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 hover:bg-gradient-to-br transition-all duration-300">
                {user ? "Workspace" : "Get Started"}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
