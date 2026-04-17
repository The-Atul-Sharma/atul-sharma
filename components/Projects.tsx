"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2, FileText } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Spotlight } from "./Spotlight";
import { Tilt } from "./Tilt";
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-full"
    >
    {project.featured ? (
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px overflow-hidden rounded-xl"
      >
        <div className="absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-accent-strong)_30deg,var(--color-accent-violet)_80deg,var(--color-accent-pink)_130deg,transparent_180deg,transparent_360deg)] opacity-70 motion-safe:animate-[spin-slow_9s_linear_infinite]" />
      </div>
    ) : null}
    <Tilt className="relative h-full" max={5}>
    <Spotlight className="relative h-full rounded-xl">
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_30px_60px_-30px_rgba(167,139,250,0.3)]"
    >
      <div className="relative flex items-center justify-between">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
          <span>{project.year}</span>
          {project.featured ? (
            <span className="relative inline-flex items-center gap-1 overflow-hidden rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-1.5 py-0.5 text-[10px] text-[var(--color-accent)]">
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--color-accent)_35%,transparent)] to-transparent motion-safe:animate-[shimmer_2.8s_ease-in-out_infinite]"
              />
              <span className="relative h-1 w-1 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
              <span className="relative">featured</span>
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
    </article>
    </Spotlight>
    </Tilt>
    </motion.div>
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
