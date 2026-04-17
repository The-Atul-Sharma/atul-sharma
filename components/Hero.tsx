"use client";

import { motion, type Variants } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { RotatingTitle } from "./RotatingTitle";
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
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <Aurora />
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-2.5 py-1 backdrop-blur">
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
              className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-2.5 py-1 text-[var(--color-fg-muted)] backdrop-blur transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
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
            className="mt-3 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--color-fg)] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
            <span className="bg-gradient-to-br from-[var(--color-accent-strong)] to-[var(--color-accent)] bg-clip-text text-transparent">
              .
            </span>
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
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_50px_-18px_rgba(125,211,252,0.45)] transition-all hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_-18px_rgba(125,211,252,0.7)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">View work</span>
              <ArrowDownRight
                size={16}
                className="relative transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] backdrop-blur transition-colors hover:border-[var(--color-border-strong)]"
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
        </motion.div>
      </div>
    </section>
  );
}

function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-accent)_28%,transparent),transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        className="absolute -left-40 top-40 h-[420px] w-[560px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        className="absolute -right-32 top-24 h-[380px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14),transparent_60%)] blur-3xl"
      />
    </div>
  );
}
