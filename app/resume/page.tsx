import InnerLayout from '@/components/pages/resume-page/inner-layout';
import IntroduceSection from '@/components/pages/resume-page/introduce-section';
import ProfileSection from '@/components/pages/resume-page/profile-section';

export default function ResumePage() {
  return (
    <InnerLayout className="py-10">
      <ProfileSection />
      <IntroduceSection />
    </InnerLayout>
  );
}
