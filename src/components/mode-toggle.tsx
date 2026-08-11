"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <Button
      ref={ref}
      aria-label="Toggle color theme"
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2", className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          setTheme(isDark ? "light" : "dark");
        }
      }}
      {...props}
    >
      <SunIcon
        aria-hidden="true"
        className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"
      />
      <MoonIcon
        aria-hidden="true"
        className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
