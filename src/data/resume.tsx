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
    "I study AI and Computer Science at Edinburgh and build software for autonomous systems, computational drug discovery, and applied AI.",
  seoTitle: "Ziya Mammadov - AI & Computer Science Student",
  seoDescription:
    "Portfolio of Ziya Mammadov, an AI and Computer Science student at the University of Edinburgh working on autonomous perception, computational drug discovery, and reliable AI systems.",
  summary:
    "I’m studying AI and Computer Science at the University of Edinburgh with support from the Azerbaijani State Scholarship. I work with Edinburgh University Formula Student, developing perception software for autonomous racing cars. I also collaborate with Houston Computational Drug Discovery Lab on GPU-accelerated molecular preparation. Before that, I worked on multilingual moderation and investment AI at ABB Invest. My interests include machine learning, computational biology, and reliable AI systems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/151031540?v=4",
  skills: [
    "Java",
    "Python",
    "C++",
    "TypeScript/JavaScript",
    "SQL",
    "Bash",
    "Haskell",
    "Spring Boot",
    "FastAPI",
    "Flask",
    "Node.js",
    "Mastra",
    "Docker",
    "Kubernetes",
    "Git",
    "GitLab CI/CD",
    "PyTorch",
    "LLM Integration",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "OOP",
    "Functional Programming",
    "Microservices",
    "REST APIs",
    "Linux",
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
        url: "https://www.youtube.com/@zmmmdf",
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
      company: "Edinburgh University Formula Student",
      href: "https://www.eufs.co/",
      badges: [],
      location: "Edinburgh, UK",
      title: "Software Engineer, Perception Team",
      logoUrl: "/eufs.ico",
      start: "August 2026",
      end: "Present",
      description:
        "Building the autonomous racing car’s perception stack with PointPainting and PointPillars, combining LiDAR and camera data to detect and classify cones. Working on reproducible Ubuntu/GPU environments, sensor integration, and fault-tolerant software installation.",
    },
    {
      company: "ABB Invest",
      href: "https://abbinvest.az/",
      badges: [],
      location: "Baku, Azerbaijan",
      title: "Software Engineer Intern",
      logoUrl: "/abb-invest.svg",
      start: "July 2026",
      end: "September 2026",
      description:
        "Built XLM-RoBERTa moderation for Azerbaijani, Turkish, Russian, and English, achieving 95.6% accuracy and 95.4% F1 on a 500-case benchmark. Also developed private-information identification and an investment risk assessment API with cited sources, refusal criteria, and evaluation and deployment safeguards.",
    },
    {
      company: "MPAY",
      href: "https://mpay.az",
      badges: [],
      location: "Baku, Azerbaijan",
      title: "Software Developer Intern",
      logoUrl: "/mpay.jpg",
      start: "June 2025",
      end: "September 2025",
      description:
        "Developed authentication and REST APIs in C#/.NET and ASP.NET MVC for production self-service ATMs, supporting a migration to microservices. Automated CI/CD documentation validation, reducing preparation time by 30%, and contributed integration tests.",
    },
  ],
  research: [
    {
      organization: "Houston Computational Drug Discovery Lab",
      school: "School of Biological Sciences, University of Edinburgh",
      href: "https://houstonlab.bio.ed.ac.uk/",
      location: "Edinburgh, UK",
      title: "Research Collaborator",
      logoUrl: "/edinburghuniversity.svg",
      start: "July 2026",
      end: "Present",
      details: [
        "Designing and releasing LibPrep, a GPU-accelerated web service for molecular preparation with distributed jobs, database-backed state, shared storage, automatic retries, and monitoring.",
        "Implementing molecular prefiltering and state preparation with RDKit and GPU-accelerated conformer generation, achieving a median RMSD of approximately 0.54 Å on a public benchmark.",
      ],
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      degree: "BSc (Hons) Artificial Intelligence and Computer Science",
      logoUrl: "/edinburghuniversity.svg",
      start: "September 2025",
      end: "2029",
      description:
        "First-class performance; Azerbaijan State Scholarship recipient. Relevant study includes discrete mathematics and probability, computer systems, algorithms and data structures, data science, object oriented programming, reasoning and agents, software engineering, and introduction to computation.",
    },
  ],
  projects: [
    {
      title: "Active Learning for Drug Discovery",
      category: "AI for Bio",
      featured: false,
      href: "",
      dates: "Ongoing",
      active: true,
      description:
        "Collaborating on an active-learning project involving approximately 5,000 compounds with noisy, highly imbalanced biological labels. The project will compare random forests and graph neural networks to select relevant compounds within a limited assay budget.",
      proof: ["~5,000 compounds", "Limited assay budget"],
      technologies: ["Active Learning", "Random Forests", "Graph Neural Networks"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Governed Investment Assistant",
      category: "Applied AI",
      featured: true,
      href: "https://github.com/mammadovziya/governed-investment-assistant",
      dates: "2026",
      active: true,
      description:
        "A bilingual financial AI assistant built with TypeScript and Mastra, combining tool-grounded portfolio analytics, governed RAG, deterministic calculations, and signed evidence. A fail-closed architecture gates tools and validates responses before delivery.",
      proof: ["13 policy-gated tools", "8 blocking validators", "Signed evidence"],
      technologies: ["TypeScript", "Mastra", "RAG", "Docker", "Prometheus", "Vitest", "Playwright"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/governed-investment-assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/portfolio/mammadovziya/governed-investment-assistant",
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
      featured: true,
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
      featured: false,
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
      featured: false,
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
      issuer: "Republic of Azerbaijan - Ministry of Science and Education",
      href: "https://dp.edu.az/",
      logoUrl: "/dp-logo.png",
      start: "2025",
      end: "2029",
      description:
        "Fully funded studies and living costs at the University of Edinburgh through Azerbaijan’s State Program, awarded to 125 top-performing students nationwide entering bachelor’s programmes.",
    },
    {
      title: "Bronze Medal - National Olympiad in Informatics",
      issuer: "Ministry of Science and Education, Republic of Azerbaijan",
      href:
        "https://edu.gov.az/uploads/olimpiada/rfo/2023/%C4%B0nformatika-8-9.pdf",
      logoUrl: "/edu-logo.png",
      start: "2023",
      end: "2023",
      description:
        "Earned a bronze medal in Azerbaijan’s 2023 National Olympiad in Informatics.",
    },
    {
      title: "Golden Diploma & School Book of Honor",
      issuer: "Ministry of Science and Education, Republic of Azerbaijan",
      href: "",
      logoUrl: "/edu-logo.png",
      start: "2025",
      end: "2025",
      description:
        "The only student in my school awarded the Golden Diploma, with a 5/5 GPA and selection for the school’s Book of Honor.",
    },
  ],
  volunteer: [
    {
      organization: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      logoUrl: "/edinburghuniversity.svg",
      title: "Academic Parent",
      start: "2026",
      end: "Present",
      description:
        "Mentoring first-year Informatics students with academic and social guidance.",
    },
    {
      organization: "Azerbaijan Society, University of Edinburgh",
      href: "https://uoe-azerbaijansociety.uk/",
      logoUrl: "/azerbaijan-society.png",
      title: "Event Organiser",
      start: "2025",
      end: "2026",
      description:
        "Organised cultural and networking events for 50+ attendees, including Nowruz and Solidarity Day. Managed venue bookings, catering, promotion, and on-site coordination.",
    },
    {
      organization: "Bir Könüllü - School Volunteer Programme",
      href: "https://t.me/birkonullu",
      logoUrl: "/birkonullu.jpg",
      title: "Head Coordinator",
      start: "January 2024",
      end: "June 2025",
      description:
        "Helped run peer mentoring and school technology activities for 200+ students.",
    },
  ],
} as const;
