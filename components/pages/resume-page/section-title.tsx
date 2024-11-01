interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: Props) {
  return <h2 className={`text-4xl font-medium text-var-main ${className}`}>{children}</h2>;
}
