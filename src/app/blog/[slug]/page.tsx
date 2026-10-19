import { CopyableArticle } from "@/components/copyable-article";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArticleBack } from "@/components/article-back";
import { ArticleCitation } from "@/components/article-citation";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);
  if (!post) return undefined;

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    keywords: post.metadata.tags,
    other: {
      citation_title: title,
      citation_author: DATA.name,
      citation_publication_date: publishedTime.replace(/-/g, "/"),
      citation_fulltext_html_url: `${DATA.url}/blog/${post.slug}`,
    },
    alternates: {
      canonical: `${DATA.url}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      modifiedTime: post.metadata.updatedAt ?? publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = (await getBlogPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt) || a.slug.localeCompare(b.slug));
  const latest = otherPosts[0];
  const relevance = (candidate: (typeof otherPosts)[number]) => {
    const sharedTags = (candidate.metadata.tags as string[] | undefined)?.filter((tag) => post.metadata.tags?.includes(tag)).length ?? 0;
    const measurementConnection = [post.slug, candidate.slug].includes("bladeless-wind-turbines") && [post.slug, candidate.slug].includes("models-identifiability");
    return sharedTags * 3 + (candidate.metadata.category === post.metadata.category ? 2 : 0) + (measurementConnection ? 4 : 0);
  };
  const related = otherPosts.filter((candidate) => candidate.slug !== latest?.slug)
    .sort((a, b) => relevance(b) - relevance(a))[0];
  const recommendations = [
    ...(related ? [{ label: "Related article", article: related }] : []),
    ...(latest ? [{ label: "Latest article", article: latest }] : []),
  ];

  return (
    <section id="blog">
      <ArticleBack />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.updatedAt ?? post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 mb-6 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <span className="text-xs text-muted-foreground">{post.readingMinutes} min read</span>
        {post.metadata.updatedAt && <p className="text-xs text-muted-foreground">Updated {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(post.metadata.updatedAt))}</p>}
      </div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Post topics">
        {post.metadata.category && <Link href={`/blog?category=${encodeURIComponent(post.metadata.category)}`} className="rounded-full border px-2.5 py-1 text-xs hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{post.metadata.category}</Link>}
        {(post.metadata.tags as string[] | undefined)?.map((tag) => <Link key={tag} href={`/blog?q=${encodeURIComponent(tag)}`} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">#{tag.replace(/\s+/g, "")}</Link>)}
      </div>
      <a href="#cite" className="mb-6 inline-block text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Cite this article</a>
      <CopyableArticle html={post.source} />
      <ArticleCitation author={DATA.name} title={post.metadata.title} publishedAt={post.metadata.publishedAt} updatedAt={post.metadata.updatedAt} url={`${DATA.url}/blog/${post.slug}`} slug={post.slug} />
      <footer aria-label="About the author" className="mt-8 flex items-center gap-3 border-t pt-5">
        <Link href="/" aria-label={`About ${DATA.name}`} className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="size-10 border">
            <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="min-w-0">
          <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{DATA.name}</Link>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">AI & Computer Science at the University of Edinburgh.</p>
          <div className="mt-1.5 flex gap-3 text-xs text-muted-foreground">
            <Link href={DATA.contact.social.GitHub.url} className="hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">GitHub</Link>
            <Link href={DATA.contact.social.LinkedIn.url} className="hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">LinkedIn</Link>
          </div>
        </div>
      </footer>
      {recommendations.length > 0 && <nav aria-label="More articles" className="mt-10 border-t pt-6">
        <h2 className="mb-2 text-xs font-medium tracking-wide text-muted-foreground">Keep reading</h2>
        <div className="grid grid-cols-2 divide-x">
          {recommendations.map(({ label, article }) => (
            <Link key={label} href={`/blog/${article.slug}`} className="group flex min-w-0 items-start gap-2 py-4 pr-4 transition-colors first:pl-0 last:pl-4 last:pr-0 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none sm:gap-3 sm:pr-6 sm:last:pl-6">
              <div className="min-w-0 flex-1">
                <p className="mb-2 text-[11px] text-muted-foreground">{label}</p>
                <h3 className="max-w-[30rem] text-sm font-medium leading-snug tracking-tight sm:text-base">{article.metadata.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  {article.metadata.category && <><span>{article.metadata.category}</span><span aria-hidden="true">·</span></>}
                  <span>{article.readingMinutes} min read</span>
                </p>
              </div>
              <ArrowUpRight aria-hidden="true" className="mt-6 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none" />
            </Link>
          ))}
        </div>
      </nav>}
    </section>
  );
}
