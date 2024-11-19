import BlankLink from '@/components/blank-link';
import InnerLayout from '@/components/inner-layout';
import ProgressButtons from '@/components/pages/portfolio-page/progress-buttons';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

function InnerWrap({ children }: { children: React.ReactNode }) {
  return (
    <InnerLayout className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-5">
      {children}
    </InnerLayout>
  );
}

function Logo({ name, className }: { name: string; className: string }) {
  return (
    <h2>
      <Image
        src={`/portfolio/${name}-logo.svg`}
        width={300}
        height={100}
        alt={`${name} 로고`}
        className={className}
      />
    </h2>
  );
}

function Overview({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-4 font-light sm:mt-6 sm:text-xl">{children}</h3>;
}

function ListWrap({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex flex-col gap-5">{children}</div>;
}

function List({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

function ListTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg">{children}</h4>;
}

function ListText({ children }: { children: React.ReactNode }) {
  return <span className="">{children}</span>;
}

function ListTags({ skills }: { skills: string[] }) {
  return (
    <ul className="mt-1 flex flex-wrap gap-1">
      {skills.map((skill, index) => (
        <li key={index} className="rounded-[4px] bg-slate-500 px-1 text-sm font-light text-white">
          {skill}
        </li>
      ))}
    </ul>
  );
}

function ImageBox({
  name,
  maxHeight,
  isPriority,
}: {
  name: string;
  maxHeight: string;
  isPriority?: boolean;
}) {
  return (
    <div className="flex shrink-0 gap-2">
      <Image
        src={`/portfolio/${name}-pc.png`}
        width={800}
        height={1180}
        alt={`${name} PC 메인사진`}
        className={`w-[calc(100%-118px)] rounded-lg object-cover object-top shadow-custom ss:w-[calc(100%-168px)] md:w-[400px] ${maxHeight}`}
        priority={isPriority}
      />
      <Image
        src={`/portfolio/${name}-mo.png`}
        width={200}
        height={600}
        alt={`${name} mo 메인사진`}
        className={`w-[100px] rounded-lg object-cover object-top shadow-custom ss:w-[150px] md:w-[110px] ${maxHeight}`}
        priority={isPriority}
      />
    </div>
  );
}

function Button({
  name,
  href,
  children,
  isNotBlank,
}: {
  name: 'epiday' | 'globalNomad' | 'hyundaiIsc';
  href: string;
  children: React.ReactNode;
  isNotBlank?: boolean;
}) {
  const color = {
    epiday: 'bg-[#373737] ',
    globalNomad: 'bg-[#0B3B2D]',
    hyundaiIsc: 'bg-[#002D72]',
  };

  if (isNotBlank)
    return (
      <Link
        href={href}
        className={`group flex w-fit items-center gap-3 rounded-full py-2 pl-4 pr-2 text-sm font-extralight text-white duration-200 hover:no-underline hover:shadow-md sm:py-3 sm:pl-5 sm:pr-4 ${color[name]}`}
      >
        <span>{children}</span>
        <IoIosArrowRoundForward className="size-6 duration-100 group-hover:translate-x-1" />
      </Link>
    );

  return (
    <BlankLink
      href={href}
      className={`group flex w-fit items-center gap-3 rounded-full py-2 pl-4 pr-2 text-sm font-extralight text-white duration-200 hover:no-underline hover:shadow-md sm:py-3 sm:pl-5 sm:pr-4 ${color[name]}`}
    >
      <span>{children}</span>
      <IoIosArrowRoundForward className="size-6 duration-100 group-hover:translate-x-1" />
    </BlankLink>
  );
}

export default function PortfolioPage() {
  return (
    <div>
      <ProgressButtons />
      <section id="Epiday" className="bg-slate-200 py-20 sm:py-32">
        <InnerWrap>
          <div>
            <Logo name="epiday" className="h-auto w-[150px] sm:w-[200px]" />
            <Overview>
              감정 상태를 기록하고 명언과 글귀를
              <br />
              공유하며 소통할 수 있는 서비스
            </Overview>
            <ListWrap>
              <List>
                <ListTitle>개발 기간</ListTitle>
                <ListText>2024. 09 - 2024. 10</ListText>
              </List>
              <List>
                <ListTitle>기술 스택</ListTitle>
                <ListTags
                  skills={[
                    'Next.js',
                    'React.js',
                    'TypeScript',
                    'React Query',
                    'Next Auth',
                    'React Hook Form',
                    'Tailwind CSS',
                    'Zustand',
                  ]}
                />
              </List>
              <List>
                <ListTitle>기여도</ListTitle>
                <ListText>프론트엔드 개발 기여도 100% (총 10페이지)</ListText>
              </List>
            </ListWrap>
            <div className="mt-8 flex flex-col gap-2">
              <Button href="/epiday" name="epiday" isNotBlank>
                상세설명 보기
              </Button>
              <Button href="https://epiday.vercel.app/" name="epiday">
                홈페이지 바로가기
              </Button>
              <Button href="https://github.com/O-daeun/epiday" name="epiday">
                Github 바로가기
              </Button>
            </div>
          </div>
          <ImageBox name="epiday" maxHeight="max-h-[350px] ss:max-h-[590px]" isPriority />
        </InnerWrap>
      </section>
      <section id="GlobalNomad" className="bg-[#a5e4d2] py-20 sm:py-32">
        <InnerWrap>
          <div>
            <Logo name="global-nomad" className="h-auto w-[230px] sm:w-[300px]" />
            <Overview>
              여행·체험 상품을 한눈에 확인하고
              <br />
              간단히 예약할 수 있는 플랫폼
            </Overview>
            <ListWrap>
              <List>
                <ListTitle>개발 기간</ListTitle>
                <ListText>2024. 07</ListText>
              </List>
              <List>
                <ListTitle>기술 스택</ListTitle>
                <ListTags
                  skills={['Next.js', 'React.js', 'TypeScript', 'React Query', 'Tailwind CSS']}
                />
              </List>
              <List>
                <ListTitle>기여도</ListTitle>
                <ListText>
                  프론트엔드 개발 기여도 20%
                  <br />- 메인 페이지 전담
                  <br />- 전체 페이지 반응형 웹 작업 담당
                </ListText>
              </List>
            </ListWrap>
            <div className="mt-8 flex flex-col gap-2">
              <Button href="https://globalnomad-ko.vercel.app" name="globalNomad">
                홈페이지 바로가기
              </Button>
            </div>
          </div>
          <ImageBox name="global-nomad" maxHeight="max-h-[400px] ss:max-h-[490px]" />
        </InnerWrap>
      </section>
      <section id="Hyundai ISC" className="bg-[#85afee] py-20 sm:py-32">
        <InnerWrap>
          <div>
            <Logo name="hyundai-isc" className="h-auto w-[150px] sm:w-[200px]" />
            <Overview>현대ISC 공식 웹사이트</Overview>
            <ListWrap>
              <List>
                <ListTitle>퍼블리싱 기간</ListTitle>
                <ListText>2023. 01 - 2023. 02</ListText>
              </List>
              <List>
                <ListTitle>기술 스택</ListTitle>
                <ListTags skills={['HTML', 'CSS', 'JQuery']} />
              </List>
              <List>
                <ListTitle>기여도</ListTitle>
                <ListText>
                  웹 퍼블리싱 기여도 100%
                  <br />
                  (홈페이지 총 19페이지, 관리자 페이지)
                </ListText>
              </List>
            </ListWrap>
            <div className="mt-8 flex flex-col gap-2">
              <Button href="https://hyundai-isc.com/" name="hyundaiIsc">
                홈페이지 바로가기
              </Button>
            </div>
          </div>
          <ImageBox name="hyundai-isc" maxHeight="max-h-[400px] ss:max-h-[485px]" />
        </InnerWrap>
      </section>
    </div>
  );
}
