import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import Section from './section';

const METHOD_LIST = [
  {
    title: '기획안',
    tool: 'Notion',
    imageUrl: '/epiday/plan.png',
  },
  {
    title: '디자인 시안',
    tool: 'Figma',
    imageUrl: '/epiday/design.png',
  },
  {
    title: '백엔드 스웨거',
    tool: 'Swagger',
    imageUrl: '/epiday/swagger.png',
  },
];

export default function MethodSection() {
  return (
    <Section title="개발 방식">
      <p className="mt-3 text-xl leading-relaxed">
        코드잇에서 제공받은 기획안, 디자인 시안, 백엔드 서버 스웨거 문서를 기반으로 프론트엔드 개발
        진행 <br />
        (프론트엔드 개발 기여도 100%)
      </p>
      <ul className="mt-8 flex gap-2">
        {METHOD_LIST.map((method, index) => (
          <li key={index}>
            <Image
              src={method.imageUrl}
              width={350}
              height={250}
              alt={method.title}
              className="h-[250px] w-[350px] rounded-md object-cover object-left-top shadow-lg"
            />
            <div className="relative mt-5 flex flex-col items-center">
              <h3 className="text-xl">{method.title}</h3>
              <span className="italic text-gray-500">{method.tool}</span>
              {index !== 2 && <FaPlus className="absolute -right-5 top-2 size-8 text-var-main" />}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-center gap-2">
        <FaArrowDown className="mb-6 size-8 text-var-main" />
        <h3 className="text-xl">프론트엔드 개발</h3>
        <div className="w-fit rounded-sm bg-orange-500 px-1 text-sm font-light text-white">
          기여도 <span className="font-medium">100%</span>
        </div>
      </div>
    </Section>
  );
}
