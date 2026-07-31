import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: DATA.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = DATA.projects.flatMap(
    (project) =>
      "caseStudyHref" in project && project.caseStudyHref
        ? [
            {
              url: `${DATA.url}${project.caseStudyHref}`,
              changeFrequency: "monthly" as const,
              priority: 0.8,
            },
          ]
        : []
  );

  return [...staticPages, ...blogPages, ...projectPages];
}
