import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  children: React.ReactNode;
}

export default function CodeBox({ children }: Props) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomDark}
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      wrapLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
}
