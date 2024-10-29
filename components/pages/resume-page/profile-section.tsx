import Image from 'next/image';
import { LuArrowDownWideNarrow } from 'react-icons/lu';
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
          <LuArrowDownWideNarrow className="size-10" />
          <p>
            비전공자에서 웹 퍼블리셔로, 웹 퍼블리셔에서 웹 프론트앤드 개발자로.
            <br />
            계속해서 성장하기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
