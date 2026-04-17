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
  email: string;
  resumeUrl: string;
  url: string;
  locale: string;
  bio: {
    short: string;
    long: string;
  };
  nav: NavItem[];
  stats: StatItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  prompts: PromptItem[];
  socials: SocialLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    twitterHandle?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Atul Sharma",
  initials: "AS",
  title: "Senior Software Engineer · AI",
  roles: [
    "Senior Software Engineer",
    "AI Product Engineer",
    "Full-stack · LLM apps",
    "Design systems · DX",
  ],
  tagline:
    "I build AI-native products and calm, performant web platforms that real teams rely on every day.",
  location: "Bengaluru, India",
  availability: "Open to senior & staff roles",
  email: "hello@atulsharma.dev",
  resumeUrl: "/resume.pdf",
  url: "https://atulsharma.dev",
  locale: "en_US",

  bio: {
    short:
      "Senior software engineer building AI-native products, design systems, and developer tooling.",
    long: "I'm a senior software engineer with 7+ years of experience building product-grade web platforms — and, for the last two years, AI-native products on top of LLMs. I care about the edges: the small details that make a product feel fast, honest, and trustworthy. My work sits where design systems, performance, and applied AI meet.",
  },

  nav: [
    { label: "Journey", href: "#journey" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Ask", href: "#ask" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: "7+", label: "Years shipping" },
    { value: "30+", label: "Production launches" },
    { value: "80M", label: "Events/month served" },
    { value: "12", label: "LLM apps in prod" },
  ],

  experience: [
    {
      year: "2024 — Present",
      role: "Senior Software Engineer, AI Platform",
      company: "Lumen Labs",
      location: "Remote",
      description:
        "Leading the AI platform team. Shipped an agentic workflow engine, a streaming RAG layer over the company's docs, and a typed tool-calling framework the rest of the engineering org builds on.",
      stack: [
        "Next.js",
        "TypeScript",
        "OpenAI",
        "Anthropic",
        "LangGraph",
        "pgvector",
        "Redis",
      ],
      impact: [
        "Cut median AI response latency from 4.1s to 900ms with streaming + speculative tool calls",
        "Shipped an eval harness that gates every prompt change; regressions caught before merge",
        "Designed the tool-calling SDK adopted by 4 product teams",
      ],
    },
    {
      year: "2023 — 2024",
      role: "Senior Software Engineer",
      company: "Lumen Labs",
      location: "Remote",
      description:
        "Rebuilt the core web app on the App Router, introduced a typed design system, and cut p75 page loads by more than half.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Tailwind"],
      impact: [
        "Reduced p75 TTI from 3.4s to 1.2s across the core app",
        "Shipped a typed design system adopted by 4 product teams",
        "Mentored 5 engineers through senior promotion",
      ],
    },
    {
      year: "2021 — 2023",
      role: "Software Engineer II",
      company: "Northwind",
      location: "Bengaluru, IN",
      description:
        "Owned billing and subscriptions end-to-end. Built the internal experiment platform and migrated the data layer to a typed, cache-aware client.",
      stack: ["React", "Node.js", "GraphQL", "Stripe", "Redis"],
      impact: [
        "Grew paid conversion by 18% through checkout redesign",
        "Powered 120+ experiments in the first year",
      ],
    },
    {
      year: "2019 — 2021",
      role: "Software Engineer",
      company: "Tessera",
      location: "Hyderabad, IN",
      description:
        "Shipped the first version of the analytics dashboard and internal tooling used by the success team. First engineer on the frontend platform.",
      stack: ["React", "TypeScript", "D3", "Express"],
    },
    {
      year: "2018 — 2019",
      role: "Founding Engineer",
      company: "Kappa (acquired)",
      location: "Remote",
      description:
        "Built the MVP, onboarded the first 2,000 users, and set the engineering bar for the team that followed.",
      stack: ["React", "Firebase", "Node.js"],
    },
  ],

  projects: [
    {
      year: "2025",
      title: "Orbit",
      description:
        "An agentic research copilot that plans, browses, and writes with citations. Built around a typed tool-calling graph and a streaming UI that renders partial reasoning as it lands.",
      stack: ["Next.js", "TypeScript", "LangGraph", "Anthropic", "pgvector"],
      impact: [
        "Sub-second first token on 95% of queries",
        "Eval suite of 420 prompts, regressions blocked in CI",
      ],
      links: {
        live: "https://orbit.example.com",
        caseStudy: "https://atulsharma.dev/writing/orbit",
      },
      featured: true,
    },
    {
      year: "2025",
      title: "Atlas",
      description:
        "An opinionated command palette for SaaS apps. Keyboard-first, accessible by default, and framework-agnostic — now with a pluggable AI-action layer.",
      stack: ["TypeScript", "React", "Radix", "Zustand"],
      impact: [
        "1.8k GitHub stars in the first month",
        "Adopted by 30+ production teams",
      ],
      links: {
        live: "https://atlas.example.com",
        repo: "https://github.com/example/atlas",
      },
      featured: true,
    },
    {
      year: "2024",
      title: "Signal",
      description:
        "A lightweight analytics layer that renders in under 30ms. Built for teams that want truth without the bloat.",
      stack: ["Next.js", "ClickHouse", "Edge Runtime"],
      impact: ["Serves 80M events/month on a $40/mo stack"],
      links: {
        live: "https://signal.example.com",
        caseStudy: "https://atulsharma.dev/writing/signal",
      },
    },
    {
      year: "2023",
      title: "Quill",
      description:
        "A collaborative writing surface with offline sync, CRDT-based history, and an inline AI rewriter that respects your voice.",
      stack: ["React", "Yjs", "IndexedDB", "OpenAI"],
      links: {
        repo: "https://github.com/example/quill",
      },
    },
  ],

  skills: [
    {
      label: "AI / LLM",
      items: [
        "OpenAI",
        "Anthropic",
        "LangGraph",
        "Vercel AI SDK",
        "RAG",
        "Tool calling",
        "Evals",
        "pgvector",
      ],
    },
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Radix UI",
        "Zustand",
      ],
    },
    {
      label: "Backend",
      items: ["Node.js", "tRPC", "GraphQL", "PostgreSQL", "Redis", "Prisma"],
    },
    {
      label: "Platform",
      items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
    },
    {
      label: "Practice",
      items: [
        "Design systems",
        "Web performance",
        "Accessibility",
        "Prompt engineering",
        "Mentoring",
      ],
    },
  ],

  prompts: [
    {
      question: "What do you actually build?",
      answer:
        "AI-native product surfaces on top of LLMs — agentic workflows, streaming RAG, and the boring-but-critical stuff around them: evals, guardrails, tool-calling frameworks, and observability. And the calm, fast web platforms underneath.",
    },
    {
      question: "What's your stack in 2025?",
      answer:
        "Next.js + TypeScript on the frontend. Node, Postgres, and Redis on the server. Anthropic and OpenAI for model calls, LangGraph for agent orchestration, pgvector for retrieval, and the Vercel AI SDK to stream it all back to the UI without tears.",
    },
    {
      question: "How do you approach AI features?",
      answer:
        "Start with evals, not prompts. Ship the thinnest vertical slice that's actually useful. Stream everything — tokens, tool calls, reasoning. Measure latency, cost, and trust, in that order. Never ship a feature you can't roll back behind a flag in one click.",
    },
    {
      question: "What kind of role are you looking for?",
      answer:
        "Senior or staff roles where AI is part of the product, not a sidecar. Small, high-trust teams. Bonus if the work involves design systems, platform engineering, or getting models to behave in production.",
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
      href: "https://github.com/atulsharma",
      handle: "@atulsharma",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/atulsharma",
      handle: "in/atulsharma",
    },
    {
      label: "X",
      href: "https://x.com/atulsharma",
      handle: "@atulsharma",
    },
    {
      label: "Email",
      href: "mailto:hello@atulsharma.dev",
      handle: "hello@atulsharma.dev",
    },
  ],

  seo: {
    title: "Atul Sharma — Senior Software Engineer · AI",
    description:
      "Portfolio of Atul Sharma, a senior software engineer building AI-native products, design systems, and developer tooling on top of modern web platforms.",
    keywords: [
      "Atul Sharma",
      "Senior Software Engineer",
      "AI Engineer",
      "LLM apps",
      "RAG",
      "Next.js developer",
      "TypeScript",
      "React",
      "Design systems",
      "Portfolio",
    ],
    ogImage: "/og.png",
    twitterHandle: "@atulsharma",
  },
};
