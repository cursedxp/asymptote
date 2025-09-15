import Image from "next/image";
import PostDetails from "./PostDetails";
import Controls from "./Controls";
import AuthorAvatar from "./AuthorAvatar";

interface PostItemProps {
  post?: {
    imageUrl?: string;
    title?: string;
    authorName?: string;
    tldr?: string;
    publishDate?: string;
    readTime?: string;
    tags?: string[];
    likes?: number;
    comments?: number;
    url?: string;
    authorAvatar?: string;
  };
}
export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="shadow bg-neutral-900 m-auto rounded-md overflow-hidden flex flex-col mb-12">
      <div className={`relative ${post?.imageUrl ? "h-[240px]" : "h-auto"} `}>
        {post?.imageUrl && (
          <Image
            alt=""
            src={post.imageUrl}
            fill
            className="object-cover"
          ></Image>
        )}
      </div>
      <div className="flex flex-col mx-4 my-4">
        <PostDetails
          title={post?.title}
          tldr={post?.tldr}
          publishDate={post?.publishDate}
          readTime={post?.readTime}
          tags={post?.tags}
        />
        <div className="flex gap-4 w-full overflow-hidden items-center justify-between">
          <Controls
            likes={post?.likes}
            comments={post?.comments}
            url={post?.url}
          />
          <AuthorAvatar authorName={post?.authorName} />
        </div>
      </div>
    </div>
  );
}
