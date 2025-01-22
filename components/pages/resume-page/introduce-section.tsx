import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

export default function IntroduceSection() {
  return (
    <section className="mt-16 flex flex-col gap-6 sm:mt-20 sm:flex-row sm:gap-10">
      <SectionTitle className="w-[300px] shrink-0">INTRODUCE</SectionTitle>
      <div className="font-light leading-[1.75]">
        웹 퍼블리셔로서 다져온 CSS·HTML 기본기를 바탕으로 Vue와 React 등 최신 프레임워크를 빠르게
        익히며 프론트엔드 역량을 쌓아왔습니다.
        <br />
        <br />웹 에이전시 십이지(주) 근무 당시{' '}
        <BlankLink href="https://hyundai-isc.com">현대ISC</BlankLink>와{' '}
        <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink> 웹사이트 퍼블리싱을
        전담하며, 기획자·디자이너·개발자와 협업해 반응형 웹 구현과 SEO 최적화에 기여했습니다. 특히
        반복되는 코드 작업을 효율화하기 위해 자주 쓰는 코드를 정리해 재사용성을 높였으며, 프로젝트
        완성도를 높이기 위해 세밀한 UI 디테일에 집중했습니다.
        <br />
        <br />
        코드잇(주) 프론트엔드 부트캠프에서 React와 Next.js 및 다양한 라이브러리를 학습하며 API
        연동과 SSR 환경을 실습하며 실전 경험을 쌓았습니다. 또한 팀 프로젝트를 통해 코드 재사용성과
        협업 프로세스를 체득했습니다. 
        {/* 이 부분 수정해보자 */}
        <br />
        <br />
        크로마(주) 인턴 기간에는 그룹웨어 프로젝트의 UI 개발을 담당하며 Nuxt.js와 Tailwind CSS를
        활용해 일정 관리 페이지를 구현하고, API 연동으로 데이터를 시각화하고 백엔드 개발자와의
        소통을 통해 협업 능력을 강화했습니다.
        <br />
        <br />
        저는 새로운 기술과 변화에 주저하지 않고, 성장과 도전을 위한 준비가 되어 있습니다. 귀사에서
        배움을 실천하며 팀의 성장을 함께 이끌어가는 개발자가 되고 싶습니다.
        {/* <br className="hidden sm:block" /> */}
        <div className="mt-4 flex justify-end">
          <div className="w-fit rounded-sm bg-orange-500 px-1 text-sm font-light text-white">
            희망 연봉: 면접 후 협의
          </div>
        </div>
      </div>
    </section>
  );
}
