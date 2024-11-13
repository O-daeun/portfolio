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

const queryKeyCode = `export const queryKeys = {
  epiday: {
    allEpidays: ['epidays'],
    epidays: (limit: number) => ['epidays', { limit }],
    epidayForToday: (date: string) => ['epidays', 'today', { date }],
    epidaysBySearchKeyword: (keyword: string) => ['epidays', 'search', { keyword }],
    epidayDetails: (id: number) => ['epidays', 'detail', { id }],
    myEpidays: ['epidays', 'my'],
  },
  emotionLog: {
    allEmotionLogs: ['emotionLogs'],
    emotionLogForToday: ['emotionLogs', 'today'],
    emotionLogsForMonth: (year: number, month: number) => ['emotionLogs', 'month', { year, month }],
  },
  comment: {
    allComments: ['comments'],
    comments: (limit: number) => ['comments', { limit }],
    commentsForEpiday: (epidayId: number) => ['comments', 'epiday', { epidayId }],
    myComments: ['comments', 'my'],
  },
};
`;

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
            Centralized Query Key Management
            <BlankLink href="https://github.com/O-daeun/epiday/blob/main/constants/query-keys.ts">
              <FaGithub className="size-5" />
            </BlankLink>
          </SubTitle>
          <Ul>
            <Li>Query Key 관리를 한 곳에서 통일성 있게 유지해 혼동을 방지하고, 재사용성을 높임</Li>
            <CodeBox className="h-[250px]">{queryKeyCode}</CodeBox>
          </Ul>
        </Article>
        <Article>
          <SubTitle className="flex items-center gap-2">
            Optimistic Updates
            <BlankLink href="https://github.com/O-daeun/epiday/blob/main/components/pages/epiday-detail-page/like-button.tsx">
              <FaGithub className="size-5" />
            </BlankLink>
          </SubTitle>
          <Ul>
            <Li>
              &apos;좋아요&apos; 클릭과 댓글 삭제 작업에 React Query의 <CodeWord>onMutate</CodeWord>
              를 사용해 낙관적 업데이트를 적용, 즉각적인 UI 반응을 통해 사용자 경험을 개선
            </Li>
            <CodeBox className="h-[250px]">{mutateCode}</CodeBox>
          </Ul>
        </Article>
        <Article>
          <SubTitle>Loading Skeletons</SubTitle>
          <Ul>
            <Li>API 데이터 로딩 중 로딩 스켈레톤을 표시하여 화면 깨짐 방지</Li>
          </Ul>
          <FunctionImage name="skeleton2" />
        </Article>
        <Article>
          <SubTitle>Smooth Responsive Design</SubTitle>
          <Ul>
            <Li>
              다양한 화면 크기에서도 문제없이 표시되도록 정밀한 CSS 작업을 통해 모바일에서 PC까지
              유연한 반응형 디자인을 구현
            </Li>
          </Ul>
          <FunctionImage name="responsive" />
        </Article>
      </div>
    </Section>
  );
}
