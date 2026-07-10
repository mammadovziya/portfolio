import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";

type Project = (typeof DATA.projects)[number];
type CaseStudyProject = Project & {
  slug: string;
  proof: readonly string[];
  caseStudy: {
    eyebrow: string;
    role: string;
    problem: string;
    solution: string;
    impact: readonly string[];
    architecture: readonly string[];
    tradeoffs: string;
  };
};

type PageProps = {
  params: {
    slug: string;
  };
};

function isCaseStudyProject(project: Project): project is CaseStudyProject {
  return "slug" in project && "caseStudy" in project;
}

function getProject(slug: string) {
  return DATA.projects.filter(isCaseStudyProject).find(
    (project) => project.slug === slug
  );
}

export function generateStaticParams() {
  return DATA.projects.filter(isCaseStudyProject).map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${DATA.name}`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const sourceLink = project.links.find((link) => link.type === "Source");

  return (
    <main className="space-y-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon aria-hidden="true" className="size-4" />
        Back to projects
      </Link>

      <section className="space-y-5">
        <div className="space-y-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {project.caseStudy.eyebrow}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-[620px] text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.proof.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {sourceLink && (
            <Link
              href={sourceLink.href}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-2")}
            >
              <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
              Source
            </Link>
          )}
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-2"
            )}
          >
            Ask me about it
          </Link>
        </div>
      </section>

      {project.image && (
        <div className="overflow-hidden rounded-lg border bg-card">
          <Image
            src={project.image}
            alt={`${project.title} repository preview`}
            width={1200}
            height={630}
            priority
            className="aspect-[16/9] w-full object-cover object-top"
          />
        </div>
      )}

      <section className="grid gap-6">
        <StorySection title="What I did" body={project.caseStudy.role} />
        <StorySection title="Why I built it" body={project.caseStudy.problem} />
        <StorySection title="How it works" body={project.caseStudy.solution} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">What came out of it</h2>
        <ul className="grid gap-2">
          {project.caseStudy.impact.map((item) => (
            <li
              key={item}
              className="rounded-lg border bg-card px-3 py-2 text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Main pieces</h2>
        <ul className="grid gap-2">
          {project.caseStudy.architecture.map((item) => (
            <li
              key={item}
              className="rounded-lg border bg-card px-3 py-2 text-sm leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <StorySection
        title="What I would improve"
        body={project.caseStudy.tradeoffs}
      />
    </main>
  );
}

function StorySection({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </section>
  );
}
