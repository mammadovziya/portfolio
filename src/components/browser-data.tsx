"use client";

import { useState } from "react";

type Snapshot = {
  language: string;
  timezone: string;
  theme: string;
  reducedMotion: boolean;
  cookies: number | null;
  localStorage: number | null;
  sessionStorage: number | null;
};

function count(read: () => number) {
  try { return read(); } catch { return null; }
}

export function BrowserDataPanel() {
  const [data, setData] = useState<Snapshot | null>(null);

  function inspect() {
    setData({
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light",
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      cookies: count(() => document.cookie ? document.cookie.split(/;\s*/).length : 0),
      localStorage: count(() => localStorage.length),
      sessionStorage: count(() => sessionStorage.length),
    });
  }

  const quantity = (value: number | null) => value === null ? "Unavailable" : value.toString();

  return (
    <section id="browser-data" aria-label="Browser data transparency" className="relative border-t pt-5">
      <details onToggle={(event) => { if (event.currentTarget.open) inspect(); }}>
        <summary className="w-fit max-w-[60%] cursor-pointer text-xs text-muted-foreground underline decoration-dotted underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">What this page knows about you</summary>
        {data && <div className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
          <dl className="space-y-1.5">
            {[
              ["Language", data.language],
              ["Timezone", data.timezone],
              ["System appearance", data.theme],
              ["Reduced motion", data.reducedMotion ? "On" : "Off"],
              ["Readable site cookies", quantity(data.cookies)],
              ["Saved site items", quantity(data.localStorage)],
              ["Tab storage items", quantity(data.sessionStorage)],
            ].map(([label, value]) => <div key={label} className="flex items-baseline justify-between gap-4"><dt>{label}</dt><dd className="text-right text-foreground">{value}</dd></div>)}
          </dl>
          <p className="mt-3 text-[11px]">Read locally when opened. This panel sends nothing. Storage counts cover this site only; cookies hidden from JavaScript are excluded. The site also uses Vercel Analytics.</p>
        </div>}
      </details>
      <a href="https://github.com/mammadovziya/portfolio#make-it-yours" target="_blank" rel="noopener noreferrer" className="absolute right-0 top-5 max-w-[38%] rounded-sm text-right text-xs text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Build your own site ↗<span className="sr-only"> (GitHub, opens in a new tab)</span></a>
    </section>
  );
}
