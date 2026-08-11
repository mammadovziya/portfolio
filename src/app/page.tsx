import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Markdown from "react-markdown";

import { getPortfolioProjects, GitHubProject } from "@/lib/github";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  alternates: {
    canonical: DATA.url,
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      url: `${DATA.url}/`,
      name: DATA.name,
      alternateName: "ziyamammadov.me",
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${DATA.url}/#profile`,
      url: `${DATA.url}/`,
      name: DATA.seoTitle,
      description: DATA.seoDescription,
      isPartOf: {
        "@id": `${DATA.url}/#website`,
      },
      mainEntity: {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
        alternateName: ["Ziya Məmmədov", "Ziya Memmedov"],
        url: `${DATA.url}/`,
        image: `${DATA.url}/me.jpg`,
        description: DATA.seoDescription,
        jobTitle: ["AI Engineer Intern", "Research Collaborator"],
        worksFor: {
          "@type": "Organization",
          name: "ABB Invest",
          url: "https://abbinvest.az/",
        },
        affiliation: {
          "@type": "Organization",
          name: "Houston Lab",
          url: "https://houstonlab.bio.ed.ac.uk/",
          parentOrganization: {
            "@type": "CollegeOrUniversity",
            name: "University of Edinburgh",
            url: "https://www.ed.ac.uk/",
          },
        },
        sameAs: [
          DATA.contact.social.GitHub.url,
          DATA.contact.social.LinkedIn.url,
          DATA.contact.social.Youtube.url,
        ],
      },
    },
  ],
};

type RenderProject = {
  title: string;
  href: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;
  category?: string;
  featured?: boolean;
  caseStudyHref?: string;
  proof?: readonly string[];
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
};

