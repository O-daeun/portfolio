import InnerLayout from '@/components/inner-layout';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center gap-4 rounded-full border border-white py-3 pl-6 pr-4 font-extralight text-white duration-200 hover:bg-white hover:font-normal hover:text-var-main hover:no-underline hover:shadow-md sm:py-4 sm:pl-8 sm:pr-6"
    >
      <span>{children}</span>
      <IoIosArrowRoundForward className="size-8 duration-100 group-hover:translate-x-1" />
    </Link>
  );
}

export default function Page() {
  return (
    <div>
      <main className="h-real-screen mx-auto min-h-[500px] w-full min-w-fit max-w-[2000px] bg-[url('/main.jpg')] bg-cover bg-center sm:min-h-[720px]">
        <InnerLayout className="flex h-full flex-col items-end justify-between pb-12 pt-36">
          <h1 className="w-full text-right text-2xl font-extralight leading-normal text-white sm:text-3xl sm:leading-loose">
            <b>정돈된 코드</b>와 <b>깔끔한 UI</b>를 <br className="sm:hidden" />
            지향하는 개발자 <br />
            <span className="text-3xl leading-loose sm:text-4xl sm:leading-normal">
              <b>오다은</b>입니다.
            </span>
          </h1>
          <div className="flex flex-col items-end gap-4">
            <Button href="/resume">이력서 바로가기</Button>
            <Button href="/epiday">포트폴리오 바로가기</Button>
          </div>
        </InnerLayout>
      </main>
    </div>
  );
}
