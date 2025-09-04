'use client';

import { NAVIGATION_ITEMS } from '@/utils/constants';
import { Link } from 'next-view-transitions';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useWorkspaceId } from '@/features/workspaces/hooks/workspaceId-hook';

const NavigationMenus = () => {
  const pathname = usePathname();
  const workspaceId = useWorkspaceId();
  return (
    <ul className="flex flex-col">
      {NAVIGATION_ITEMS.map((item) => {
        const actualRedirectHref =
          item.tag === 'tasks' || item.tag === 'home'
            ? `/dashboard/workspaces/${workspaceId}${item.href}`
            : `/workspaces/${workspaceId}${item.href}`;
        const isActiveMenu = pathname === actualRedirectHref;
        const Icon = isActiveMenu ? item.activeIcon : item.icon;
        return (
          <Link href={actualRedirectHref} key={item.label} className="group">
            <div
              className={cn(
                'flex items-center gap-2.5 rounded-md p-2.5 text-sm font-medium text-neutral-500 transition hover:text-indigo-500',
                isActiveMenu &&
                  'bg-indigo-100 text-primary shadow-md hover:opacity-100'
              )}
            >
              <Icon className="size-5 text-neutral-500 transition duration-300 group-hover:text-indigo-600" />
              <p className="transition-all duration-300 group-hover:translate-x-2">
                {item.label}
              </p>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavigationMenus;
