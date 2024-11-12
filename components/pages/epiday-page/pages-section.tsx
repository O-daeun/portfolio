'use client';

import BlankLink from '@/components/blank-link';
import CodeBox from '@/components/code-box';
import Image from 'next/image';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Section from './section';
import SubTitle from './sub-title';

const EPIDAY_URL = 'https://epiday.vercel.app';

const landingCode = `export default async function EpidaysSection() {
  const epidays = await getEpidays({ limit });
  // ...
}`;

function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex max-h-fit flex-col gap-4 transition-all duration-1000">
      {children}
    </article>
  );
}

function PageTitle({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <SubTitle className="flex items-center gap-3">
      {children}
      <BlankLink href={`${EPIDAY_URL}${link}`}>
        <FaExternalLinkAlt className="size-4" />
      </BlankLink>
    </SubTitle>
  );
}

function ContentsBox({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">{children}</div>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="ml-4 list-disc font-light">{children}</li>;
}

function CodeWord({ children }: { children: string }) {
  return (
    <span className="mr-[1px] rounded-[3px] bg-gray-500 px-[3px] py-[1px] text-sm text-white">
      {children}
    </span>
  );
}

function PageImageBox({ children, height }: { children: React.ReactNode; height: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex shrink-0 flex-col">
      <div
        className={`relative overflow-hidden rounded-lg shadow-custom transition-[max-height] duration-1000 ${isOpen ? 'max-h-full' : `max-h-[250px] ss:max-h-[300px] ${height}`}`}
      >
        {children}
        {!isOpen && (
          <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-gray-600">
            <button
              onClick={() => setIsOpen(true)}
              className="absolute bottom-3 left-1/2 flex h-8 w-36 -translate-x-1/2 items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white text-sm duration-100 hover:bg-blue-50"
            >
              페이지 펼쳐보기
              <IoIosArrowDown className="size-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PageImage({ name }: { name: string }) {
  return (
    <Image
      src={`/epiday/${name}.png`}
      width={800}
      height={1500}
      alt={name}
      className="w-full shrink-0 rounded-lg shadow-custom sm:w-[300px]"
    />
  );
}

export default function PagesSection() {
  return (
    <Section title="페이지 소개">
      <div className="mt-8 flex flex-col gap-16">
        <Article>
          <PageTitle link="/">랜딩 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>SEO 최적화를 위해 서버 사이드 렌더링(SSR) 구현</Li>
              <Li>
                최신 에피데이 데이터를 서버에서 미리 API로 불러옴
                <CodeBox>{landingCode}</CodeBox>
              </Li>
              <Li>상단 프로필 버튼과 &apos;시작하기&apos; 버튼 클릭 시 로그인 페이지로 이동</Li>
            </Ul>
            <PageImageBox height="sm:max-h-[280px]">
              <PageImage name="landing" />
            </PageImageBox>
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/login">로그인/회원가입 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>
                React Hook Form의 <CodeWord>useForm</CodeWord>으로 폼 상태 및 에러 메시지 관리
              </Li>
              <Li>
                NextAuth의 <CodeWord>signIn</CodeWord>을 활용한 사용자 인증 관리
              </Li>
              <Li>
                사이트 둘러보기용 계정 제공:
                <div className="mt-1 w-fit rounded-sm bg-orange-500 px-2 py-1 text-sm font-light text-white">
                  ID: daeun@gmail.com
                  <br />
                  PW: dhekdms123 (오다은123)
                </div>
              </Li>
            </Ul>
            <div className="flex shrink-0 flex-col gap-4">
              <PageImage name="login" />
              <PageImage name="signup" />
            </div>
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/">메인 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>오늘의 에피데이가 있을 경우 표시, 없으면 미표시</Li>
              <Li>오늘의 감정 선택 기능</Li>
              <Li>
                최신 에피데이와 댓글이 보여지며, &apos;더보기&apos; 클릭 시 3개씩 추가 로드,
                새로고침 버튼으로 최신 상태 동기화
              </Li>
            </Ul>
            <PageImageBox height="sm:max-h-[200px]">
              <PageImage name="epidays" />
            </PageImageBox>
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/feed">피드 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>최신순 에피데이 나열, &apos;더보기&apos; 클릭 시 8개씩 추가 로드</Li>
              <Li>새로고침 버튼으로 최신 상태 동기화</Li>
            </Ul>
            <PageImageBox height="sm:max-h-[200px]">
              <PageImage name="feed" />
            </PageImageBox>
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/search">검색 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>키워드 검색 시 해당 단어가 포함된 에피데이 리스트 표시</Li>
              <Li>
                검색어를 <CodeWord>localStorage</CodeWord>에 저장해 최근 검색어로 표시, &apos;모두
                지우기&apos; 버튼으로 삭제 가능
              </Li>
              <Li>에피데이 리스트는 8개씩 무한 스크롤로 표시</Li>
            </Ul>
            <PageImage name="search" />
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/epidays/833">에피데이 상세 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>본인 작성 글에는 수정/삭제 가능한 케밥 메뉴 표시</Li>
              <Li>좋아요 기능 및 URL 복사 기능 제공</Li>
              <Li>댓글은 7개씩 무한 스크롤로 표시</Li>
            </Ul>
            <PageImageBox height="sm:max-h-[200px]">
              <PageImage name="epidays-detail" />
            </PageImageBox>
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/addepiday">에피데이 작성/수정 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>
                React Hook Form의 <CodeWord>useForm</CodeWord>으로 폼 상태 및 에러 메시지 관리
              </Li>
              <Li>라디오 버튼 선택에 따라 input 필드 표시 여부 조정</Li>
              <Li>태그는 입력 후 Enter로 추가하고, X 버튼으로 삭제 가능</Li>
              <Li>필수 항목 작성 시 완료 버튼 활성화</Li>
            </Ul>
            <PageImage name="form" />
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/mypage">마이 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>오늘의 감정, 감정 캘린더, 감정 차트, 작성한 에피데이와 댓글 표시</Li>
              <Li>감정 캘린더에는 일별 감정 이모지 기록이 표시되며, 화살표로 월 변경 가능</Li>
              <Li>감정 차트는 선택한 월의 감정 비율을 시각화</Li>
              <Li>
                내 에피데이/댓글은 최신 3개만 표시, &apos;더보기&apos; 클릭 시 3개씩 추가 로드
              </Li>
            </Ul>
            <PageImageBox height="sm:max-h-[230px]">
              <PageImage name="mypage" />
            </PageImageBox>
          </ContentsBox>
        </Article>
      </div>
    </Section>
  );
}
