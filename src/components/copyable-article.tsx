"use client";

import { useEffect, useRef, type MouseEvent } from "react";

export function CopyableArticle({ html }: { html: string }) {
  const timers = useRef(new Map<HTMLButtonElement, ReturnType<typeof setTimeout>>());
  useEffect(() => {
    const active = timers.current;
    return () => { active.forEach(clearTimeout); active.clear(); };
  }, [html]);

  async function copy(event: MouseEvent<HTMLElement>) {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(".article-copy-button");
    if (!button) return;
    const block = button.closest<HTMLElement>("[data-copy-text]");
    if (!block) return;
    clearTimeout(timers.current.get(button));
    const label = block.dataset.copyKind === "math" ? "Copy LaTeX" : "Copy";
    try {
      await navigator.clipboard.writeText(block.dataset.copyText ?? "");
      button.textContent = "Copied";
    } catch {
      button.textContent = "Try again";
    }
    timers.current.set(button, setTimeout(() => { button.textContent = label; timers.current.delete(button); }, 2000));
  }

  return <article className="prose dark:prose-invert" onClick={copy} dangerouslySetInnerHTML={{ __html: html }} />;
}
