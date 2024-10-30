import SectionTitle from './section-title';

const EXPERIENCE_LIST = [
  {
    title: '코드잇 스프린트 FE 5기 수료',
    subTitle: '프론트엔드 부트캠프',
    period: '2024. 02 - 2024. 08',
    skillList: ['React.js', 'Next.js', 'React Query', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    contentsList: [
      '기획안과 디자인 시안을 기반으로 홈페이지를 구현',
      '3번의 팀 프로젝트에서 2번의 팀장과 1번의 팀원 역할을 하며 리더십과 팔로워십을 익힘',
      'Tailwind CSS, Styled Components 등의 다양한 CSS 라이브러리를 사용하여 프로젝트를 진행',
      'React.js만을 사용한 프로젝트와 Next.js를 사용한 프로젝트를 진행',
      '3번의 팀 프로젝트의 발표를 맡으며 발표 기술을 익힘',
    ],
  },
  {
    title: '웹 에이전시 십이지(SIBIZI) 근무',
    subTitle: '웹 퍼블리셔',
    period: '2022. 06 - 2023. 04',
    skillList: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
    contentsList: [
      '기획서와 디자인시안을 기반으로 기업 홈페이지 퍼블리싱',
      '카페24를 기반으로 한 빌리프, CNP 등 유지보수',
      '국정원 홈페이지, 평창올림픽 홈페이지 등 유지보수',
      '기획자, 디자이너, 개발자와 소통하며 프로젝트 진행하며 협력방식을 익힘',
    ],
  },
  {
    title: '스마트기기 UI/UX 디자인 훈련 수료',
    subTitle: '디지털앱·웹 디자인, 웹 퍼블리셔',
    period: '2021. 12 - 2022. 05',
    skillList: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PhotoShop'],
    contentsList: [
      '직접 디자인하여 그 시안대로 홈페이지 리뉴얼 퍼블리싱 진행',
      'HTML과 CSS를 사용한 정적 퍼블리싱과 JQuery를 사용한 동적 퍼블리싱을 익힘',
      '포토샵, 일러스트레이터를 사용한 디자인을 익힘',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="mt-20">
      <SectionTitle className="mb-4">EXPERIENCE</SectionTitle>
      <ul>
        {EXPERIENCE_LIST.map((experience, index) => (
          <li key={index} className="flex gap-10 border-b border-gray-200 py-8 last:border-none">
            <span className="w-[300px] shrink-0 text-right text-3xl font-medium text-gray-500">
              {experience.period}
            </span>
            <div className="w-full">
              <h3 className="mb-3 text-3xl font-medium">{experience.title}</h3>
              <span className="font-light italic text-gray-500">{experience.subTitle}</span>
              <ul className="mt-6 flex flex-col gap-2">
                <li className="ml-6 list-disc">
                  <span>Skill</span>
                  <ul className="mt-1 flex gap-1">
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
                  <li key={index} className="ml-6 list-disc">
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
