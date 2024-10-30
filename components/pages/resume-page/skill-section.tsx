import SectionTitle from './section-title';

const SKILL_LIST = [
  {
    title: 'Languages',
    list: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: (
      <>
        Frameworks & <br />
        Libraries
      </>
    ),
    list: [
      'React.js',
      'Next.js',
      'React Query',
      'Tailwind CSS',
      'Styled Components',
      'Module CSS',
      'Axios',
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
      <SectionTitle className="mb-10">SKILL</SectionTitle>
      <ul className="">
        {SKILL_LIST.map((skill, index) => (
          <li key={index} className="flex gap-14 border-b border-gray-200 py-8 last:border-none">
            <h3 className="w-[300px] shrink-0 text-right text-3xl font-medium text-gray-500">
              {skill.title}
            </h3>
            <ul className="flex w-full flex-wrap gap-y-4">
              {skill.list.map((item, index) => (
                <li key={index} className="w-1/2 list-disc text-lg">
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
