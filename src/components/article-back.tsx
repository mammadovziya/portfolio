"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function ArticleBack() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className="mb-7 inline-flex items-center gap-1.5 rounded-sm text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <ArrowLeft aria-hidden="true" className="size-3.5" />
      Back
    </button>
  );
}
