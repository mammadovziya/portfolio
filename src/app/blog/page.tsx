import { BlogExplorer } from "@/components/blog-explorer";
import { Suspense } from "react";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on what I am learning, building, and trying to explain.",
  alternates: {
    canonical: `${DATA.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = (await getBlogPosts())
    .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt) || a.slug.localeCompare(b.slug))
    .map(({ slug, metadata, readingMinutes }) => ({
      slug,
      readingMinutes,
      title: metadata.title as string,
      summary: metadata.summary as string,
      publishedAt: metadata.publishedAt as string,
      category: (metadata.category as string) || "Notes",
      tags: (metadata.tags as string[]) || [],
    }));

  return (
    <section>
      <h1 className="mb-6 text-2xl font-medium tracking-tighter">blog</h1>
      <Suspense fallback={<p className="text-sm text-muted-foreground">Loading posts…</p>}>
        <BlogExplorer posts={posts} />
      </Suspense>
    </section>
  );
}
