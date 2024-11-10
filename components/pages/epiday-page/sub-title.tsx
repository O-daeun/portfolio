interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SubTitle({ children, className }: Props) {
  return (
    <h3 className={`text-xl font-medium text-gray-500 sm:text-2xl ${className}`}>{children}</h3>
  );
}
