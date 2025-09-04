'use client';

import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { DottedSeperator } from '../dotted-seperator';
import NavigationMenus from './navigation-menus';
import { WorkspaceSwitcher } from '@/features/workspaces/components/workspaces-switcher';
import { Projects } from './projects';

const Sidebar = () => {
  return (
    <aside className="h-full bg-zinc-100 p-4">
      <Link href={'/'} className="flex w-full items-center justify-start">
        <div className="flex w-fit items-center gap-3">
          <Image src={'/logo.jpg'} alt="TaskFlow" width={45} height={50} />
          <Image src={'/logo-text.png'} alt="TaskFlow" width={80} height={50} />
        </div>
      </Link>
      <DottedSeperator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeperator className="my-4" />
      <NavigationMenus />
      <DottedSeperator className="my-4" />
      <Projects />
    </aside>
  );
};

export default Sidebar;
