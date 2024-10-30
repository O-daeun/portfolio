import Image from 'next/image';
import { RiAlignItemLeftFill } from 'react-icons/ri';
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
        <h1 className="text-6xl font-semibold text-var-main">
          오다은 <span className="text-3xl">Oh Daeun</span>
        </h1>
        <ProfileLinks />
        <div className="flex w-full items-center gap-2 rounded-lg bg-gray-200/80 p-4 shadow-md">
          <RiAlignItemLeftFill className="size-10" />
          <p>
            확장성과 유지보수성을 고려한 객체 지향적인 프로그래밍과 함께
            <br />
            섬세하고 깔끔한 스타일링을 지향합니다.
          </p>
        </div>
      </div>
    </main>
  );
}
