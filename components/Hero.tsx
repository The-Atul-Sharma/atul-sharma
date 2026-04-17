"use client";

import { motion, type Variants } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { RotatingTitle } from "./RotatingTitle";
import { Stats } from "./Stats";
import { openCommandPalette } from "./CommandPalette";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--color-fg-subtle)]"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                {siteConfig.availability}
              </span>
            </span>

            <button
              type="button"
              onClick={openCommandPalette}
              className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
            >
              <Sparkles
                size={11}
                className="text-[var(--color-accent)] transition-transform group-hover:rotate-12"
              />
              <span className="uppercase tracking-[0.2em]">Ask me anything</span>
              <span className="ml-1 inline-flex items-center gap-0.5 text-[10px] text-[var(--color-fg-subtle)]">
                <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1">
                  ⌘
                </kbd>
                <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1">
                  K
                </kbd>
              </span>
            </button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]"
          >
            <span className="text-[var(--color-accent)]">$</span> whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-fg)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteConfig.name}.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-x-2 font-mono text-sm text-[var(--color-fg-muted)]"
          >
            <span className="text-[var(--color-accent)]">&gt;</span>
            <RotatingTitle
              items={siteConfig.roles}
              className="text-[var(--color-fg)]"
            />
            <span className="text-[var(--color-fg-subtle)]">
              · {siteConfig.location}
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-fg-muted)] md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              View work
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-border-strong)]"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              download
            >
              <Download size={14} />
              Résumé
            </a>
          </motion.div>

          <Stats />
        </motion.div>
      </div>
    </section>
  );
}
