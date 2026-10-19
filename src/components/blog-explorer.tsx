"use client";

import { useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type BlogEntry = {
  slug: string;
  readingMinutes: number;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  tags: string[];
};

const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/#/g, "");

export function BlogExplorer({ posts }: { posts: BlogEntry[] }) {
  const params = useSearchParams();
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category))).sort()];
  const requestedCategory = params.get("category") ?? "All";
  const [category, setCategory] = useState(categories.includes(requestedCategory) ? requestedCategory : "All");
  const [query, setQuery] = useState(params.get("q") ?? "");
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  const filtered = posts.filter((post) => {
    const text = normalize([post.title, post.summary, post.category, ...post.tags].join(" "));
    return (category === "All" || post.category === category) && words.every((word) => text.includes(word) || text.replace(/\s+/g, "").includes(word));
  });

  function reset() { setQuery(""); setCategory("All"); }

  return (
    <>
      <div className="mb-7 space-y-3">
        <label htmlFor="blog-search" className="sr-only">Search posts by title, summary, or topic</label>
        <div className="relative">
          <SearchIcon aria-hidden="true" className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
          <input id="blog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search posts or topics…" className="h-10 w-full rounded-lg border bg-background pl-9 pr-10 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-search-cancel-button]:appearance-none" />
          {query && <button type="button" aria-label="Clear search" onClick={() => { setQuery(""); document.getElementById("blog-search")?.focus(); }} className="absolute right-1 top-1 rounded-md p-2 text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><XIcon aria-hidden="true" className="size-4" /></button>}
        </div>
        <div role="group" aria-label="Filter posts by category" className="flex flex-wrap gap-2">
          {categories.map((name) => <button type="button" key={name} aria-pressed={category === name} onClick={() => setCategory(name)} className={`rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${category === name ? "border-foreground bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{name}</button>)}
        </div>
        <p role="status" aria-live="polite" className="text-xs text-muted-foreground">{filtered.length} {filtered.length === 1 ? "post" : "posts"}{category !== "All" ? ` in ${category}` : ""}</p>
      </div>
      <div className="divide-y">
        {filtered.map((post) => (
          <article key={post.slug} className="py-5 first:pt-0">
            <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(post.publishedAt))}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <button type="button" onClick={() => setCategory(post.category)} className="rounded-sm underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{post.category}</button>
            </div>
            <h2 className="text-base font-medium tracking-tight"><Link href={`/blog/${post.slug}`} className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{post.title}</Link></h2>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
              {post.tags.map((tag) => <button type="button" key={tag} onClick={() => { setCategory("All"); setQuery(tag); }} className="rounded-sm text-[11px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">#{tag.replace(/\s+/g, "")}</button>)}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="rounded-lg border border-dashed p-8 text-center"><h2 className="text-sm font-medium">No matching posts</h2><p className="mt-1 text-sm text-muted-foreground">Try another topic or clear the filters.</p><button type="button" onClick={reset} className="mt-4 rounded-md border px-3 py-1.5 text-xs hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Clear filters</button></div>}
    </>
  );
}
