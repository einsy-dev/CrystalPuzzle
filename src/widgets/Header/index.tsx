'use client';
import Link from 'next/link';

import Logo from '@/assets/header/logo.svg';
import LogoTitle from '@/assets/header/logo_title.svg';

export default function Header({}) {
  return (
    <header className='shadow-xl'>
      <div className="container">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo className="" />
            <LogoTitle className="" />
          </div>
        </Link>
      </div>
    </header>
  );
}
