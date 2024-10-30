import BlankLink from '@/components/blank-link';
import SectionTitle from './section-title';

const PROJECT_LIST = [
  {
    title: 'Epiday',
    subTitle: '홈페이지 프론트엔드 개발',
    period: '2024. 09 - 2024. 10',
    contributionRate: 100,
    url: 'https://epiday.vercel.app/',
    skillList: ['React.js', 'Next.js', 'React Query', 'Tailwind CSS'],
    contentsList: ['백 서버, 디자인 시안을 기반으로 글귀 공유 플랫폼 구현'],
  },
  // {
  //   title: 'LS E-Link',
  //   subTitle: '홈페이지 퍼블리싱',
  //   period: '2023. 01 - 2023. 03',
  //   contributionRate: 10,
  //   url: 'https://www.lselink.com/',
  //   skillList: ['React.js', 'CSS'],
  //   contentsList: [
  //     '다른 퍼블리셔가 HTML, CSS만으로 초안 작업해둔 코드를 개발자가 React로 변환한 후 리팩토링 작업에 투입',
  //     'React를 처음 접하여 따로 학습하며 퍼블리싱 작업 수행',
  //   ],
  // },
  {
    title: '현대ISC',
    subTitle: '홈페이지, 관리자 페이지 퍼블리싱',
    period: '2023. 01 - 2023. 02',
    contributionRate: 100,
    url: 'https://hyundai-isc.com/',
    skillList: ['JQuery', 'HTML', 'CSS'],
    contentsList: [
      'Figma의 기획서와 디자인 시안을 기반으로 퍼블리싱 작업',
      '브라우저 크기에 따라 요소가 깨지지 않도록 반응형 작업',
      'SVG이미지를 animate를 활용하여 동적인 효과를 주는 등 다양한 애니메이션 효과를 추가',
      'Figma로 동적인 애니메이션 요소를 해석하기 어려울 경우 기획자, 디자이너와 소통하며 해결',
      '개발이 붙는 게시판 등에는 Mock 데이터로 퍼블리싱 후 개발자와 소통하며 리팩토링 진행',
    ],
  },
];

export default function ProjectSection() {
  return (
    <section className="mt-20">
      <SectionTitle className="mb-4">PROJECT</SectionTitle>
      <ul>
        {PROJECT_LIST.map((project, index) => (
          <li key={index} className="flex gap-10 border-b border-gray-200 py-8 last:border-none">
            <div className="flex w-[300px] shrink-0 flex-col items-end gap-[14px]">
              <span className="text-3xl font-medium text-gray-500">{project.period}</span>
              <div className="w-fit rounded-sm bg-orange-500 px-1 text-sm font-light text-white">
                기여도 <span className="font-medium">{project.contributionRate}%</span>
              </div>
            </div>
            <div className="w-full">
              <h3 className="mb-3 text-3xl font-medium">{project.title}</h3>
              <h4 className="font-light italic text-gray-500">{project.subTitle}</h4>

              <ul className="mt-6 flex flex-col gap-2">
                <li className="ml-6 list-disc">
                  <span>Skill</span>
                  <ul className="mt-1 flex gap-1">
                    {project.skillList.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-[4px] bg-slate-500 px-1 text-sm font-light text-white"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="ml-6 list-disc">
                  <BlankLink href={project.url}>{project.url}</BlankLink>
                </li>
                {project.contentsList.map((content, index) => (
                  <li key={index} className="ml-6 list-disc break-keep">
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
