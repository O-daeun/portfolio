import Image from 'next/image';
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
          <p className="text-sm sm:text-base">
            웹 퍼블리셔로 시작하여 웹 개발로 커리어를 이어오고 있습니다. <br />
            개발자로서 한계를 두지 않고 계속 성장하고 싶습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
