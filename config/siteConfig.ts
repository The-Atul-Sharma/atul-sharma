export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  stack?: string[];
  impact?: string[];
};

export type ProjectItem = {
  year: string;
  title: string;
  description: string;
  stack: string[];
  impact?: string[];
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;
    npm?: string;
    vscode?: string;
  };
  featured?: boolean;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type PromptItem = {
  question: string;
  answer: string;
};

export type RoleRotation = string;

export type SiteConfig = {
  name: string;
  initials: string;
  title: string;
  roles: RoleRotation[];
  tagline: string;
  location: string;
  availability: string;
  readout: {
    focus: string;
    stack: string;
  };
  email: string;
  url: string;
  locale: string;
  googleAnalyticsId?: string;
  googleSiteVerification?: string;
  bio: {
    short: string;
    long: string;
  };
  nav: NavItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  prompts: PromptItem[];
  socials: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    twitterHandle?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Atul Sharma",
  initials: "AS",
  title: "Senior Software Engineer",
  roles: [
    "Senior Software Engineer",
    "AI Product Engineer",
    "Frontend",
    "Design Systems",
  ],

  tagline:
    "Senior software engineer building AI-native products, scalable frontend architectures, and high-performance web platforms.",

  location: "India / Remote",
  availability: "Open to senior roles or Projects",

  readout: {
    focus: "ai · frontend · web",
    stack: "react · nextjs",
  },

  email: "theatsharma@gmail.com",

  url: "https://atul-sharma.vercel.app/",
  locale: "en_US",
  googleAnalyticsId: "G-K2DFTRSK3K",
  googleSiteVerification: "VEucwWtII3gELwDw1DSm1FZYLFynBgl0FwTQLYa4SrQ",

  bio: {
    short:
      "Senior software engineer building AI-native products, design systems, and developer platforms.",

    long: "I'm a senior software engineer with 8+ years of experience building scalable web applications and AI-powered products. I specialize in React, Next.js, and TypeScript, with expertise in micro-frontends, design systems, and performance optimization. I’ve worked on enterprise platforms serving global users, building reusable UI libraries. My focus is on creating fast, reliable, and production-ready systems that scale across teams and products.",
  },

  nav: [
    { label: "Intro", href: "#intro" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "FAQ", href: "#ask" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      year: "2025 — Present",
      role: "Senior Software Engineer",
      company: "Alshaya Group (Via Yallo)",
      location: "Remote (Bengaluru, India)",
      description:
        "Building scalable frontend architecture and enterprise retail systems for Alshaya Group, focusing on performance, multi-brand platforms, and micro-frontend architecture.",
      stack: [
        "React",
        "TypeScript",
        "Micro-frontends",
        "MUI",
        "SCSS",
        "Storybook",
      ],
      impact: [
        "Developed and scaled a reusable UI component library, improving consistency and accelerating development across multiple applications",
        "Led performance optimizations across the platform, improving load times and overall user experience",
        "Architected and implemented a micro-frontend system enabling independent deployments and scalable team workflows",
        "Designed a theming architecture supporting multiple brands, ensuring consistent UI with flexible customization",
        "Built and enhanced merchandising systems used by retail stores for inventory management and demand forecasting",
      ],
    },

    {
      year: "2021 — 2025",
      role: "Senior Software Engineer",
      company: "Arts Consolidated",
      location: "Remote (Copenhagen)",
      description:
        "Led frontend development for Operabase and CueTV — global platforms in the performing arts space.",
      stack: [
        "React",
        "Next.js",
        "Redux",
        "Stripe",
        "Chargebee",
        "VWO",
        "Lokalize",
      ],
      impact: [
        "Led development of flagship platforms Operabase and CueTV",
        "Architected a secure paywall system using FingerprintJS, preventing unauthorized access and strengthening subscription enforcement",
        "Designed and implemented analytics pipelines integrating Google Analytics, improving decision-making efficiency",
        "Integrated Stripe and Chargebee for secure subscription and payment workflows",
        "Improved Core Web Vitals (LCP, FID, CLS) through optimization, lazy loading, and code-splitting",
        "Drove product improvements using A/B testing and feature flags via VWO",
      ],
    },

    {
      year: "2020 — 2021",
      role: "Senior Software Engineer",
      company: "Belong.co",
      location: "Bengaluru, India",
      description:
        "Built analytics systems and improved hiring platform integrations.",
      stack: ["React", "Redux", "Node.js", "Express", "DynamoDB"],
      impact: [
        "Developed analytics dashboards for real-time recruitment insights",
        "Integrated layer on top of career site with ATS, improving candidate conversion rates",
      ],
    },

    {
      year: "2018 — 2020",
      role: "Software Engineer",
      company: "Belong.co",
      location: "Bengaluru, India",
      description:
        "Focused on frontend architecture and reusable component systems.",
      stack: ["React", "Redux", "Node.js", "Webpack", "Sass", "Highcharts"],
      impact: [
        "Built reusable UI component libraries, improving development speed and consistency",
        "Delivered key ATS features improving recruiter productivity",
        "Integrated CRM with talent pools for better candidate targeting",
      ],
    },

    {
      year: "2017 — 2018",
      role: "Software Engineer",
      company: "Advanced Structures India",
      location: "Bengaluru, India",
      description:
        "Built complex data visualization tools for engineering datasets.",
      stack: ["React", "Redux", "AngularJS", "Plotly"],
      impact: [
        "Developed visualization tools for noise and vibration analysis (linear, log, dB, 3D, heatmaps)",
        "Handled high-frequency data efficiently for large-scale datasets",
        "Enabled comparison across vehicle models and benchmarking scenarios",
      ],
    },
  ],

  projects: [
    {
      year: "2026",
      title: "InterviewLane",
      description:
        "A curated frontend interview prep platform for engineers featuring 700+ questions, structured roadmaps, and study plans.",
      stack: [
        "NextJS",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Zustand",
      ],
      impact: [
        "Curated 700+ structured questions across 18 categories for comprehensive frontend interview preparation",
        "Implemented robust authentication and bookmarking systems to track user progress",
        "Developed structured study plans, daily challenges, and random rounds to simulate real interview loops",
      ],
      links: {
        live: "https://interviewlane.com/",
        repo: "https://github.com/The-Atul-Sharma/InterviewLane",
      },
      featured: true,
    },
    {
      year: "2026",
      title: "gpilot",
      description:
        "AI-powered Git workflow automation CLI and VS Code extension for generating commits, creating pull requests, reviewing code, fixing issues, and writing specs in one flow.",
      stack: [
        "TypeScript",
        "Node.js",
        "VS Code Extension",
        "React",
        "Spec driven development",
      ],
      impact: [
        "Unified commit, PR, review, spec generation, and fix workflows across CLI and extension",
        "Added pluggable AI providers and Git platforms for flexible team adoption",
        "Implemented secure key storage through OS keychain integration",
      ],
      links: {
        repo: "https://github.com/The-Atul-Sharma/gpilot",
        npm: "https://www.npmjs.com/package/gpilot",
        vscode: "https://marketplace.visualstudio.com/items?itemName=atsharma.gpilot",
      },
    },
    {
      year: "2026",
      title: "Knowledgebase AI",
      description:
        "AI-powered chatbot platform that answers product questions using Retrieval-Augmented Generation (RAG). Users can upload content or scrape websites to create a custom knowledge base and embed a fully customizable chatbot on their site.",
      stack: [
        "Next.js",
        "TypeScript",
        "LangChain",
        "Supabase",
        "pgvector",
        "OpenAI",
        "Gemini",
        "Ollama",
      ],
      impact: [
        "Built a multi-tenant RAG system with isolated user knowledge bases",
        "Enabled semantic search using vector embeddings for accurate responses",
        "Supported multiple LLM providers (OpenAI, Gemini, Ollama) with per-user configuration",
        "Developed embeddable chatbot widget with full UI and prompt customization",
        "Implemented website scraping + content ingestion pipeline",
      ],
      links: {
        live: "https://knowledge-base-ai-alpha.vercel.app/",
        repo: "https://github.com/The-Atul-Sharma/KnowledgeBase-ai",
      },
    },
  ],

  skills: [
    {
      label: "AI / LLM",
      items: [
        "Cursor",
        "Claude",
        "Gemini",
        "Ollama",
        "OpenAI",
        "LangChain",
        "RAG",
        "Prompt Engineering",
      ],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    },
    {
      label: "Backend",
      items: ["Node.js", "MongoDB", "Express.js", "GraphQL"],
    },
    {
      label: "Platform",
      items: ["Vercel", "Git", "GitHub", "Bitbucket"],
    },
  ],

  prompts: [
    {
      question: "What do you build?",
      answer:
        "AI-powered product features, scalable frontend systems, and performance-focused web applications.",
    },
    {
      question: "What is your core strength?",
      answer:
        "Building reliable, scalable, and fast systems that work well in production.",
    },
    {
      question: "How can we work together?",
      answer:
        "Easiest path: email hello@atulsharma.dev or use the contact form below. Attach a one-liner about the problem you're solving — I usually reply within a day.",
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/the-atul-sharma",
      handle: "@the-atul-sharma",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/theatsharma/",
      handle: "@theatsharma",
    },
    {
      label: "X",
      href: "https://x.com/theatsharma",
      handle: "@theatsharma",
    },
    {
      label: "Email",
      href: "mailto:theatsharma@gmail.com",
    },
  ],

  seo: {
    title: "Atul Sharma | Senior Software Engineer (AI, React, Next.js)",
    description:
      "Atul Sharma is a senior software engineer specializing in AI applications, React, Next.js, and scalable frontend architecture.",
    keywords: [
      "Atul Sharma",
      "Senior Software Engineer",
      "AI Engineer",
      "Next.js Developer",
      "React Developer",
      "LLM Applications",
    ],
    twitterHandle: "@theatsharma",
  },
};
