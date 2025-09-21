export interface BlogPost {
  id: string;
  title: string;
  tldr: string;
  imageUrl: string;
  authorName: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: number;
  url: string;
  content: string;
  slug?: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14: A Complete Guide",
    tldr: "Learn the fundamentals of Next.js 14, including App Router, Server Components, and modern React patterns for building production-ready applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    authorName: "Sarah Chen",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    publishDate: "15 Sep 2025",
    readTime: "8 min. read",
    tags: ["Next.js", "React", "JavaScript"],
    likes: 342,
    comments: 28,
    url: "/blog/nextjs-14-complete-guide",
    content: "Next.js 14 has revolutionized how we build React applications...",
    slug: "nextjs-14-complete-guide",
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    tldr: "Explore how artificial intelligence is transforming web development workflows, from code generation to automated testing and deployment.",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    authorName: "Alex Rodriguez",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishDate: "12 Sep 2025",
    readTime: "6 min. read",
    tags: ["AI", "Development", "Automation"],
    likes: 567,
    comments: 45,
    url: "/blog/future-ai-web-development",
    content:
      "Artificial intelligence is rapidly changing the landscape of web development...",
    slug: "future-ai-web-development",
  },
  {
    id: "3",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    tldr: "Deep dive into advanced TypeScript patterns, utility types, and architectural decisions that will make your codebase more maintainable.",
    imageUrl: "",
    authorName: "Emily Johnson",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    publishDate: "10 Sep 2025",
    readTime: "12 min. read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    likes: 789,
    comments: 67,
    url: "/blog/mastering-typescript-patterns",
    content:
      "TypeScript has become an essential tool for modern JavaScript development...",
    slug: "mastering-typescript-patterns",
  },
  {
    id: "4",
    title: "Building Scalable Design Systems with Tailwind CSS",
    tldr: "Learn how to create consistent, maintainable design systems using Tailwind CSS and component-driven development approaches.",
    imageUrl:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=400&fit=crop",
    authorName: "Marcus Kim",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    publishDate: "8 Sep 2025",
    readTime: "10 min. read",
    tags: ["CSS", "Design Systems", "UI/UX"],
    likes: 423,
    comments: 34,
    url: "/blog/scalable-design-systems-tailwind",
    content:
      "Design systems are crucial for maintaining consistency across large applications...",
    slug: "scalable-design-systems-tailwind",
  },
  {
    id: "5",
    title: "Optimizing React Performance: Tips and Tricks",
    tldr: "Discover practical techniques for optimizing React applications, including memoization, lazy loading, and bundle optimization strategies.",
    imageUrl: "",
    authorName: "David Park",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    publishDate: "5 Sep 2025",
    readTime: "7 min. read",
    tags: ["React", "Performance", "Optimization"],
    likes: 634,
    comments: 52,
    url: "/blog/react-performance-optimization",
    content:
      "Performance optimization is critical for providing excellent user experiences...",
    slug: "react-performance-optimization",
  },
  {
    id: "6",
    title: "Understanding Modern CSS: Grid, Flexbox, and Container Queries",
    tldr: "Master modern CSS layout techniques including CSS Grid, Flexbox, and the new Container Queries for responsive design.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    authorName: "Lisa Wang",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    publishDate: "3 Sep 2025",
    readTime: "9 min. read",
    tags: ["CSS", "Layout", "Responsive Design"],
    likes: 512,
    comments: 41,
    url: "/blog/modern-css-grid-flexbox-container-queries",
    content:
      "Modern CSS has evolved significantly with powerful layout tools...",
    slug: "modern-css-grid-flexbox-container-queries",
  },
];

export const mockAuthors = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    bio: "Full-stack developer with 8+ years of experience in React and Node.js",
    followerCount: 1250,
  },
  {
    id: "2",
    name: "Alex Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "AI researcher and web developer passionate about automation",
    followerCount: 2100,
  },
  {
    id: "3",
    name: "Emily Johnson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    bio: "TypeScript enthusiast and software architect",
    followerCount: 1800,
  },
  {
    id: "4",
    name: "Marcus Kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "UI/UX designer focused on scalable design systems",
    followerCount: 950,
  },
  {
    id: "5",
    name: "David Park",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    bio: "Performance optimization specialist and React core contributor",
    followerCount: 3200,
  },
  {
    id: "6",
    name: "Lisa Wang",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    bio: "CSS expert and front-end architecture consultant",
    followerCount: 1600,
  },
];

export const mockTags = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "AI",
  "CSS",
  "Performance",
  "Design Systems",
  "UI/UX",
  "Programming",
  "Best Practices",
  "Optimization",
  "Layout",
  "Responsive Design",
  "Development",
  "Automation",
  "Productivity",
  "System",
];
