interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function InnerLayout({ children, className }: Props) {
  return <div className={`mx-auto w-full max-w-[1000px] px-6 ${className}`}>{children}</div>;
}
