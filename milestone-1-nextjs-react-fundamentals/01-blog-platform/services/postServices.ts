import { mockBlogPosts, BlogPost } from "@/data/mockData";
import { cache } from "react";

class PostService {
  //React Cache for requests dublication
  getPost = cache(async (slug: string): Promise<BlogPost | null> => {
    return mockBlogPosts.find((p) => p.slug === slug) || null;
  });

  getAllPosts = cache(async (): Promise<BlogPost[]> => {
    return mockBlogPosts;
  });

  getRelatedPosts = cache(
    async (slug: string, limit = 10): Promise<BlogPost[]> => {
      const post = await this.getPost(slug);
      if (!post) return [];

      return mockBlogPosts
        .filter(
          (p) =>
            p.slug !== slug && p.tags.some((tag) => post.tags.includes(tag))
        )
        .slice(0, limit);
    }
  );
}
export const postService = new PostService();
