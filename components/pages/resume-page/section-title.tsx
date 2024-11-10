interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className }: Props) {
  return (
    <h2 className={`text-3xl font-medium text-var-main sm:text-4xl ${className}`}>{children}</h2>
  );
}