export default async function Page() {
  const portfolioUrl = DATA.portfolioUrl;
  const hasCuratedProjects = DATA.projects.length > 0;
  let portfolioProjects: GitHubProject[] = [];

  if (!hasCuratedProjects && portfolioUrl) {
    portfolioProjects = await getPortfolioProjects(portfolioUrl);

    // Add GitHub and Website icons back since they couldn't be serialized effectively
    portfolioProjects = portfolioProjects.map((project) => ({
      ...project,
      links: project.links.map((link) => ({
        ...link,
        icon:
          link.type === "Source" ? (
            <Icons.github className="size-3" />
          ) : (
            <Icons.globe className="size-3" />
          ),
      })),
    }));
  }

  // Prefer curated DATA.projects; fall back to scraped GitHub portfolio list.
  const projectsToRender: readonly RenderProject[] =
    hasCuratedProjects ? DATA.projects : portfolioProjects;

  // Group projects by category when curated data is in use; otherwise render flat.
  const featuredProjects = projectsToRender
    .filter((project) => project.featured || project.caseStudyHref)
    .slice(0, 3);
  const projectGroups: { name: string | null; projects: RenderProject[] }[] =
    (() => {
      const src = Array.from(projectsToRender);
      const hasCategories =
        src.length > 0 && typeof src[0]?.category === "string";
      if (!hasCategories) return [{ name: null, projects: src }];
      const buckets = new Map<string, RenderProject[]>();
      for (const p of src) {
        const cat: string = p.category || "Other";
        if (!buckets.has(cat)) buckets.set(cat, []);
        buckets.get(cat)!.push(p);
      }
      return Array.from(buckets, ([name, projects]) => ({ name, projects }));
    })();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <script
        id="profile-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-1 flex-col space-y-4">
              <div className="space-y-2">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] text-base text-muted-foreground sm:text-lg"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="#projects"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "gap-2"
                    )}
                  >
                    See projects
                    <ArrowRightIcon aria-hidden="true" className="size-3.5" />
                  </Link>
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-2"
                    )}
                  >
                    <MailIcon aria-hidden="true" className="size-3.5" />
                    Email me
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 shrink-0 border sm:size-28">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                location={work.location}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="research">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6.75}>
            <h2 className="text-xl font-bold">Research Experience</h2>
          </BlurFade>
          {DATA.research.map((research, id) => (
            <BlurFade
              key={research.organization + research.title}
              delay={BLUR_FADE_DELAY * 7 + id * 0.05}
            >
              <ResumeCard
                href={research.href}
                logoUrl={research.logoUrl}
                altText={research.organization}
                title={research.organization}
                subtitle={`${research.title} · ${research.school}`}
                location={research.location}
                period={`${research.start} - ${research.end}`}
                details={research.details}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={
                  "description" in education ? education.description : undefined
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="awards">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Awards</h2>
          </BlurFade>
          {DATA.awards.map((award, id) => (
            <BlurFade
              key={award.title}
              delay={BLUR_FADE_DELAY * 8.75 + id * 0.05}
            >
              <ResumeCard
                href={award.href || undefined}
                logoUrl={award.logoUrl}
                altText={award.title}
                title={award.title}
                subtitle={award.issuer}
                period={
                  award.start === award.end
                    ? award.start
                    : `${award.start} - ${award.end}`
                }
                description={award.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="relative [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <div className="flex flex-wrap gap-1 overflow-y-auto max-h-[150px] pt-1 pb-8">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-10 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Things I have been building
                </h2>
                <p className="mx-auto max-w-[720px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A few projects I built while learning, testing ideas, and
                  working with teams. They focus on computational biology,
                  applied AI, developer tools, and HCI.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">
                    {DATA.projects.length}
                  </span>{" "}
                  projects here
                </div>
                <div aria-hidden className="h-4 w-px bg-border" />
                <div>
                  <span className="font-semibold text-foreground">6,000+</span>{" "}
                  PyPI downloads
                </div>
                <div aria-hidden className="h-4 w-px bg-border" />
                <div>
                  <span className="font-semibold text-foreground">2</span>{" "}
                  hackathons
                </div>
              </div>
            </div>
          </BlurFade>
          {featuredProjects.length > 0 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {featuredProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 11.25 + id * 0.05}
                >
                  <Link
                    href={project.caseStudyHref ?? project.href}
                    className="group flex h-full min-h-[220px] flex-col rounded-lg border bg-card p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {project.category ?? "Project"}
                    </div>
                    <h3 className="mt-2 text-base font-semibold leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    {project.proof && project.proof.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-1 pt-4">
                        {project.proof.slice(0, 2).map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="px-1.5 py-0 text-[10px] leading-5"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground">
                      {project.caseStudyHref
                        ? "Read how I built it"
                        : "Open project"}
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="size-3 transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </BlurFade>
              ))}
            </div>
          )}
          <div className="space-y-10 max-w-[800px] mx-auto">
            {projectGroups.map((group, gi) => (
              <div key={group.name ?? "all"} className="space-y-4">
                {group.name && (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * (11.5 + gi * 0.15)}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {group.name}
                      </h3>
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {group.projects.length}
                      </span>
                    </div>
                  </BlurFade>
                )}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * (12 + gi * 0.2) + id * 0.05}
                    >
                      <ProjectCard
                        href={project.caseStudyHref ?? project.href}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        proof={project.proof}
                        image={project.image}
                        video={project.video}
                        priority={gi === 0 && id === 0}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Building under time pressure
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hackathons are a good way to find out whether an idea works
                  outside your notes. These are the recent ones.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="volunteer">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15.5}>
            <h2 className="text-xl font-bold">Volunteer</h2>
          </BlurFade>
          {DATA.volunteer.map((v, id) => (
            <BlurFade
              key={v.organization + v.title}
              delay={BLUR_FADE_DELAY * 15.75 + id * 0.05}
            >
              <ResumeCard
                href={v.href || undefined}
                logoUrl={v.logoUrl}
                altText={v.organization}
                title={v.organization}
                subtitle={v.title}
                period={`${v.start} - ${v.end}`}
                description={v.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Say hi
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                If you want to talk about a project, a paper, or just something
                interesting, message me on{" "}
                <Link
                  href={DATA.contact.social.Signal.url}
                  className="text-blue-500 hover:underline"
                >
                  Signal
                </Link>
                {" "}or send me an{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>
                {" "}and I&apos;ll reply when I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
