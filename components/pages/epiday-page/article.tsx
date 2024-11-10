import SubTitle from './sub-title';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Article({ title, children }: Props) {
  return (
    <article className="flex gap-14 border-b border-gray-200 py-8 last:border-none">
      <SubTitle className="w-[300px] shrink-0 text-right">{title}</SubTitle>
      <div className="w-full text-2xl font-light">{children}</div>
    </article>
  );
}
