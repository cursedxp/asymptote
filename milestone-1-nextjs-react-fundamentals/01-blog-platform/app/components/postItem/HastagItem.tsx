interface ItemProps {
  tag: string;
}

export default function HastagItem({ tag }: ItemProps) {
  return (
    <li className="flex text-center justify-center px-2 py-0.5 bg-neutral-800 rounded-sm">
      <div className="flex gap-1 items-center">
        <span>#</span>
        {tag}
      </div>
    </li>
  );
}
