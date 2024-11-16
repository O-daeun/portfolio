import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

export default function IntroduceSection() {
  return (
    <section className="mt-16 flex flex-col gap-6 sm:mt-20 sm:flex-row sm:gap-10">
      <SectionTitle className="w-[300px] shrink-0">INTRODUCE</SectionTitle>
      <div className="font-light leading-[1.75]">
        웹 퍼블리셔로서 쌓아온 CSS와 HTML의 탄탄한 기본기, 웹 표준에 대한 깊은 이해를 바탕으로
        프론트엔드 역량을 키워나가고 있습니다.
        <br />
        <br />웹 에이전시 근무 중 <BlankLink href="https://hyundai-isc.com">
          현대ISC
        </BlankLink>, <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink> 등의
        웹사이트 퍼블리싱 작업을 전담하며, 기획안과 디자인 시안을 반영한 반응형 웹 구현과 세밀한
        스타일링에 집중했습니다. 이 과정에서 기획자, 디자이너, 개발자와 지속적으로 소통하며
        웹사이트의 완성도를 높였으며, 검색엔진 최적화(SEO)를 위해 sementic 태그를 활용하고
        유지보수가 용이한 구조를 위해 노력했습니다.
        <br />
        <br />
        React와 같은 컴포넌트 기반 프레임워크를 통해 코드의 재사용성을 극대화하는 설계에 흥미를
        느끼며 Next.js와 React Query, TailwindCSS 등을 학습하며 프로젝트에 적용해 왔습니다. 특히
        개인 프로젝트인 <BlankLink href="https://epiday.vercel.app/">에피데이</BlankLink>
        에서는 SSR과 CSR의 장단점을 이해하며 적절한 적용 방식을 익히고 컴포넌트 관리 및 분리 방법을
        실습했으며, 지속적으로 코드 개선을 위해 노력하고 있습니다.
        <br />
        <br />
        또한, 세 번의 팀 프로젝트에서 두 차례 팀장을 맡으며 리더십을 발휘하고, 팀원으로도 참여하며
        효과적인 커뮤니케이션과 협업을 경험했습니다. 이를 통해 프로젝트 목표 달성을 위한 최적의
        방안을 모색하고 조율하는 능력을 기르게 되었습니다.
        <br />
        <br />
        제가 쌓아온 경험과 역량을 귀사의 프로젝트에 기여하며, <br className="hidden sm:block" />{' '}
        함께 성장할 수 있는 개발자가 되고 싶습니다.
        <div className="mt-4 flex justify-end">
          <div className="w-fit rounded-sm bg-orange-500 px-1 text-sm font-light text-white">
            희망 연봉: 면접 후 협의
          </div>
        </div>
      </div>
    </section>
  );
}
