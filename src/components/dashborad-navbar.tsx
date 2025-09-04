'use client';

import { UserButton } from '@/features/auth/components/user-button';
import { MobileSidebar } from './sidebar/mobile-sidebar';
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { Button } from './ui/button';
import { ChevronLeftIcon } from 'lucide-react';

const NavigationMenusMap = {
  tasks: {
    title: 'My Tasks',
    description: 'View all tasks here',
  },
  projects: {
    title: 'My Project',
    description: 'Find all your projects tasks in multiple views',
  },
};

const defaultNavigationMap = {
  title: 'Home',
  description: 'Track all of your projects and tasks here',
};

export const DashboardNav = () => {
  const pathname = usePathname();
  const partsInPathname = pathname.split('/');

  const pathnameKey = partsInPathname[3] as keyof typeof NavigationMenusMap;

  const { title, description } =
    NavigationMenusMap[pathnameKey] || defaultNavigationMap;

  return (
    <nav className="relative flex items-center justify-between px-6 pt-4">
      <div className="hidden flex-col lg:flex">
        <h1 className="text-2xl font-semibold text-indigo-600">{title}</h1>
        <p className="text-sm text-muted-foreground lg:text-base">
          {description}
        </p>
      </div>
      <MobileSidebar />
      <div className="flex flex-row items-center gap-x-3">
        <Link href={'/'}>
          <Button className="group bg-gradient-to-r from-indigo-200 to-teal-200 text-slate-800 transition-colors duration-300 hover:bg-gradient-to-br hover:from-teal-300 hover:to-indigo-300">
            <ChevronLeftIcon className="transition-all duration-300 ease-in-out group-hover:-translate-x-1" />
            Home
          </Button>
        </Link>
        <UserButton />
      </div>
    </nav>
  );
};
