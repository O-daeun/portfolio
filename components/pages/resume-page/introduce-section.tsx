import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

export default function IntroduceSection() {
  return (
    <section className="mt-20 flex gap-10">
      <SectionTitle className="w-[300px]">INTRODUCE</SectionTitle>
      <p className="">
        웹 퍼블리셔로서의 경험을 토대로 탄탄한 CSS 기술 능력과 함께 지속적인 웹 개발 공부를 통해
        스스로 발전해 나가고 있습니다.
        <br />
        <br />웹 에이전시에서 웹 퍼블리싱을 100% 담당하여{' '}
        <BlankLink href="https://hyundai-isc.com">현대ISC</BlankLink>,{' '}
        <BlankLink href="https://www.gpac-kpac.com">한국폴리아세탈(주)</BlankLink> 등의 기업
        홈페이지를 구축하였고, 그 외에도 메인으로 담당하여{' '}
        <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink>, 2022 crocs
        뮤직컨테스트 등을 구현하면서 빠르게 html, css 및 웹의 기초를 익혔습니다.
        <br />
        <br />
        그리고 최신 트렌드에 맞추어 React와 Next.js, Tailwindcss 등을 새로 학습하여 개인 프로젝트로{' '}
        <BlankLink href="https://epiday.vercel.app/">에피데이</BlankLink>를 혼자 작업해보며 어느
        때에 SSR과 CSR을 적용할지와 컴포넌트는 어떻게 분리하고 관리할지 등을 익혔습니다.
        <br />
        <br />그 외에도 스프린트 FE과정을 수료하며 세 번의 팀프로젝트에서 두 번의 팀장과 한 번의
        팀원을 경험해보며 어떻게 커뮤니케이션을 해야하는지도 익혔습니다.
      </p>
    </section>
  );
}