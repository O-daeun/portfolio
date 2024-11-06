interface Props {
  children: React.ReactNode;
}

export default function SubTitle({ children }: Props) {
  return <h2 className="text-3xl font-semibold text-gray-500">{children}</h2>;
}
