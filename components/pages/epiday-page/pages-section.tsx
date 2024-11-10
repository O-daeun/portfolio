import Section from './section';
import SubTitle from './sub-title';

export default function PagesSection() {
  return (
    <Section title="페이지 소개">
      <div className="mt-8 flex flex-col gap-14">
        <article>
          <SubTitle>Landing Page</SubTitle>
          <div></div>
        </article>
      </div>
    </Section>
  );
}
