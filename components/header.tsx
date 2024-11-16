'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import InnerLayout from './inner-layout';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-sm font-light duration-100 hover:font-medium hover:no-underline sm:text-base ${pathname === href ? 'font-medium' : ''}`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-14 w-full min-w-fit border-b border-gray-100 bg-white sm:h-20">
      <InnerLayout className="flex h-full items-center gap-6 sm:gap-8">
        <Link href="/" className="text-xl font-semibold hover:no-underline sm:text-3xl">
          오다은
        </Link>
        <nav className="flex gap-4">
          <NavLink href="/resume">이력서</NavLink>
          <NavLink href="/portfolio">포트폴리오</NavLink>
        </nav>
      </InnerLayout>
    </header>
  );
}
