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
      <p className="mt-3 text-base font-light sm:text-xl">
        코드잇(주)에서 제공받은 기획안, 디자인 시안, 백엔드 서버 스웨거 문서를 기반으로 프론트엔드
        개발 진행 <br />
        <b className="mt-1 block font-medium">(프론트엔드 개발 기여도 100%)</b>
      </p>
      <ul className="mt-8 flex gap-2">
        {METHOD_LIST.map((method, index) => (
          <li key={index}>
            <Image
              src={method.imageUrl}
              width={350}
              height={250}
              alt={method.title}
              className="h-[130px] w-[350px] rounded-md object-cover object-left-top shadow-lg ss:h-[200px] sm:h-[250px]"
            />
            <div className="relative mt-5 flex flex-col items-center">
              <h3 className="text-base sm:text-xl">{method.title}</h3>
              <span className="text-sm italic text-gray-500 sm:text-base">{method.tool}</span>
              {index !== 2 && (
                <FaPlus className="absolute -right-3 top-4 size-4 text-var-main sm:-right-5 sm:top-2 sm:size-8" />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col items-center gap-2 pb-10 sm:mt-10 sm:pb-0">
        <FaArrowDown className="mb-4 size-8 text-var-main sm:mb-6" />
        <h3 className="text-xl sm:text-2xl">프론트엔드 개발</h3>
        <div className="w-fit rounded-sm bg-orange-500 px-1 text-sm font-light text-white">
          기여도 <span className="font-medium">100%</span>
        </div>
      </div>
    </Section>
  );
}
