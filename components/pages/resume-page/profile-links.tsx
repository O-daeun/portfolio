import BlankLink from '@/components/blank-link';
import Link from 'next/link';
import { ImProfile } from 'react-icons/im';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io';

const addressStyle = 'size-5';

const ADDRESS_LIST = [
  {
    title: 'phone',
    link: '010-2469-6649',
    image: <IoIosCall className={addressStyle} />,
  },
  {
    title: 'mail',
    link: 'qzsz797979@gmail.com',
    image: <IoIosMail className={addressStyle} />,
  },
  {
    title: 'github',
    link: 'https://github.com/O-daeun',
    image: <IoLogoGithub className={addressStyle} />,
  },
  {
    title: 'resume',
    link: 'https://ohdaeun.vercel.app',
    image: <ImProfile className={addressStyle} />,
  },
];

export default function ProfileLinks() {
  return (
    <ul className="flex flex-col gap-[6px]">
      {ADDRESS_LIST.map((address) => (
        <li key={address.title} className="flex items-center gap-[6px]">
          {address.image}
          {address.title === 'mail' || address.title === 'phone' ? (
            <Link
              href={address.title === 'mail' ? `mailto:${address.link}` : `tel:${address.link}`}
            >
              {address.link}
            </Link>
          ) : (
            <BlankLink href={address.link}>{address.link}</BlankLink>
          )}
        </li>
      ))}
    </ul>
  );
}
