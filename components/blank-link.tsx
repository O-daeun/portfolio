import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function BlankLink({ children, href, className }: Props) {
  return (
    <Link href={href} target="_blank" className={className}>
      {children}
    </Link>
  );
}
