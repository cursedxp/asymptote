import { postService } from "@/services/postServices";
import PostItem from "@/app//components/postItem/PostItem";
import Controls from "@/app//components/postItem/Controls";
import AuthorAvatar from "@/app//components/postItem/AuthorAvatar";
import { notFound } from "next/navigation";
import Image from "next/image";

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  // Fetch post and related posts in parallel
  const [post, relatedPosts] = await Promise.all([
    postService.getPost(slug),
    postService.getRelatedPosts(slug, 3),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="shadow bg-neutral-900 m-auto rounded-md overflow-hidden flex flex-col mb-12">
        <div className="flex flex-col mx-4 my-4">
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center gap-2">
              <h1 className="text-3xl">{post.title}</h1>
            </div>

            <div className="mt-2 mb-2">
              <p className="text-gray-300 italic">{post.tldr}</p>
            </div>

            <div className="flex justify-between items-center py-2 overflow-hidden mb-4">
              <div className="flex gap-2 text-white items-center">
                <span className="text-[12px] whitespace-nowrap">{post.publishDate}</span>
                <span className="">~</span>
                <span className="text-[12px] whitespace-nowrap">{post.readTime}</span>
              </div>

              <div className="flex gap-1">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-700 text-white rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {post.imageUrl && (
          <div className="relative h-[240px]">
            <Image
              alt=""
              src={post.imageUrl}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-col mx-4 my-4">
          <div className="w-full flex flex-col">

            <div className="mb-6">
              <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="mb-6">
              <div className="text-white leading-relaxed space-y-4">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full overflow-hidden items-center justify-between">
            <Controls
              likes={post.likes}
              comments={post.comments}
              url={post.url}
            />
            <AuthorAvatar authorName={post.authorName} />
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Related Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <PostItem key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
