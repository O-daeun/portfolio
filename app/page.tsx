import InnerLayout from '@/components/inner-layout';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center gap-4 rounded-full border border-white py-4 pl-8 pr-6 font-extralight text-white duration-200 hover:bg-white hover:font-normal hover:text-var-main hover:no-underline hover:shadow-md"
    >
      <span>{children}</span>
      <IoIosArrowRoundForward className="size-8 duration-100 group-hover:translate-x-1" />
    </Link>
  );
}

export default function Page() {
  return (
    <div>
      <main className="mx-auto h-screen min-h-[720px] w-full min-w-fit max-w-[2000px] bg-[url('/main.jpg')] bg-cover bg-center">
        <InnerLayout className="flex h-full flex-col items-end justify-between pb-12 pt-36">
          <h1 className="w-full text-right text-3xl font-extralight leading-loose text-white">
            <b>정돈된 코드</b>와 <b>깔끔한 UI</b>를 지향하는 개발자 <br />
            <span className="text-4xl">
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
