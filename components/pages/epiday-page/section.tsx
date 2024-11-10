interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-var-epiday-black text-3xl font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
