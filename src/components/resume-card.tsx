"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const descriptionId = React.useId();
  const hasDescription = Boolean(description);

  const titleContent = (
    <>
      <span className="min-w-0 truncate">{title}</span>
      {badges && (
        <span className="inline-flex shrink-0 gap-x-1">
          {badges.map((badge) => (
            <Badge
              variant="secondary"
              className="align-middle text-xs"
              key={badge}
            >
              {badge}
            </Badge>
          ))}
        </span>
      )}
      {hasDescription && (
        <ChevronRightIcon
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 translate-x-0 transform opacity-60 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100",
            isExpanded ? "rotate-90" : "rotate-0"
          )}
        />
      )}
    </>
  );
  const titleClassName =
    "group inline-flex min-w-0 max-w-full items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm";

  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-3 flex min-w-0 flex-grow flex-col sm:ml-4">
        <CardHeader>
          <div className="flex flex-col gap-1 text-base sm:flex-row sm:items-start sm:justify-between sm:gap-x-3">
            {hasDescription ? (
              <div className="min-w-0 flex-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={descriptionId}
                    className={cn(
                      titleClassName,
                      "cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    )}
                    onClick={() => setIsExpanded((current) => !current)}
                  >
                    {titleContent}
                  </button>
                </h3>
                {subtitle && (
                  <div className="mt-1 font-sans text-xs">{subtitle}</div>
                )}
              </div>
            ) : href ? (
              <div className="min-w-0 flex-1">
                <h3>
                  <Link
                    href={href}
                    className={cn(
                      titleClassName,
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    )}
                  >
                    {titleContent}
                  </Link>
                </h3>
                {subtitle && (
                  <div className="mt-1 font-sans text-xs">{subtitle}</div>
                )}
              </div>
            ) : (
              <div className="min-w-0 flex-1">
                <h3 className={titleClassName}>{titleContent}</h3>
                {subtitle && (
                  <div className="mt-1 font-sans text-xs">{subtitle}</div>
                )}
              </div>
            )}
            <div className="flex shrink-0 items-center gap-2 sm:justify-end">
              <div className="text-left text-xs tabular-nums text-muted-foreground sm:text-right sm:text-sm">
                {period}
              </div>
              {hasDescription && href && (
                <Link
                  href={href}
                  aria-label={`Open ${title}`}
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
        </CardHeader>
        {description && (
          <motion.div
            id={descriptionId}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 overflow-hidden text-xs sm:text-sm"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
