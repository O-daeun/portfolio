import BlankLink from '@/components/blank-link';
import CodeBox from '@/components/code-box';
import CodeWord from '@/components/code-word';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Section from './section';
import SubTitle from './sub-title';

const mutateCode = `const likeMutation = useMutation({
  mutationFn: () => {
    return isLiked ? deleteLike(session, id) : postLike(session, id);
  },
  onMutate: async () => {
    await queryClient.cancelQueries({ queryKey: queryKeys.epiday.epidayDetails(id) });
    const prevEpidayDetails = queryClient.getQueryData(queryKeys.epiday.epidayDetails(id));
    queryClient.setQueryData(queryKeys.epiday.epidayDetails(id), (oldData: GetEpidayData) => ({
      ...oldData,
      likeCount: oldData.isLiked ? oldData.likeCount - 1 : oldData.likeCount + 1,
      isLiked: !oldData.isLiked,
    }));
    return { prevEpidayDetails };
  },
  onError: (error, _, context) => {
    showToast({ message: error.message, type: 'error' });
    queryClient.setQueryData(queryKeys.epiday.epidayDetails(id), context.prevEpidayDetails);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.epiday.epidayDetails(id) });
  },
});`;

function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex max-h-fit flex-col gap-4 transition-all duration-1000">
      {children}
    </article>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="ml-4 list-disc font-light">{children}</li>;
}

function FunctionImage({ name }: { name: string }) {
  return (
    <Image
      src={`/epiday/${name}.png`}
      width={800}
      height={1500}
      alt={name}
      className="w-full shrink-0 rounded-lg shadow-custom"
    />
  );
}

export default function FunctionSection() {
  return (
    <Section title="주요 기능">
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Article>
          <SubTitle className="flex items-center gap-2">
            낙관적 업데이트
            <BlankLink href="https://github.com/O-daeun/epiday">
              <FaGithub className="size-5" />
            </BlankLink>
          </SubTitle>
          <Ul>
            <Li>
              &apos;좋아요&apos; 클릭 및 댓글 삭제 시, React Query의 <CodeWord>onMutate</CodeWord>를
              활용하여 낙관적 업데이트를 구현하여 사용자 경험 개선
            </Li>
            <CodeBox className="h-[250px]">{mutateCode}</CodeBox>
          </Ul>
        </Article>
        <Article>
          <SubTitle>로딩 스켈레톤</SubTitle>
          <Ul>
            <Li>API 데이터를 불러오는 동안 로딩 스켈레톤을 표시하여 화면 깨짐 방지</Li>
          </Ul>
          <FunctionImage name="skeleton2" />
        </Article>
      </div>
    </Section>
  );
}
