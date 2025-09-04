import { MainLogo } from '@/components/common/app-logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { UserButton } from '@/features/auth/components/user-button';
import { getCurrent } from '@/features/auth/queries';
import { ChevronRightIcon, Feather, Layers2, Users } from 'lucide-react';
import { Link } from 'next-view-transitions';

export async function Navbar() {
  const user = await getCurrent();

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[999] w-full backdrop-blur-lg transition-all duration-300`}
    >
      <div className="container mx-auto flex max-w-[1408px] items-center justify-between px-4 py-3 md:py-4">
        <MainLogo />

        <div className="hidden items-center space-x-8 text-sm font-semibold md:flex">
          <Link
            href="/#features"
            className="group flex items-center gap-3 text-gray-600 transition hover:text-indigo-600"
          >
            <Feather className="size-4 transition-all duration-300 group-hover:translate-x-1" />
            <p className="transition-all duration-300 group-hover:-translate-x-1">
              Features
            </p>
          </Link>
          <div className="h-5">
            <Separator orientation="vertical" />
          </div>
          <Link
            href="/#how-it-works"
            className="group flex items-center gap-3 text-gray-600 transition hover:text-indigo-600"
          >
            <Layers2 className="size-4 transition-all duration-300 group-hover:translate-x-1" />
            <p className="transition-all duration-300 group-hover:-translate-x-1">
              Workflow
            </p>
          </Link>
          <div className="h-5">
            <Separator orientation="vertical" />
          </div>
          <Link
            href="/#userRoles"
            className="group flex items-center gap-3 text-gray-600 transition hover:text-indigo-600"
          >
            <Users className="size-4 transition-all duration-300 group-hover:translate-x-1" />
            <p className="transition-all duration-300 group-hover:-translate-x-1">
              Role
            </p>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          {!user && (
            <Link href={'/sign-in'} className="hidden md:block">
              <Button variant="secondary">{'Login'}</Button>
            </Link>
          )}

          <Link href={user ? '/dashboard' : '/sign-up'}>
            <Button className="group bg-gradient-to-r from-indigo-600 to-teal-500 transition-all duration-300 hover:bg-gradient-to-br">
              {user ? 'Workspaces' : 'Get Started'}
              <ChevronRightIcon className="transition-all duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>

          {user && <UserButton />}
        </div>
      </div>
    </nav>
  );
}
