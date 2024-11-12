import SubTitle from './sub-title';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Article({ title, children }: Props) {
  return (
    <article className="flex flex-col gap-3 border-b border-gray-200 py-6 last:border-none ss:flex-row sm:gap-14 sm:py-8">
      <SubTitle className="shrink-0 ss:w-[200px] ss:text-right sm:w-[300px]">{title}</SubTitle>
      <div className="w-full text-lg font-light sm:pt-[2px] sm:text-xl">{children}</div>
    </article>
  );
}
