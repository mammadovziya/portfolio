"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, WrenchIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const tools = [
  {
    label: "Go",
    href: "https://go.ziyamammadov.me/",
    description: "go.ziyamammadov.me",
  },
] as const;

export function ToolsDropdown() {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="Tools"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls="tools-menu"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-12"
            )}
            onClick={() => setOpen((current) => !current)}
          >
            <WrenchIcon aria-hidden="true" className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tools</p>
        </TooltipContent>
      </Tooltip>

      {open && (
        <div
          id="tools-menu"
          role="menu"
          className="absolute bottom-full left-1/2 z-50 mb-3 w-56 -translate-x-1/2 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2"
        >
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              className="flex items-center gap-3 rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="font-medium leading-none">{tool.label}</span>
                <span className="mt-1 truncate text-xs text-muted-foreground">
                  {tool.description}
                </span>
              </span>
              <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
