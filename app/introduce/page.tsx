import BlankLink from '@/components/blank-link';
import InnerLayout from '@/components/inner-layout';
import SectionTitle from '@/components/pages/resume-page/section-title';

export default function IntroducePage() {
  return (
    <InnerLayout className="my-20 sm:my-32">
      <h1 className="mb-10 text-[28px] !leading-[1.5] sm:text-4xl">
        UI 전문성과 협업 역량을 갖춘 성장하는 프론트엔드 개발자, 오다은입니다.
      </h1>
      <section>
        <SectionTitle className="!text-2xl sm:!text-3xl">성장 목표</SectionTitle>
        <div className="mt-5 font-light leading-[1.75]">
          웹 퍼블리셔 경험을 통해 습득한 UI 구현 능력을 바탕으로, <br />
          사용자 친화적이고 성능이 뛰어난 웹 서비스를 구현할 수 있는 프론트엔드 개발자로 성장하고자
          합니다. <br />
          현재는 개발자로서의 전문성 향상을 위해 자료구조, 알고리즘 등 CS 기초 지식과 JavaScript의
          동작 원리를 깊이 있게 학습하고 있습니다. <br />
          특히 매일 코딩 테스트 문제를 풀이하며 문제 해결 능력을 키우고, 더 효율적인 로직을 구현하는
          방법을 연구하고 있습니다. <br />
          장기적으로는 프론트엔드 성능 최적화와 사용자 경험 개선에 전문성을 가진 개발자가 되는 것이
          목표입니다. <br />
          이를 위해 브라우저 렌더링 최적화, 번들 사이즈 관리, 메모리 누수 방지 등 성능 개선 기법들을
          학습하고 실제 프로젝트에 적용해보며 경험을 쌓고 있습니다.
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle className="!text-2xl sm:!text-3xl">프로젝트 경험</SectionTitle>
        <div className="mt-5 font-light leading-[1.75]">
          웹 에이전시 십이지(주)에서 웹 퍼블리셔로 재직하며{' '}
          <BlankLink href="https://hyundai-isc.com">현대ISC</BlankLink>와{' '}
          <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink> 등 다수의 상업용
          웹사이트를 구축했습니다. 기획서와 디자인 시안을 바탕으로 HTML, CSS, jQuery를 활용하여
          프로젝트 초기 설계부터 스타일링, 반응형 구현까지 웹 퍼블리싱을 전담하여 성공적으로
          완수했습니다.
          <br />
          <br />
          이후 프론트엔드 개발자로의 전환을 위해 React를 독학하던 중, 전문성 향상을 위해 프론트엔드
          부트캠프에 참여했습니다.{' '}
          <BlankLink href="https://globalnomad-ko.vercel.app">Global Nomad</BlankLink> 등 5개의 팀
          프로젝트에서 코드 컨벤션, 커밋 컨벤션 등의 팀 규칙을 수립하고, GitHub를 통한 협업과
          코드리뷰를 진행하며 실무 협업 역량을 강화했습니다. 특히 Next.js App Router를 활용한 SSR
          구현, React Query를 통한 효율적인 데이터 관리, Zustand를 활용한 전역 상태 관리 등 최신
          프론트엔드 기술 스택을 실제 프로젝트에 적용했습니다.
          <br />
          <br />
          프론트엔드 개발의 전 과정을 주도적으로 수행하고자 개인 프로젝트로{' '}
          <BlankLink href="https://github.com/O-daeun/epiday">Epiday</BlankLink> 프로젝트를
          진행했습니다. 제공된 백엔드 API와 디자인 시안을 기반으로 프로젝트 설계부터 구현,
          리팩토링까지 전 과정을 담당하여 완성도 높은 서비스를 구현했습니다.
          <br />
          <br />
          크로마 엔터테인먼트 일경험 인턴십에서는 사내 그룹웨어 초기 버전을 개발했습니다. 멘토의
          제안으로 Vue.js를 새롭게 학습하여 일정 관리 시스템을 구현했으며, 이를 통해 새로운 기술
          스택에 대한 빠른 적응력을 입증했습니다.
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle className="!text-2xl sm:!text-3xl">협업 경험과 의사소통 방식</SectionTitle>
        <div className="mt-5 font-light leading-[1.75]">
          웹 퍼블리셔 재직 시절과 부트캠프에서의 다양한 협업 경험을 통해 효과적인 의사소통 방식을
          체득했습니다.
          <br />
          <br />
          웹 에이전시에서는 기획자, 디자이너, 개발자와 긴밀히 협력하며 프로젝트를 진행했습니다.
          <br />
          기획서와 디자인 시안을 꼼꼼히 검토하고, 불명확한 부분은 즉시 확인하여 오해 없이 작업을
          진행했습니다. <br />
          특히 개발 단계에서 백엔드 개발자와 원활히 소통하며 데이터 연동이 필요한 UI 요소들을
          효과적으로 구현했습니다.
          <br />
          <br />
          부트캠프에서는 5개의 팀 프로젝트를 통해 다양한 역할을 경험했습니다.
          <br />
          3번의 팀장 경험에서는 팀원들의 의견을 존중하되 적절한 시점에 결단을 내리는 리더십의
          중요성을 배웠습니다. <br />
          팀원으로 참여했을 때는 적극적으로 의견을 개진하면서도 팀의 결정을 존중하며 프로젝트의
          완성도를 높이는 데 집중했습니다.
          <br />
          <br />
          GitHub를 활용한 협업 과정에서는 프로젝트 초반에 팀원들과 합의한 코드 컨벤션을 적용하여
          일관된 코드 스타일을 유지했으며, 명확한 커밋 메시지와 PR 설명을 작성하여 팀원들의 리뷰가
          용이하도록 했습니다. 코드 리뷰를 통해 서로의 코드를 개선하고 새로운 기술을 학습하는 등 팀
          전체의 성장을 경험했습니다. (
          <BlankLink href="https://github.com/Taskify-2team/Taskuit/wiki/Coding-Conventions">
            팀 프로젝트 Taskuit 코드 컨벤션
          </BlankLink>
          )
          <br />
          <br />
          이러한 경험들을 통해 긍정적인 분위기 속에서 상호 존중하는 소통이 성공적인 협업의 기반임을
          깨달았습니다.
        </div>
      </section>

      <section className="mt-10">
        <SectionTitle className="!text-2xl sm:!text-3xl">체력 및 스트레스 관리</SectionTitle>
        <div className="mt-5 font-light leading-[1.75]">
          주 2회 정기적인 풋살 활동을 통해 체력과 스트레스를 관리하고 있습니다. <br />
          3년 가까이 지속해온 풋살은 단순한 취미를 넘어 체력 관리와 팀워크를 배우는 좋은 기회가
          되었습니다. <br />
          특히 개발자로서 장시간 집중력이 필요한 업무를 수행하기 위해서는 체력 관리가 중요하다고
          생각하여, <br />
          규칙적인 운동을 통해 업무 효율을 높이고자 노력하고 있습니다.
        </div>
      </section>
    </InnerLayout>
  );
}
