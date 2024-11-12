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
              <Li>SEO를 위한 서버 사이드 랜더링(SSR) 구현</Li>
              <Li>
                API로 최신 에피데이 데이터를 호출하는 코드
                <CodeBox>{landingCode}</CodeBox>
              </Li>
              <Li>상단 프로필 버튼 및 &apos;시작하기&apos; 버튼 클릭 시 로그인 페이지로 이동</Li>
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
              <Li>React hook form의 useForm 함수를 사용하여 form 관리 및 에러 메세지 관리</Li>
              <Li>Next Auth의 signIn 함수 사용하여 사용자 인증 관리</Li>
              <Li>
                사이트 둘러보기 위한 계정
                <div className="mt-1 w-fit rounded-sm bg-orange-500 px-2 py-1 text-sm font-light text-white">
                  ID : daeun@gmail.com
                  <br />
                  PW : dhekdms123 (오다은123)
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
              <Li>
                오늘의 에피데이가 있을 경우 보여지고, 없을 경우 보여지지 않음 (백엔드에서 보내줌)
              </Li>
              <Li>오늘의 감정을 선택할 수 있음</Li>
              <Li>최신 에피데이와 최신 댓글이 보여지고, 더보기 버튼 클릭 시 3개씩 추가로 보여줌</Li>
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
              <Li>에피데이가 최신순으로 나열되고, 더보기 버튼 클릭 시 8개씩 추가로 보여줌</Li>
              <Li>우측 새로고침 버튼 클릭 시 피드의 최신 상태를 동기화해줌</Li>
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
              <Li>
                키워드 검색 시 page param이 변경되면서 해당 단어가 내용 및 태그에 포함되어 있는
                에피데이를 보여줌
              </Li>
              <Li>
                키워드가 localStorage에 기록되어 최근 검색어에 리스트로 보여주고, &apos;모두
                지우기&apos; 버튼 클릭 시 삭제됨
              </Li>
              <Li>에피데이 리스트는 8개씩 무한스크롤로 보여줌</Li>
            </Ul>
            <PageImage name="search" />
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/epidays/833">에피데이 상세페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>본인이 작성한 글일 경우 우측에 케밥 버튼이 있어 수정 및 삭제 가능</Li>
              <Li>좋아요 버튼을 클릭할 수 있음</Li>
              <Li>공유하기 버튼 클릭 시 해당 URL이 복사됨</Li>
              <Li>하단에 댓글들이 7개씩 무한스크롤로 보여짐</Li>
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
              <Li>React Hook Form의 useForm 함수를 사용하여 form 관리 및 에러 메세지 관리</Li>
              <Li>
                저자의 경우 radio input 중 &apos;직접 입력&apos;을 선택하지 않으면 하단 input이
                보여지지 않도록 구현
              </Li>
              <Li>
                태그는 input에 작성한 후 Enter를 누르면 하단에 태그가 추가되고, X 버튼을 클릭하면
                삭제되도록 구현
              </Li>
              <Li>필수로 작성해야 하는 내용을 작성하면 완료 버튼이 활성화되도록 구현</Li>
            </Ul>
            <PageImage name="form" />
          </ContentsBox>
        </Article>
        <Article>
          <PageTitle link="/mypage">마이 페이지</PageTitle>
          <ContentsBox>
            <Ul>
              <Li>오늘의 감정 및 감정 캘린더, 감정 차트, 내가 작성한 에피데이와 댓글을 보여줌</Li>
              <Li>
                감정 캘린더에는 매일 기록했던 감정 이모지를 보여주고, 좌우 화살표를 클릭하면
                이전/다음 달의 감정 캘린더를 보여줌
              </Li>
              <Li>감정 차트는 상단 감정 캘린더가 보여주는 달의 이모지 비율을 나타냄</Li>
              <Li>
                내 에피데이/댓글은 최신 3개를 보여주고 더보기 버튼 클릭 시 3개씩 이어서 보여줌
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
