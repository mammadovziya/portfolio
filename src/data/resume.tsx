import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ziya Mammadov",
  initials: "ZM",
  url: "https://ziyamammadov.me",
  portfolioUrl: "https://github.com/stars/mammadovziya/lists/portfolio",
  location: "Edinburgh, UK",
  locationLink: "https://www.google.com/maps/place/edinburgh",
  description:
    "I study AI and Computer Science at Edinburgh. I build small, practical tools around agents, developer workflows, and bio-AI.",
  summary:
    "I am an Artificial Intelligence and Computer Science student at the University of Edinburgh, supported by the Azerbaijani State Scholarship. I like building things that make a technical idea easier to use: an agent safety layer, a tool that turns repos into MCP servers, bio-AI pipelines, and small Python libraries people actually install. I also write about what I learn, because explaining a topic usually shows me what I still do not understand.",
  proofPoints: [
    "6,000+ downloads on PyPI",
    "Built at AI Engine and BioHackathon",
    "Worked on production fintech code",
    "Studying AI + CS at Edinburgh",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/151031540?v=4",
  skills: [
    "Python",
    "TypeScript/JavaScript",
    "SQL",
    "C++",
    "Java",
    "C#",
    "Bash",

    "FastAPI",
    "Flask",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Git",
    "CI/CD",
    "Kubernetes",

    "PyTorch",
    "TensorFlow",
    "NumPy",
    "Pandas",
    "COBRApy",
    "Biopython",
    "DIAMOND",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "z.mammadov@sms.ed.ac.uk",
    tel: "+44 7350 185646",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mammadovziya",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mziya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Signal: {
        name: "Signal",
        url: "https://signal.me/#p/+9940105150524",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ziyamamadov",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:z.mammadov@sms.ed.ac.uk",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MPAY",
      href: "https://mpay.az",
      badges: [],
      location: "Baku, Azerbaijan",
      title: "Software Developer Intern",
      logoUrl: "/mpay.jpg",
      start: "June 2024",
      end: "September 2024",
      description:
        "Worked on production features and REST APIs in C# ASP.NET MVC. I also wrote integration tests, helped with CI checks, documented issues, and got used to the everyday rhythm of code reviews and GitLab workflows.",
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      degree: "BSc (Hons) Artificial Intelligence and Computer Science",
      logoUrl: "/edinburghuniversity.svg",
      start: "2025",
      end: "2029",
      description:
        "Current focus: AI, cognitive science, functional programming, databases, algorithms, data structures, and linear algebra.",
    },
  ],
  projects: [
    {
      title: "circuit breaker",
      category: "Agentic AI",
      featured: true,
      href: "https://github.com/mammadovziya/circuit-breaker",
      slug: "circuit-breaker",
      caseStudyHref: "/projects/circuit-breaker",
      dates: "2026",
      active: true,
      description:
        "A guardrail for AI finance agents. Before an agent runs an action, circuit breaker checks the risk, compares it with a threshold, and keeps a clear log of what happened. I built it at AI Engine Hackathon in Scotland.",
      proof: [
        "GPT-4 risk assessor",
        "Pre-execution guardrails",
        "Structured audit logs",
      ],
      caseStudy: {
        eyebrow: "Agentic AI oversight",
        role: "I built the prototype at AI Engine Hackathon in Scotland.",
        problem:
          "AI agents can call finance tools very quickly. That is useful, but it also means a risky action can happen before a person has time to notice.",
        solution:
          "The idea is simple: put a small checkpoint before the real action. The agent proposes an action, GPT-4 gives a risk score and reason, and the system decides whether to allow, review, or block it.",
        impact: [
          "Showed how an agent can be checked before it touches a finance tool.",
          "Made the reason for each decision easy to inspect later.",
          "Kept the risk thresholds separate from the agent code, so the rules can change without rewriting everything.",
        ],
        architecture: [
          "A small schema for the action the agent wants to run.",
          "A risk prompt that returns severity, confidence, and a short explanation.",
          "A decision gate that stops the action if it crosses the threshold.",
        ],
        tradeoffs:
          "This is not trying to be the fastest possible path. It is more useful when the action is important enough that a small review step is worth it.",
      },
      technologies: ["Python", "GPT-4", "TypeScript", "Agent Oversight"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/circuit-breaker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/circuit-breaker",
      video: "",
    },
    {
      title: "gemiz",
      category: "AI for Bio",
      featured: true,
      href: "https://github.com/mammadovziya/gemiz",
      slug: "gemiz",
      caseStudyHref: "/projects/gemiz",
      dates: "2026",
      active: true,
      description:
        "A tool for reconstructing genome-scale metabolic models. I wanted to see whether protein-language-model embeddings could help with reaction-gene mapping, so I added ESM C 600M scoring and compared it with a no-ESM baseline.",
      proof: [
        "ESM C 600M embeddings",
        "Ablation benchmark",
        "Bacteria + eukaryotes",
      ],
      caseStudy: {
        eyebrow: "AI for bio",
        role: "I built the reconstruction pipeline and the benchmark setup.",
        problem:
          "Most GEM reconstruction tools lean heavily on homology. That works well in many cases, but I wanted to test whether protein embeddings could add another useful signal.",
        solution:
          "gemiz combines sequence search, reaction evidence, COBRApy model building, and an ESM C embedding score. Then it solves and checks the model instead of stopping at annotation.",
        impact: [
          "Benchmarked the approach against gold-standard E. coli models like iML1515 and iJO1366.",
          "Added a no-ESM mode so the embedding part can be tested honestly.",
          "Made a base pipeline I can keep improving for different organisms.",
        ],
        architecture: [
          "DIAMOND and BioPython for the sequence side.",
          "ESM C 600M embeddings for an extra reaction-gene score.",
          "COBRApy and Gurobi for model assembly, gap filling, and checks.",
        ],
        tradeoffs:
          "Embeddings make the pipeline heavier. For me, the point was not to make the cheapest version, but to test whether the extra signal is worth it.",
      },
      technologies: [
        "Python",
        "ESM C 600M",
        "COBRApy",
        "BioPython",
        "DIAMOND",
        "Gurobi",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/gemiz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/gemiz",
      video: "",
    },
    {
      title: "mcpforge",
      category: "Agentic AI",
      featured: true,
      href: "https://github.com/mammadovziya/mcpforge",
      slug: "mcpforge",
      caseStudyHref: "/projects/mcpforge",
      dates: "2026",
      active: true,
      description:
        "A small tool that takes a repo URL and tries to turn it into an MCP server. It reads the code, suggests useful tools, generates the server, and writes config files for Claude Desktop-style agents.",
      proof: [
        "Repo URL to MCP server",
        "Tool schema generation",
        "One-click agent config",
      ],
      caseStudy: {
        eyebrow: "Developer tooling for agents",
        role: "I built the repo analysis and generation workflow prototype.",
        problem:
          "MCP is powerful, but making a server still involves a lot of boilerplate. When you just want to test an idea, that setup gets in the way.",
        solution:
          "mcpforge takes a repo URL, looks for useful entry points, proposes tool schemas, generates server code, and prepares the agent config.",
        impact: [
          "Turned a multi-step MCP setup into a guided flow.",
          "Made existing repos easier to try as agent tools.",
          "Generated the config together with the server, so the output is easier to test.",
        ],
        architecture: [
          "Repo ingestion and source analysis.",
          "Tool schema planning from the code structure.",
          "Server generation plus agent config output.",
        ],
        tradeoffs:
          "Generated tools still need a human to review them. I see it as a way to start faster, not as something that should deploy unattended.",
      },
      technologies: ["Python", "TypeScript", "Node.js", "Claude API", "MCP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/mcpforge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/mcpforge",
      video: "",
    },
    {
      title: "myco-optima",
      category: "AI for Bio",
      featured: false,
      href: "https://github.com/mammadovziya/myco-optima",
      dates: "2026",
      active: true,
      description:
        "A fermentation planning tool from Edinburgh BioHackathon 2026. It uses GEMs and FBA/FVA to help compare media choices for four fungi, then turns a large design-of-experiments table into a smaller set of runs.",
      proof: ["FBA/FVA media design", "4 fungal species", "~80 to ~15 runs"],
      technologies: [
        "Python",
        "COBRApy",
        "Streamlit",
        "Anthropic API",
        "FBA/FVA",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/myco-optima",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/myco-optima",
      video: "",
    },
    {
      title: "deathlog",
      category: "Developer Tools",
      featured: false,
      href: "https://github.com/mammadovziya/deathlog",
      dates: "2025",
      active: true,
      description:
        "A CLI for writing incident reports from Git commits. The goal was simple: take the boring first draft of a post-mortem and make it fast, cheap, and repeatable.",
      proof: ["~90% faster reports", "~$0.01 per run", "Pip-installable CLI"],
      technologies: ["Python", "Claude 3.5 Sonnet", "CLI", "Git"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/deathlog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/deathlog",
      video: "",
    },
    {
      title: "cognicart",
      category: "Cognitive Science & HCI",
      featured: false,
      href: "https://github.com/mammadovziya/cognicart",
      dates: "2026",
      active: true,
      description:
        "A virtual supermarket experiment for cognitive science. It looks at planning, working memory, inhibition, and flexibility, with eye tracking and behaviour logs built in.",
      proof: ["Unity simulation", "Eye-tracking pipeline", "Behavioral logging"],
      technologies: ["Unity", "C#", "Eye Tracking", "HCI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/cognicart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/cognicart",
      video: "",
    },
    {
      title: "Open-Source Python Libraries",
      category: "Open Source",
      featured: true,
      href: "https://pypi.org/user/mammadovziya/",
      dates: "2022 - Present",
      active: true,
      description:
        "Small Python packages I published while learning by building. Together they have 6,000+ downloads, including a Central Bank of Azerbaijan exchange-rate client, an Azerbaijani number-to-words converter, and a few cleaned datasets on Hugging Face.",
      proof: ["6,000+ downloads", "PyPI packages", "Hugging Face datasets"],
      technologies: ["Python", "PyPI", "Hugging Face", "NLP", "Open Source"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/user/mammadovziya/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Engine Hackathon",
      dates: "2026",
      location: "Scotland, UK",
      description:
        "Built two projects here: circuit breaker for checking risky agent actions before they run, and mcpforge for turning a repo into an MCP server more quickly.",
      image: "/ai-engine.svg",
      links: [],
    },
    {
      title: "Edinburgh BioHackathon 2026",
      dates: "2026",
      location: "Edinburgh, UK",
      description:
        "Worked on the Pacifico Biolabs track. I built myco-optima, a GEM-based tool for narrowing down media choices in fungal fermentation experiments.",
      image: "/biohackathon.svg",
      links: [],
    },
  ],
  awards: [
    {
      title: "Fully-Funded State Scholarship",
      issuer: "Republic of Azerbaijan — Ministry of Science and Education",
      href: "https://edu.gov.az/",
      logoUrl: "",
      start: "2025",
      end: "2029",
      description:
        "A national scholarship from Azerbaijan that covers my studies and living costs at the University of Edinburgh.",
    },
    {
      title: "Bronze Medal — National Olympiad in Informatics",
      issuer: "Republic of Azerbaijan",
      href: "",
      logoUrl: "",
      start: "2023",
      end: "2023",
      description:
        "Ranked 3rd nationally in Azerbaijan in algorithmic problem-solving.",
    },
  ],
  volunteer: [
    {
      organization: "School Volunteer Programme",
      href: "",
      logoUrl: "",
      title: "Head Coordinator",
      start: "January 2024",
      end: "June 2025",
      description:
        "Helped run peer mentoring and school technology activities for 200+ students.",
    },
  ],
} as const;
