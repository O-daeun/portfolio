import Link from 'next/link';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io';

const addressList = [
  {
    title: 'mail',
    link: 'qzsz797979@gmail.com',
    image: <IoIosMail />,
  },
  {
    title: 'phone',
    link: '010-2469-6649',
    image: <IoIosCall />,
  },
  {
    title: 'github',
    link: 'https://github.com/O-daeun',
    image: <IoLogoGithub />,
  },
];

export default function ProfileLinks() {
  return (
    <ul>
      {addressList.map((address) => (
        <li key={address.title} className="flex items-center gap-1">
          {address.image}
          <Link
            href={address.title === 'phone' ? `tel:${address.link}` : address.link}
            className="text-var-main underline"
          >
            {address.link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
