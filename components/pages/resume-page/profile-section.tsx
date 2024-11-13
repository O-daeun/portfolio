import Image from 'next/image';
import { SiCreatereactapp } from 'react-icons/si';
import ProfileLinks from './profile-links';

export default function ProfileSection() {
  return (
    <main className="flex flex-col items-center gap-8 ss:flex-row ss:items-end sm:gap-10">
      <div className="w-full sm:w-[300px] sm:min-w-[250px] sm:shrink-0">
        <Image
          src="/profile.jpg"
          width={500}
          height={665}
          alt="오다은 프로필사진"
          className="w-full rounded-sm shadow-sm"
          priority
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-6 sm:gap-10">
        <h1 className="text-4xl font-medium text-var-main sm:text-6xl">
          오다은 <span className="text-xl sm:text-3xl">Oh Daeun</span>
        </h1>
        <ProfileLinks />
        <div className="mt-2 flex w-full items-center gap-4 rounded-lg bg-gray-200/80 p-4 sm:mt-0">
          <SiCreatereactapp className="hidden size-8 shrink-0 sm:block" />
          <p className="text-sm sm:text-base">
            섬세한 스타일링과 컴포넌트 재사용성에 중점을 두며, <br className="hidden sm:block" />웹
            퍼블리셔 경험을 기반으로 안정적이고 유지보수 가능한 코드를 지향합니다.
          </p>
        </div>
      </div>
    </main>
  );
}
