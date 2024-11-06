import BlankLink from '@/components/blank-link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Article from './article';
import Section from './section';

export default function OverviewSection() {
  return (
    <Section title="개발 개요">
      <Article title="Project Name">Epiday (에피데이)</Article>
      <Article title="Development Period">2024년 9월 - 10월</Article>
      <Article title="Link">
        <div className="flex h-full items-center gap-4 pb-1">
          <BlankLink href="https://epiday.vercel.app">
            <FaExternalLinkAlt className="size-5" />
          </BlankLink>
          <BlankLink href="https://github.com/O-daeun/epiday">
            <FaGithub className="size-[22px]" />
          </BlankLink>
        </div>
      </Article>
    </Section>
  );
}
