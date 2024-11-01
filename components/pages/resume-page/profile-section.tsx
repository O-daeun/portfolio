import Image from 'next/image';
import { SiCreatereactapp } from 'react-icons/si';
import ProfileLinks from './profile-links';

export default function ProfileSection() {
  return (
    <main className="flex items-end gap-10">
      <Image
        src="/profile.jpg"
        width={300}
        height={400}
        alt="오다은 프로필사진"
        className="rounded-sm shadow-sm"
      />
      <div className="flex w-full flex-col justify-between gap-10">
        <h1 className="text-6xl font-medium text-var-main">
          오다은 <span className="text-3xl">Oh Daeun</span>
        </h1>
        <ProfileLinks />
        <div className="flex w-full items-center gap-4 rounded-lg bg-gray-200/80 p-4">
          <SiCreatereactapp className="size-8" />
          <p>
            섬세한 스타일링과 컴포넌트 재사용성에 중점을 두며,
            <br />웹 퍼블리셔 경험을 기반으로 안정적이고 유지보수 가능한 코드를 지향합니다.
          </p>
        </div>
      </div>
    </main>
  );
}
