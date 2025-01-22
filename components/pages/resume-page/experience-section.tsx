import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

const EXPERIENCE_LIST = [
  {
    title: '크로마(주) 일경험 인턴 근무',
    subTitle: '프론트엔드 개발자',
    period: '2024. 12 -',
    skillList: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'GitHub', 'Notion'],
    contentsList: [
      '프론트엔드 개발자로서 사내 그룹웨어 프로젝트의 일정 관리 기능 개발에 참여하며 Nuxt.js 프로젝트 구조 이해',
      '백엔드 개발자와의 협업을 통해 API 연동 및 비동기 처리 방식을 학습하며 실무 협업 능력 향상',
    ],
  },
  {
    title: '코드잇 스프린트 FE 5기 수료',
    subTitle: '프론트엔드 부트캠프',
    period: '2024. 02 - 2024. 08',
    skillList: [
      'React.js',
      'Next.js',
      'React Query',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Figma',
      'GitHub',
      'Notion',
    ],
    contentsList: [
      'Notion 기획안과 Figma 디자인 시안을 기반으로 React와 Next.js로 홈페이지를 구현',
      '3번의 팀 프로젝트에 참여하며 2회 팀장과 1회 팀원 역할을 맡아 리더십과 협업 능력을 향상',
      'Tailwind CSS와 Styled Components 같은 CSS 라이브러리를 익히고 활용',
      '발표 경험을 통해 프로젝트의 강점과 핵심포인트를 발표에 녹여내는 능력을 강화',
    ],
  },
  {
    title: '십이지(SIBIZI) 근무',
    subTitle: '웹 에이전시 / 웹 퍼블리셔',
    period: '2022. 06 - 2023. 04',
    skillList: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Figma'],
    contentsList: [
      <>
        Figma 기획서와 디자인 시안을 기반으로{' '}
        <BlankLink href="https://hyundai-isc.com">현대ISC</BlankLink>,{' '}
        <BlankLink href="https://www.kiweb.or.kr">경일게임아카데미</BlankLink> 등의 웹사이트를
        퍼블리싱
      </>,
      <>
        카페24 기반의 <BlankLink href="https://belifmall.com/">빌리프</BlankLink>,{' '}
        <BlankLink href="https://cnpmall.com/">CNP</BlankLink> 등의 다양한 웹사이트 유지보수
      </>,
      <>
        <BlankLink href="https://www.nis.go.kr/">국정원</BlankLink> 웹사이트의 유지보수 및 웹 접근성
        심사 준비 작업 수행 (웹 접근성 기준 통과)
      </>,
      '기획자, 디자이너, 개발자와의 소통을 통해 프로젝트를 효율적으로 조율하며 협업 방식 습득',
    ],
  },
  {
    title: '스마트기기 UI/UX 디자인 훈련 수료',
    subTitle: '디지털앱·웹 디자인, 웹 퍼블리셔 과정',
    period: '2021. 12 - 2022. 05',
    skillList: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Photoshop', 'Illustrator'],
    contentsList: [
      'Photoshop으로 직접 제작한 디자인 시안을 HTML과 CSS로 구현한 정적 퍼블리싱 및 JQuery로 동적 퍼블리싱 수행',
      'Photoshop과 Illustrator 등 디자인 툴을 사용하여 UI/UX 디자인의 기본 원리와 구현 능력 강화',
      '기획부터 퍼블리싱까지 웹사이트 리뉴얼을 주도하며 웹 디자인과 프론트엔드의 연계성을 이해',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="mt-20">
      <SectionTitle className="sm:mb-4">EXPERIENCE</SectionTitle>
      <ul>
        {EXPERIENCE_LIST.map((experience, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 border-b border-gray-200 py-8 last:border-none sm:flex-row sm:gap-10"
          >
            <span className="shrink-0 text-2xl font-medium text-gray-500 sm:w-[300px] sm:text-right sm:text-3xl">
              {experience.period}
            </span>
            <div className="w-full">
              <h3 className="mb-3 text-2xl font-medium sm:text-3xl">{experience.title}</h3>
              <span className="font-light italic text-gray-500">{experience.subTitle}</span>
              <ul className="mt-6 flex flex-col gap-2">
                <li className="ml-6 list-disc">
                  <span>Skill Keywords</span>
                  <ul className="mt-1 flex flex-wrap gap-1">
                    {experience.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-[4px] bg-slate-500 px-1 text-sm font-light text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
                {experience.contentsList.map((content, index) => (
                  <li key={index} className="ml-6 list-disc font-light">
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
