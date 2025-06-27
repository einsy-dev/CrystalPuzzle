'use client';

import { routes, useSwipe } from '@/shared';
import { ChevronDown, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  className?: string;
}
const defaultStyle =
  'bg-gradient-light flex flex-col gap-4 p-6 bg-light absolute top-0 left-0 bottom-0 transition-all transform -translate-x-full w-3/4 sm:w-1/2';

const mdStyle =
  'md:p-0 md:py-6 md:translate-x-0 md:top-auto md:left-auto md:bottom-auto md:static md:w-1/3';

export function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false); // menu
  const [active, setActive] = useState(false); // sidebar itself
  const { data } = useSession();

  useSwipe(
    typeof document !== 'undefined' ? document : undefined,
    (e: boolean) => {
      setActive(e);
    },
    [],
  );
  return (
    <aside
      className={
        `${defaultStyle} ${mdStyle} ${active && 'translate-x-0'} lg:w-1/5` +
        ' ' +
        className
      }
    >
      <div className="flex gap-2 items-center">
        <img
          srcSet={`${data?.user?.image}, https://placehold.co/50x50`}
          alt={data?.user?.name}
          className="aspect-square rounded-full h-15"
        />
        <div className="flex flex-col">
          <span>{data?.user?.role}</span>
          <span>{data?.user?.name}</span>
        </div>
      </div>

      <nav className="after_underline before_underline after:mt-3 before:mb-3">
        <div
          className="link px-2 flex items-center justify-between py-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>Меню</span>
          <ChevronDown className={`duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>
        <ul
          className={`flex flex-col px-4 user-select-none overflow-hidden gap-2 ${
            open ? 'h-fit' : 'h-0'
          }`}
        >
          {routes[data?.user?.role as Role]?.map(({ name, path }) => (
            <li key={path} className="link">
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="link px-2 flex gap-2 items-center"
        onClick={() => {
          signOut();
        }}
      >
        <LogOut />
        Выйти
      </div>
    </aside>
  );
}
type Role = 'student' | 'trainer' | 'supervisor' | 'admin';
