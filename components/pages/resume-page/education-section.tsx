import SectionTitle from './section-title';

const EDUCATION_LIST = [
  {
    title: '동국대학교 WISE캠퍼스',
    subTitle: '사회복지학과 조기졸업',
    period: '2017. 03 - 2020. 02',
    contentsList: ['학점 평균 4.29/4.5', '최우등 졸업상 수상'],
  },
  {
    title: '양서고등학교',
    subTitle: '자연계 졸업',
    period: '2014. 03 - 2017. 02',
  },
];

export default function EducationSection() {
  return (
    <section className="mt-20">
      <SectionTitle className="sm:mb-4">EDUCATION</SectionTitle>
      <ul>
        {EDUCATION_LIST.map((education, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 border-b border-gray-200 py-8 last:border-none sm:flex-row sm:gap-10"
          >
            <span className="shrink-0 text-2xl font-medium text-gray-500 sm:w-[300px] sm:text-right sm:text-3xl">
              {education.period}
            </span>
            <div className="w-full">
              <h3 className="mb-3 text-2xl font-medium sm:text-3xl">{education.title}</h3>
              <span className="font-light italic text-gray-500">{education.subTitle}</span>
              <ul className="mt-6 flex flex-col gap-2">
                {education.contentsList?.map((content, index) => (
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
