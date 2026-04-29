import { siteConfig } from "@/config/siteConfig";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.bio.short,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
    },
    sameAs: siteConfig.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.seo.title,
    url: siteConfig.url,
    description: siteConfig.seo.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    inLanguage: "en-US",
  };

  const creativeWorks = {
    "@context": "https://schema.org",
    "@graph": siteConfig.projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      dateCreated: p.year,
      keywords: p.stack.join(", "),
      author: { "@type": "Person", name: siteConfig.name },
      url:
        p.links?.vscode ??
        p.links?.npm ??
        p.links?.live ??
        p.links?.caseStudy ??
        p.links?.repo ??
        siteConfig.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorks) }}
      />
    </>
  );
}
