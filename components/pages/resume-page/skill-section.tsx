import SectionTitle from './section-title';

const SKILL_LIST = [
  {
    title: 'Languages',
    list: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: (
      <>
        Frameworks & <br className="hidden sm:block" />
        Libraries
      </>
    ),
    list: [
      'React.js',
      'Next.js(14)',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Styled Components',
      'Module CSS',
      'React Query',
      'React Hook Form',
      'Next Auth',
      'Zustand',
    ],
  },
  {
    title: 'Tools',
    list: ['Git', 'Github', 'Notion', 'Figma'],
  },
];

export default function SkillSection() {
  return (
    <section className="mt-20">
      <SectionTitle className="sm:mb-4">SKILL</SectionTitle>
      <ul>
        {SKILL_LIST.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col gap-6 border-b border-gray-200 py-8 last:border-none sm:flex-row sm:gap-14"
          >
            <h3 className="shrink-0 text-2xl font-medium text-gray-500 sm:w-[300px] sm:text-right sm:text-3xl">
              {skill.title}
            </h3>
            <ul className="flex w-full flex-wrap gap-y-2 pl-4 sm:gap-y-4 sm:pl-0">
              {skill.list.map((item, index) => (
                <li key={index} className="w-1/2 list-disc font-light">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
