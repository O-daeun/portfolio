import InnerLayout from '@/components/inner-layout';
import MethodSection from '@/components/pages/epiday-page/method-section';
import OverviewSection from '@/components/pages/epiday-page/overview-section';
import TechStackSection from '@/components/pages/epiday-page/tech-stack-section';
import Image from 'next/image';

export default function EpidayPage() {
  return (
    <InnerLayout className="mt-20 flex flex-col gap-10 sm:gap-20">
      <Image
        src="/epiday/logo.svg"
        width={250}
        height={79}
        alt="epiday"
        className="mx-auto mb-4 mt-6 w-[200px] sm:mt-16 sm:w-[250px]"
      />
      <OverviewSection />
      <MethodSection />
      <TechStackSection />
      {/* <PagesSection /> */}
    </InnerLayout>
  );
}
