interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  return <div>Blog Page {slug}</div>;
}
