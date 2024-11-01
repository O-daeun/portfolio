import BlankLink from '@/components/blank-link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionTitle from './section-title';

const PROJECT_LIST = [
  {
    title: 'Epiday',
    subTitle: '홈페이지 프론트엔드 개발',
    period: '2024. 09 - 2024. 10',
    contributionRate: 100,
    url: 'https://epiday.vercel.app/',
    github: 'https://github.com/O-daeun/epiday',
    skillList: ['React.js', 'Next.js', 'React Query', 'Tailwind CSS'],
    contentsList: [
      '백엔드 API와 디자인 시안을 기반으로 글귀 공유 플랫폼 프론트엔드 전담 개발',
      'SSR과 CSR의 장점을 활용한 Next.js 웹 애플리케이션 구현 (랜딩페이지에서 SSR, 나머지 페이지에서 CSR 사용)',
      'React Query로 비동기 데이터 관리 최적화 및 API 호출 효율성 강화',
      'Next Auth를 통한 사용자 인증 관리 도입으로 보안성 강화',
      'middleware로 인증되지 않은 사용자의 특정 페이지 접근 제한',
      'Zustand를 이용해 전역 상태 관리 (모달, 토스트 등)',
      '프로필 이미지 편집 기능 구현 (react-avatar-editor를 사용해 이미지 확대 및 위치 조정 가능)',
    ],
  },
  {
    title: '현대ISC',
    subTitle: '홈페이지 및 관리자 페이지 퍼블리싱',
    period: '2023. 01 - 2023. 02',
    contributionRate: 100,
    url: 'https://hyundai-isc.com/',
    skillList: ['JQuery', 'HTML', 'CSS'],
    contentsList: [
      'Figma 기획서 및 디자인 시안을 기반으로 홈페이지 및 관리자 페이지 퍼블리싱 전담',
      '반응형 웹 구현으로 다양한 화면 크기에서 UI 요소가 깨지지 않도록 최적화',
      'animate 속성을 활용해 동적인 UI 요소 구현',
      '동적인 요소 및 디자인 해석이 어려울 경우 기획자, 디자이너와 소통해 효과적인 해결방안 도출',
      'Mock 데이터를 활용한 퍼블리싱 후 개발자와 협업해 리팩토링 및 실제 데이터 반영',
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
              <div className="mb-3 flex items-center gap-5">
                <h3 className="text-3xl font-medium">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <BlankLink href={project.url}>
                    <FaExternalLinkAlt className="size-4" />
                  </BlankLink>
                  {project.github && (
                    <BlankLink href={project.github}>
                      <FaGithub className="size-[18px]" />
                    </BlankLink>
                  )}
                </div>
              </div>
              <h4 className="font-light italic text-gray-500">{project.subTitle}</h4>
              <ul className="mt-6 flex flex-col gap-2">
                <li className="ml-6 list-disc">
                  <span>Skill Keywords</span>
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
                {project.contentsList.map((content, index) => (
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
