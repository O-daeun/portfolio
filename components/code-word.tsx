interface Props {
  children: string;
}

export default function CodeWord({ children }: Props) {
  return (
    <span className="mr-[1px] rounded-[3px] bg-gray-500 px-[3px] py-[1px] text-sm text-white">
      {children}
    </span>
  );
}
