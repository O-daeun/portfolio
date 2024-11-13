import InnerLayout from '@/components/inner-layout';
import MainSection from '@/components/main-section';
import EducationSection from '@/components/pages/resume-page/education-section';
import ExperienceSection from '@/components/pages/resume-page/experience-section';
import IntroduceSection from '@/components/pages/resume-page/introduce-section';
import ProfileSection from '@/components/pages/resume-page/profile-section';
import ProjectSection from '@/components/pages/resume-page/project-section';
import SkillSection from '@/components/pages/resume-page/skill-section';
import ProgressBar from '@/components/progress-bar';

export default function ResumePage() {
  return (
    <>
      <ProgressBar />
      <InnerLayout className="my-20 sm:my-32">
        <ProfileSection />
        <IntroduceSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <EducationSection />
      </InnerLayout>
      <MainSection />
    </>
  );
}
