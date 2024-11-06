interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Article({ title, children }: Props) {
  return (
    <article className="flex gap-14 border-b border-gray-200 py-8 last:border-none">
      <h3 className="w-[240px] shrink-0 text-right text-2xl font-medium text-gray-500">{title}</h3>
      <div className="w-full text-2xl">{children}</div>
    </article>
  );
}
