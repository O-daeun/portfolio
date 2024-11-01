import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function BlankLink({ children, href }: Props) {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
}
