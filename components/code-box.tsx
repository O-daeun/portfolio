import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBox({ children, className }: Props) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomDark}
      wrapLines={true}
      className={`!rounded-lg text-xs ${className}`}
    >
      {children}
    </SyntaxHighlighter>
  );
}
