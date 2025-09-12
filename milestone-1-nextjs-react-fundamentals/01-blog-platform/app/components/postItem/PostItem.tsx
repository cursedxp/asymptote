import Image from "next/image";
import PostDetails from "./PostDetails";
import Controls from "./Controls";
import AuthorAvatar from "./AuthorAvatar";

interface PostItemProps {
  imageUrl?: string;
  title?: string;
  authorName?: string;
}

export default function PostItem({
  imageUrl,
  title,
  authorName,
}: PostItemProps) {
  return (
    <div className="shadow bg-neutral-900 m-auto rounded-md overflow-hidden flex flex-col">
      <div className={`relative ${imageUrl ? "h-[240px]" : "h-auto"} `}>
        {imageUrl && (
          <Image alt="" src={imageUrl} fill className="object-cover"></Image>
        )}
      </div>
      <div className="flex flex-col mx-4 my-4">
        <PostDetails title={title} />
        <div className="flex gap-4 w-full overflow-hidden items-center justify-between">
          <Controls />
          <AuthorAvatar authorName={authorName} />
        </div>
      </div>
    </div>
  );
}
