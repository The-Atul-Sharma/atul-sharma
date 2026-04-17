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

export type SiteConfig = {
  name: string;
  initials: string;
  title: string;
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
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
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
  title: "Senior Software Engineer",
  tagline:
    "I design and ship calm, performant interfaces for products people actually use.",
  location: "Bengaluru, India",
  availability: "Open to senior & staff roles",
  email: "hello@atulsharma.dev",
  resumeUrl: "/resume.pdf",
  url: "https://atulsharma.dev",
  locale: "en_US",

  bio: {
    short:
      "Senior software engineer focused on product-grade web platforms, design systems, and developer experience.",
    long: "I'm a senior software engineer with 7+ years of experience building product-grade web platforms. I care about the edges — the small details that make a product feel fast, honest, and trustworthy. My work sits where design systems, performance, and developer experience meet.",
  },

  nav: [
    { label: "Journey", href: "#journey" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      year: "2023 — Present",
      role: "Senior Software Engineer",
      company: "Lumen Labs",
      location: "Remote",
      description:
        "Leading the web platform team. Rebuilt the core app on the App Router, introduced a typed design system, and cut p75 page loads by more than half.",
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
        "Owned the billing and subscriptions surface end-to-end. Built the internal experiment platform and migrated the data layer to a typed, cache-aware client.",
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
      title: "Atlas",
      description:
        "An opinionated command palette for SaaS apps. Keyboard-first, accessible by default, and framework-agnostic.",
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
      featured: true,
    },
    {
      year: "2023",
      title: "Quill",
      description:
        "A collaborative writing surface with offline sync and CRDT-based history.",
      stack: ["React", "Yjs", "IndexedDB"],
      links: {
        repo: "https://github.com/example/quill",
      },
    },
    {
      year: "2022",
      title: "Hearth",
      description:
        "Open-source design tokens pipeline that ships to Figma, iOS, Android, and the web from a single source.",
      stack: ["Node.js", "Style Dictionary", "TypeScript"],
      links: {
        repo: "https://github.com/example/hearth",
      },
    },
  ],

  skills: [
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
        "Technical writing",
        "Mentoring",
      ],
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
    title: "Atul Sharma — Senior Software Engineer",
    description:
      "Portfolio of Atul Sharma, a senior software engineer shipping calm, performant web products. Work on design systems, platform engineering, and developer experience.",
    keywords: [
      "Atul Sharma",
      "Senior Software Engineer",
      "Next.js developer",
      "TypeScript",
      "React",
      "Design systems",
      "Web performance",
      "Portfolio",
    ],
    ogImage: "/og.png",
    twitterHandle: "@atulsharma",
  },
};
