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
    "I study AI and Computer Science at Edinburgh and build AI systems for finance, computational biology, and developer workflows.",
  seoTitle: "Ziya Mammadov — AI & Computer Science Student",
  seoDescription:
    "Portfolio of Ziya Mammadov, an AI and Computer Science student at the University of Edinburgh working across AI engineering and computational biology.",
  summary:
    "I’m an AI and Computer Science student at the University of Edinburgh, supported by the Azerbaijani State Scholarship. I currently work as an AI Engineer Intern at ABB Invest and collaborate with Houston Lab on computational drug-discovery tooling. I’m especially interested in AI for biology, developer systems, HCI, and cognitive AI.",
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
      company: "ABB Invest",
      href: "https://abbinvest.az/",
      badges: [],
      location: "Baku, Azerbaijan",
      title: "AI Engineer Intern",
      logoUrl: "/abb-invest.svg",
      start: "2026",
      end: "Present",
      description:
        "Building a local-first Azerbaijani RAG API and embeddable support widget over public investment information, with cited answers, refusal and handoff controls, evaluation, and deployment safeguards.",
    },
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
  research: [
    {
      organization: "Houston Lab",
      school: "School of Biological Sciences, University of Edinburgh",
      href: "https://houstonlab.bio.ed.ac.uk/",
      location: "Edinburgh, UK",
      title: "Research Collaborator",
      logoUrl: "/edinburghuniversity.svg",
      start: "July 2026",
      end: "Present",
      details: [
        "Building the web platform and distributed execution layer that turns a command-line ligand-preparation and virtual-screening pipeline into a public research tool, as an open alternative to parts of the proprietary LigPrep suite.",
        "Designing the multi-server worker architecture: job distribution across compute nodes, database-backed status tracking, shared storage, retry logic, deployment, and monitoring.",
        "Working on lab compute infrastructure over VPN/SSH; listed as a lab collaborator and designated co-author on the planned publication of the toolkit.",
      ],
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
      title: "gemiz",
      category: "AI for Bio",
      featured: true,
      href: "https://github.com/mammadovziya/gemiz",
      slug: "gemiz",
      caseStudyHref: "/projects/gemiz",
      dates: "2026",
      active: true,
      description:
        "An alpha FASTA-to-SBML toolkit for bacterial genome-scale metabolic reconstruction, combining pyrodigal gene calling, MMseqs2 reaction scoring, COBRApy/HiGHS model assembly, and inspectable evidence and quality-control artifacts.",
      proof: [
        "FASTA to SBML",
        "Evidence + QC artifacts",
        "Reproducible benchmarks",
      ],
      caseStudy: {
        eyebrow: "AI for bio",
        role: "I built the reconstruction pipeline and the benchmark setup.",
        problem:
          "Turning a bacterial genome into a usable metabolic model requires more than annotation: every reaction needs traceable evidence, the assembled network needs validation, and the result has to be reproducible.",
        solution:
          "gemiz calls genes with pyrodigal, scores reaction evidence with MMseqs2, assembles and checks the network with COBRApy and HiGHS, and exports SBML together with inspectable evidence and QC artifacts.",
        impact: [
          "Produces a complete FASTA-to-SBML reconstruction workflow for bacterial genomes.",
          "Keeps reaction evidence and quality checks alongside the final model.",
          "Supports reproducible comparisons with CarveMe and gold-standard models.",
        ],
        architecture: [
          "pyrodigal for bacterial gene calling.",
          "MMseqs2 for sequence-based reaction scoring.",
          "COBRApy, HiGHS, and SBML for model assembly, solving, and export.",
        ],
        tradeoffs:
          "The public alpha currently focuses on bacterial genomes. Eukaryotic support and experimental embedding-based scoring remain outside the supported public workflow.",
      },
      technologies: [
        "Python",
        "pyrodigal",
        "MMseqs2",
        "COBRApy",
        "HiGHS",
        "SBML",
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
      title: "whisper-az",
      category: "Applied AI",
      featured: false,
      href: "https://github.com/mammadovziya/whisper-az",
      dates: "2026",
      active: true,
      description:
        "A reproducible Azerbaijani speech-recognition benchmark and LoRA fine-tuning pipeline for Whisper. A 13M-parameter adapter reduced FLEURS WER from 51.7% to 35.0%, close to full Whisper Medium at 34.3%.",
      proof: [
        "35.0% FLEURS WER",
        "13M trainable parameters",
        "51 MB LoRA adapter",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "PEFT/LoRA",
        "Hugging Face",
        "Whisper",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/whisper-az",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/whisper-az",
      video: "",
    },
    {
      title: "library-prep-pipeline",
      category: "AI for Bio",
      featured: false,
      href: "https://github.com/mammadovziya/library-prep-pipeline",
      dates: "2026",
      active: true,
      description:
        "A controlled-alpha platform for preparing large molecular libraries for virtual screening. PostgreSQL owns job state, NATS JetStream queues the work, and each RDKit/nvMolKit chemistry job runs in a bounded offline container on one approved GPU host.",
      proof: [
        "PostgreSQL source of truth",
        "JetStream leases + fencing",
        "Bounded GPU sandbox",
      ],
      technologies: [
        "Go",
        "Python",
        "Next.js",
        "PostgreSQL",
        "NATS JetStream",
        "SeaweedFS/S3",
        "Docker",
        "RDKit",
        "nvMolKit",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/library-prep-pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://opengraph.githubassets.com/portfolio/mammadovziya/library-prep-pipeline",
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
      proof: ["FBA/FVA media design", "4 fungal species", "81 to 15 conditions"],
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
      title: "ytmusic-player",
      category: "Developer Tools",
      featured: false,
      href: "https://github.com/mammadovziya/ytmusic-player",
      dates: "2026",
      active: true,
      description:
        "A cross-platform YouTube Music terminal player for Windows, macOS, and Linux, with search, keyboard-first playback, playlists, downloads, and remote CLI controls.",
      proof: [
        "Cross-platform npm binaries",
        "mpv + yt-dlp playback",
        "Local playlists, no telemetry",
      ],
      technologies: ["TypeScript", "Bun", "mpv", "yt-dlp", "CLI/TUI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/ytmusic-player",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "npm",
          href: "https://www.npmjs.com/package/ytmusic-player",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://opengraph.githubassets.com/portfolio/mammadovziya/ytmusic-player",
      video: "",
    },
    {
      title: "Social Media Moderation",
      category: "Applied AI",
      featured: true,
      href: "https://github.com/mammadovziya/social_media_moderation",
      dates: "2026",
      active: true,
      description:
        "VM-ready moderation microservices for posts, comments, usernames, and images. The system combines OpenAI-based classification with deterministic policies, OCR, and perceptual-image matching behind one documented REST API.",
      proof: [
        "3 Spring Boot services",
        "Text + image moderation",
        "Hardened Docker deployment",
      ],
      technologies: [
        "Java 21",
        "Spring Boot",
        "OpenAI API",
        "PostgreSQL",
        "Flyway",
        "Docker Compose",
        "Tesseract OCR",
        "PDQ Hashing",
        "OpenAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/social_media_moderation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://opengraph.githubassets.com/portfolio/mammadovziya/social_media_moderation",
      video: "",
    },
    {
      title: "CogniCart",
      category: "Cognitive Science & HCI",
      featured: false,
      href: "",
      dates: "2026",
      active: true,
      description:
        "A virtual supermarket experiment for cognitive science. It looks at planning, working memory, inhibition, and flexibility, with eye tracking and behaviour logs built in.",
      proof: ["Unity simulation", "Eye-tracking pipeline", "Behavioral logging"],
      technologies: ["Unity", "C#", "WebGazer", "Behavioral Logging", "HCI"],
      links: [],
      image: "",
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
        {
          type: "Currency API",
          href: "https://github.com/mammadovziya/cbar-currency-rates",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "aznum2words",
          href: "https://github.com/mammadovziya/aznum2words",
          icon: <Icons.github className="size-3" />,
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
      logoUrl: "/scholarship.svg",
      start: "2025",
      end: "2029",
      description:
        "A national scholarship from Azerbaijan that covers my studies and living costs at the University of Edinburgh.",
    },
    {
      title: "Bronze Medal — National Olympiad in Informatics",
      issuer: "Ministry of Science and Education, Republic of Azerbaijan",
      href:
        "https://edu.gov.az/uploads/olimpiada/rfo/2023/%C4%B0nformatika-8-9.pdf",
      logoUrl: "/bronze-medal.svg",
      start: "2023",
      end: "2023",
      description:
        "Earned a bronze medal in Azerbaijan’s 2023 National Olympiad in Informatics.",
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
