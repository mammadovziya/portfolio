"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

type CitationProps = { author: string; title: string; publishedAt: string; updatedAt?: string; url: string; slug: string };

export function ArticleCitation({ author, title, publishedAt, url }: CitationProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  useEffect(() => {
    if (status === "idle") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 4000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const names = author.trim().split(/\s+/);
  const surname = names[names.length - 1];
  const initials = names.slice(0, -1).map((name) => `${name[0]}.`).join(" ");
  const year = publishedAt.slice(0, 4);
  const date = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(publishedAt));
  const reference = `${surname}, ${initials} (${year}, ${date}). ${title}. ${url}`;

  async function copy() {
    try { await navigator.clipboard.writeText(reference); setStatus("copied"); }
    catch { setStatus("manual"); }
  }

  return (
    <section id="cite" aria-labelledby="cite-heading" className="mt-12 scroll-mt-8 border-t pt-4">
      <div className="flex items-center justify-between gap-4">
        <h2 id="cite-heading" className="text-xs font-medium text-muted-foreground">Cite this article</h2>
        <button type="button" onClick={() => void copy()} aria-label="Copy article reference" className="inline-flex shrink-0 items-center gap-1.5 rounded-sm py-1 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {status === "copied" ? <CheckIcon aria-hidden="true" className="size-3" /> : <CopyIcon aria-hidden="true" className="size-3" />}
          {status === "copied" ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-2 select-text text-xs leading-relaxed text-muted-foreground">{surname}, {initials} ({year}, {date}). {title}. <a href={url} className="break-all underline decoration-border underline-offset-2 hover:text-foreground">{url}</a></p>
      <span role="status" className={status === "manual" ? "mt-2 block text-xs text-muted-foreground" : "sr-only"}>{status === "copied" ? "Reference copied." : status === "manual" ? "Select the reference above to copy it manually." : ""}</span>
    </section>
  );
}
