import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

export default function IntroduceSection() {
  return (
    <section className="mt-20 flex gap-10">
      <SectionTitle className="w-[300px] shrink-0">INTRODUCE</SectionTitle>
      <p>
        웹 퍼블리셔로서의 경험을 토대로 탄탄한 CSS 기술 능력과 함께 지속적인 웹 개발 공부를 통해
        스스로 발전해 나가고 있습니다.
        <br />
        <br />웹 에이전시에서 근무하며 웹 퍼블리싱을 단독으로 담당하여{' '}
        <BlankLink href="https://hyundai-isc.com">현대ISC</BlankLink>,{' '}
        <BlankLink href="https://www.gpac-kpac.com">한국폴리아세탈(주)</BlankLink> 등의 기업
        홈페이지를 구축하였고, 그 외에도 메인으로 담당하여{' '}
        <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink>, 2022 crocs
        뮤직컨테스트 등을 구현하면서 html, css 및 웹의 기초를 익혔습니다.
        <br />
        그리고 그 경험을 통해 sematic tag를 더 꼼꼼히 작성하고 유지보수가 용이하게 구조를 잡고
        스타일링을 하는 등의 소신이 생겼습니다.
        <br />
        <br />
        그리고 컴포넌트 기반의 React를 접하며 반복작업을 줄이고 장기적으로 재활용가능한 컴포넌트를
        생성하는 재미를 느꼈으며, Next.js, Tailwindcss 등을 새로 학습하였고, 개인 프로젝트로{' '}
        <BlankLink href="https://epiday.vercel.app/">에피데이</BlankLink>를 혼자 작업해보며 어느
        때에 SSR과 CSR을 적용할지와 컴포넌트는 어떻게 분리하고 관리할지 등을 익혔습니다.
        <br />
        <br />그 외에도 스프린트 FE과정을 수료하며 세 번의 팀프로젝트에서 두 번의 팀장과 한 번의
        팀원을 경험해보며 어떻게 커뮤니케이션을 해야하는지도 익혔습니다.
      </p>
    </section>
  );
}
