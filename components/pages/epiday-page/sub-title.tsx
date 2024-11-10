interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SubTitle({ children, className }: Props) {
  return <h3 className={`text-2xl font-medium text-gray-500 ${className}`}>{children}</h3>;
}
