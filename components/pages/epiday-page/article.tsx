import SubTitle from './sub-title';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Article({ title, children }: Props) {
  return (
    <article className="ss:flex-row flex flex-col gap-3 border-b border-gray-200 py-6 last:border-none sm:gap-14 sm:py-8">
      <SubTitle className="ss:w-[200px] ss:text-right shrink-0 sm:w-[300px]">{title}</SubTitle>
      <div className="w-full text-xl font-light sm:text-2xl">{children}</div>
    </article>
  );
}
