import InnerLayout from '@/components/inner-layout';
import MethodSection from '@/components/pages/epiday-page/method-section';
import OverviewSection from '@/components/pages/epiday-page/overview-section';
import PagesSection from '@/components/pages/epiday-page/pages-section';
import TechStackSection from '@/components/pages/epiday-page/tech-stack-section';
import Image from 'next/image';

export default function EpidayPage() {
  return (
    <div className="bg-slate-50 pb-20">
      <InnerLayout className="flex flex-col gap-10 pt-20 sm:gap-20">
        <Image
          src="/epiday/logo.svg"
          width={250}
          height={79}
          alt="epiday"
          className="mx-auto mb-[70px] mt-6 w-[200px] sm:mt-16 sm:w-[250px]"
        />
      </InnerLayout>
      <div className="shadow-big rounded-3xl bg-white py-20">
        <InnerLayout className="flex flex-col gap-10 sm:gap-20">
          <OverviewSection />
          <MethodSection />
          <TechStackSection />
        </InnerLayout>
      </div>
      <InnerLayout className="pt-20">
        <PagesSection />
      </InnerLayout>
    </div>
  );
}
