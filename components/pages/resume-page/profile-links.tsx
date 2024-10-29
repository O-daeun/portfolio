import BlankLink from '@/components/blank-link';
import { ImProfile } from 'react-icons/im';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io';

const addressStyle = 'size-5';

const addressList = [
  {
    title: 'mail',
    link: 'qzsz797979@gmail.com',
    image: <IoIosMail className={addressStyle} />,
  },
  {
    title: 'phone',
    link: '010-2469-6649',
    image: <IoIosCall className={addressStyle} />,
  },
  {
    title: 'github',
    link: 'https://github.com/O-daeun',
    image: <IoLogoGithub className={addressStyle} />,
  },
  {
    title: 'resume',
    link: 'https://ohdaeun.vercel.app/resume',
    image: <ImProfile className={addressStyle} />,
  },
];

export default function ProfileLinks() {
  return (
    <ul className="flex flex-col gap-[6px]">
      {addressList.map((address) => (
        <li key={address.title} className="flex items-center gap-[6px]">
          {address.image}
          <BlankLink href={address.title === 'phone' ? `tel:${address.link}` : address.link}>
            {address.link}
          </BlankLink>
        </li>
      ))}
    </ul>
  );
}
