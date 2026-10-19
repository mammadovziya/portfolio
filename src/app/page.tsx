import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { BrowserDataPanel } from "@/components/browser-data";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";


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
        jobTitle: ["Software Engineer, Perception Team", "Research Collaborator"],
        worksFor: {
          "@type": "Organization",
          name: "Edinburgh University Formula Student",
          url: "https://www.eufs.co/",
        },
        affiliation: {
          "@type": "Organization",
          name: "Houston Computational Drug Discovery Lab",
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

const projectSummaries: Record<string, string> = {
  gemiz: "Turning bacterial genome sequences into metabolic models, with evidence and quality checks alongside each result.",
  "library-prep-pipeline": "A GPU-accelerated platform that prepares molecular libraries for virtual screening.",
  "Governed Investment Assistant": "A bilingual AI assistant for portfolio analysis, with checked calculations and traceable sources.",
  "myco-optima": "A tool for planning fungal fermentation experiments and narrowing down which conditions to test.",
};

export default function Page() {
  const selectedProjects = DATA.projects.filter(
    (project) => project.title in projectSummaries
  );

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
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m {DATA.name.split(" ")[0]} 👋
                  </h1>
                </BlurFade>
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
      <section id="projects" className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold">Selected projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A few things I’ve been working on in AI and computational biology.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {selectedProjects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <Link
                href={"caseStudyHref" in project ? project.caseStudyHref : project.href}
                className="group flex h-full flex-col rounded-lg border bg-card p-4 transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <h3 className="text-sm font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {projectSummaries[project.title]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">
                  {"caseStudyHref" in project ? "Read about it" : "View on GitHub"}
                  <ArrowRightIcon aria-hidden="true" className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <Link href={DATA.contact.social.GitHub.url + "?tab=repositories"} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:underline">
            More projects on GitHub
            <ArrowRightIcon aria-hidden="true" className="size-3.5" />
          </Link>
        </BlurFade>
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
            <h2 className="text-xl font-bold">Leadership & Volunteering</h2>
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
      <BrowserDataPanel />
    </main>
  );
}
