export interface BlogPost {
  id: string;
  title: string;
  tldr: string;
  excerpt: string;
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
    excerpt: "Next.js 14 brings revolutionary changes to React development with its new App Router architecture. This comprehensive guide walks you through everything you need to know to get started with Server Components, improved performance optimizations, and the latest features that make Next.js the go-to framework for modern web development.",
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
    content: "Next.js 14 has revolutionized how we build React applications with its groundbreaking App Router architecture and Server Components. This latest version represents a paradigm shift in how we think about web development, offering unprecedented performance improvements and developer experience enhancements.\n\nThe App Router introduces a file-based routing system that simplifies navigation and improves code organization. Unlike the traditional Pages Router, the App Router allows for more granular control over your application's structure, enabling better code splitting and faster load times.\n\nServer Components are perhaps the most significant addition to Next.js 14. These components run on the server, reducing the JavaScript bundle size sent to the client and improving initial page load performance. They can directly access databases, file systems, and other server-side resources without exposing sensitive information to the client.\n\nThe new caching mechanisms in Next.js 14 provide automatic optimization for both static and dynamic content. The framework intelligently caches API responses, component outputs, and static assets, ensuring your application performs optimally without manual intervention.\n\nData fetching has been simplified with async/await support directly in Server Components. This eliminates the need for complex state management patterns and useEffect hooks for basic data fetching scenarios. You can now fetch data exactly where you need it, when you need it.\n\nThe developer experience has been enhanced with improved error messages, better TypeScript support, and faster hot reload times. The new debugging tools make it easier to identify performance bottlenecks and optimize your application.\n\nStyling in Next.js 14 has been streamlined with better support for CSS-in-JS solutions, improved Tailwind CSS integration, and new CSS modules features. The framework now provides more flexibility in how you structure and organize your styles.\n\nDeployment optimizations ensure that your Next.js 14 applications load faster and perform better in production environments. The framework automatically handles code splitting, image optimization, and progressive enhancement to deliver the best possible user experience.",
    slug: "nextjs-14-complete-guide",
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    tldr: "Explore how artificial intelligence is transforming web development workflows, from code generation to automated testing and deployment.",
    excerpt: "Artificial intelligence is fundamentally reshaping the web development landscape. From intelligent code completion to automated testing and deployment pipelines, AI tools are becoming indispensable for modern developers. Discover how these technologies are streamlining workflows and what the future holds for AI-assisted development.",
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
      "Artificial intelligence is rapidly changing the landscape of web development, introducing tools and capabilities that seemed like science fiction just a few years ago. Today's developers have access to AI-powered assistants that can write code, debug applications, and even design entire user interfaces.\n\nCode generation has become one of the most practical applications of AI in development. Tools like GitHub Copilot, ChatGPT, and Claude can understand natural language descriptions and generate working code in multiple programming languages. These tools don't just save time; they help developers learn new patterns and explore different approaches to solving problems.\n\nAutomated testing is another area where AI is making significant strides. AI systems can generate comprehensive test cases, identify edge cases that human testers might miss, and even create visual regression tests by analyzing UI components. This level of automation ensures higher code quality while reducing the manual effort required for thorough testing.\n\nDeployment and DevOps workflows are being revolutionized by AI-driven automation. Smart deployment systems can predict optimal release times, automatically rollback problematic deployments, and optimize resource allocation based on traffic patterns and user behavior.\n\nThe future promises even more exciting developments. AI-powered design tools are beginning to create entire user interfaces from wireframes or text descriptions. Performance optimization tools are becoming smarter, automatically identifying bottlenecks and suggesting improvements.\n\nHowever, this AI revolution also brings new challenges. Developers need to understand how to effectively collaborate with AI tools, validate AI-generated code, and maintain security standards when using automated systems. The key to success lies in viewing AI as a powerful assistant rather than a replacement for human creativity and problem-solving skills.",
    slug: "future-ai-web-development",
  },
  {
    id: "3",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    tldr: "Deep dive into advanced TypeScript patterns, utility types, and architectural decisions that will make your codebase more maintainable.",
    excerpt: "TypeScript's type system offers powerful features that go beyond basic type annotations. Learn advanced patterns like conditional types, mapped types, and template literal types that will transform how you structure your applications. This guide covers enterprise-level TypeScript techniques used by major tech companies.",
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
      "TypeScript has become an essential tool for modern JavaScript development, offering type safety and enhanced developer experience. This comprehensive guide explores advanced patterns that separate intermediate developers from TypeScript masters.\n\nConditional types allow you to create types that adapt based on input types. These powerful constructs enable you to build flexible APIs that provide precise type information. For example, you can create types that automatically infer return types based on function parameters, making your code both type-safe and intuitive.\n\nMapped types provide a way to transform existing types by iterating over their properties. This feature is particularly useful when creating utility types that modify or extend existing interfaces. You can make properties optional, readonly, or transform their types entirely while maintaining the original structure.\n\nTemplate literal types bring string manipulation to the type level, allowing you to create sophisticated string-based types. These are invaluable for creating type-safe routing systems, API endpoints, and configuration objects where string values need to follow specific patterns.\n\nGeneric constraints unlock the full power of TypeScript's type system by allowing you to specify relationships between type parameters. This enables you to create functions and classes that work with a wide range of types while maintaining type safety and autocompletion.\n\nAdvanced utility types like Pick, Omit, and Record can be combined to create complex type transformations. Understanding how to compose these utilities effectively will make your TypeScript code more maintainable and expressive.\n\nDeclaration merging and module augmentation techniques allow you to extend existing types and libraries safely. This is crucial when working with third-party libraries that may not have complete type definitions or when you need to add custom properties to existing types.",
    slug: "mastering-typescript-patterns",
  },
  {
    id: "4",
    title: "Building Scalable Design Systems with Tailwind CSS",
    tldr: "Learn how to create consistent, maintainable design systems using Tailwind CSS and component-driven development approaches.",
    excerpt: "Design systems are the backbone of scalable user interfaces. Discover how to leverage Tailwind CSS's utility-first approach to build maintainable design systems that grow with your team. From establishing design tokens to creating reusable components, this guide covers everything you need for consistent UI development.",
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
      "Design systems are crucial for maintaining consistency across large applications, and Tailwind CSS provides an excellent foundation for building them. Unlike traditional CSS frameworks, Tailwind's utility-first approach allows you to create custom design systems that reflect your brand while maintaining consistency.\n\nEstablishing design tokens is the first step in creating a scalable design system. Tailwind's configuration file serves as your single source of truth for colors, spacing, typography, and other design decisions. By customizing these tokens, you ensure that every component in your application follows your design guidelines.\n\nComponent abstraction becomes essential as your design system grows. Rather than repeating utility classes throughout your application, create reusable components that encapsulate common patterns. These components serve as your design system's building blocks and make it easier to maintain consistency across different parts of your application.\n\nDocumentation and governance ensure that your design system remains useful as your team grows. Create style guides that show how components should be used, when to use them, and what variations are available. This documentation becomes invaluable for onboarding new team members and maintaining consistency across different projects.\n\nTesting and maintenance strategies keep your design system healthy over time. Regular audits help identify unused styles, inconsistent implementations, and opportunities for improvement. Automated testing can catch regressions and ensure that component changes don't break existing implementations.\n\nScaling considerations become important as your design system matures. Plan for theme variations, multi-brand support, and component versioning. These considerations help your design system adapt to changing requirements while maintaining the consistency that makes it valuable.",
    slug: "scalable-design-systems-tailwind",
  },
  {
    id: "5",
    title: "Optimizing React Performance: Tips and Tricks",
    tldr: "Discover practical techniques for optimizing React applications, including memoization, lazy loading, and bundle optimization strategies.",
    excerpt: "React performance optimization is crucial for delivering smooth user experiences. Learn proven techniques for identifying bottlenecks, implementing effective memoization strategies, and optimizing bundle sizes. This practical guide covers both fundamental concepts and advanced optimization techniques used in production applications.",
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
      "Performance optimization is critical for providing excellent user experiences in React applications. Understanding when and how to optimize can mean the difference between a sluggish app and one that feels lightning-fast.\n\nProfiling and measurement should always be your first step. React DevTools Profiler helps you identify which components are re-rendering unnecessarily and how long each render takes. This data-driven approach ensures you're optimizing the right problems rather than guessing.\n\nMemoization techniques like React.memo, useMemo, and useCallback can dramatically improve performance when used correctly. However, overusing these tools can actually hurt performance by adding unnecessary overhead. Learn when memoization helps and when it doesn't.\n\nBundle optimization reduces the amount of JavaScript your users need to download. Code splitting, lazy loading, and tree shaking are essential techniques for keeping your bundle sizes manageable. Dynamic imports and React.lazy make it easy to split your application into smaller chunks.\n\nState management optimization prevents unnecessary re-renders across your component tree. Techniques like state colocation, proper context usage, and efficient reducer patterns can eliminate performance bottlenecks caused by state updates.\n\nVirtualization becomes necessary when rendering large lists or tables. Libraries like react-window and react-virtualized help you render only the visible items, dramatically improving performance for data-heavy interfaces.",
    slug: "react-performance-optimization",
  },
  {
    id: "6",
    title: "Understanding Modern CSS: Grid, Flexbox, and Container Queries",
    tldr: "Master modern CSS layout techniques including CSS Grid, Flexbox, and the new Container Queries for responsive design.",
    excerpt: "Modern CSS layout has evolved beyond floats and positioning. Master CSS Grid for complex layouts, Flexbox for component-level design, and Container Queries for truly responsive components. This comprehensive guide shows you how to combine these powerful layout tools effectively.",
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
      "Modern CSS has evolved significantly with powerful layout tools that make complex designs simple to implement. CSS Grid, Flexbox, and Container Queries each serve different purposes and work together to create responsive, maintainable layouts.\n\nCSS Grid excels at two-dimensional layouts where you need precise control over both rows and columns. Unlike older layout methods, Grid allows you to define explicit grid areas and place items exactly where they belong. This makes complex layouts like dashboards, card grids, and magazine-style designs much more straightforward.\n\nFlexbox is perfect for one-dimensional layouts and component-level design. It handles spacing, alignment, and distribution of items within a container effortlessly. Flexbox is particularly powerful for navigation bars, form layouts, and any situation where you need to arrange items in a row or column.\n\nContainer Queries represent the next evolution of responsive design. Instead of responding only to viewport size, Container Queries allow components to adapt based on their container's dimensions. This enables truly modular, reusable components that work well in any context.\n\nCombining these layout methods effectively requires understanding their strengths and use cases. Grid for page-level layouts, Flexbox for component internals, and Container Queries for responsive behavior create a powerful toolkit for modern web design.\n\nBrowser support for these features is excellent, with Grid and Flexbox having near-universal support and Container Queries gaining rapid adoption. Understanding these tools is essential for any modern web developer.",
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
