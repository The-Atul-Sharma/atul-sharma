"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2, FileText } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig, type ProjectItem } from "@/config/siteConfig";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        command="ls ./projects"
        title="Selected projects."
        description="A small set of things I've built and shipped. For the rest, the source is usually on GitHub."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {siteConfig.projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const primaryHref =
    project.links?.live ??
    project.links?.caseStudy ??
    project.links?.repo ??
    null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-[color:color-mix(in_oklab,var(--color-accent)_14%,transparent)] to-transparent" />
      </div>

      <div className="relative flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
          {project.year}
          {project.featured ? (
            <span className="ml-2 rounded-full border border-[var(--color-border-strong)] px-1.5 py-0.5 text-[10px] text-[var(--color-accent)]">
              featured
            </span>
          ) : null}
        </p>
        {primaryHref ? (
          <ArrowUpRight
            size={16}
            className="text-[var(--color-fg-subtle)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-fg)]"
          />
        ) : null}
      </div>

      <h3 className="relative mt-3 text-lg font-semibold tracking-tight text-[var(--color-fg)]">
        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none after:absolute after:inset-0"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p className="relative mt-2 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
        {project.description}
      </p>

      {project.impact && project.impact.length > 0 ? (
        <ul className="relative mt-4 space-y-1 text-[13.5px] text-[var(--color-fg-muted)]">
          {project.impact.map((line) => (
            <li
              key={line}
              className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-accent)]"
            >
              {line}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="relative mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-fg-muted)]"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links ? (
        <div className="relative mt-5 flex gap-3 border-t border-[var(--color-border)] pt-4 text-sm">
          {project.links.live ? (
            <ExternalLink href={project.links.live} label="Live" />
          ) : null}
          {project.links.repo ? (
            <ExternalLink
              href={project.links.repo}
              label="Source"
              icon={<Code2 size={13} />}
            />
          ) : null}
          {project.links.caseStudy ? (
            <ExternalLink
              href={project.links.caseStudy}
              label="Case study"
              icon={<FileText size={13} />}
            />
          ) : null}
        </div>
      ) : null}
    </motion.article>
  );
}

function ExternalLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center gap-1.5 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
    >
      {icon}
      {label}
    </a>
  );
}
