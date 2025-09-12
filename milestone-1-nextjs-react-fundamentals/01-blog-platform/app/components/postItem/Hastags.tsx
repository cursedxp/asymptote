import HastagItem from "./HastagItem";

interface HastagItemProps {
  tags: string[];
}

export default function Hastags({ tags }: HastagItemProps) {
  return tags ? (
    <ul className="flex gap-2 text-[12px]">
      {tags.map((tagItem: string, index: number) => (
        <HastagItem key={index} tag={tagItem} />
      ))}
    </ul>
  ) : null;
}
