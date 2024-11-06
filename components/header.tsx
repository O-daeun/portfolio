import Link from 'next/link';
import InnerLayout from './inner-layout';

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 h-20 w-full min-w-fit border-b border-gray-100 bg-white">
      <InnerLayout className="flex h-full items-center gap-8">
        <Link href="/" className="text-3xl font-semibold hover:no-underline">
          오다은
        </Link>
        <nav className="flex gap-4">
          <Link href="/resume">이력서</Link>
          <Link href="/epiday">포트폴리오</Link>
        </nav>
      </InnerLayout>
    </header>
  );
}
