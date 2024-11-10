import Article from './article';
import Section from './section';

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-4">{children}</ul>;
}

function Li({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="ml-4 list-disc text-lg sm:text-xl">
      <h4 className="text-var-epiday-black font-medium">{title}</h4>
      <p className="mt-1 text-base sm:text-lg">{children}</p>
    </li>
  );
}

export default function TechStackSection() {
  return (
    <Section title="기술 스택">
      <Article title="Routing & Rendering">
        <Ul>
          <Li title="Next.js">SSR(랜딩 페이지에 사용) 및 CSR을 혼합한 라우팅과 렌더링 최적화</Li>
        </Ul>
      </Article>
      <Article title="Styling">
        <Ul>
          <Li title="Tailwind CSS">
            유틸리티 기반의 CSS 프레임워크로 빠르고 효율적인 스타일링 구현
          </Li>
          <Li title="Heroicons">Next.js 페이지에 아이콘 추가</Li>
        </Ul>
      </Article>
      <Article title="State Management">
        <Ul>
          <Li title="React Query">API 데이터 호출 및 캐싱, 상태 관리</Li>
          <Li title="Zustand">전역 상태 관리 (모달과 토스트)</Li>
        </Ul>
      </Article>
      <Article title="State Management">
        <Ul>
          <Li title="React Query">API 데이터 호출 및 캐싱, 상태 관리</Li>
          <Li title="Zustand">전역 상태 관리 (모달과 토스트)</Li>
        </Ul>
      </Article>
      <Article title="Functional Components">
        <Ul>
          <Li title="react-calendar">달력 컴포넌트</Li>
          <Li title="recharts">감정 차트 데이터 시각화</Li>
          <Li title="react-avatar-editor">프로필 이미지 편집 (확대 및 위치 조정 가능)</Li>
        </Ul>
      </Article>
      <Article title="Deployment">
        <Ul>
          <Li title="Vercel">프로젝트 배포 및 관리</Li>
        </Ul>
      </Article>
    </Section>
  );
}
