"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CornerDownLeft, Sparkles, Square } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig, type PromptItem } from "@/config/siteConfig";
import { useStreamingText } from "./useStreamingText";

export function AskPrompt() {
  const [selected, setSelected] = useState<PromptItem | null>(null);
  const [typed, setTyped] = useState("");
  const { text, done } = useStreamingText(selected?.answer ?? null, {
    charsPerTick: 3,
    tickMs: 14,
  });

  const run = (p: PromptItem) => {
    setTyped(p.question);
    setSelected(p);
  };

  const reset = () => {
    setSelected(null);
    setTyped("");
  };

  return (
    <Section id="ask">
      <SectionHeading
        command="ask ./me"
        title="Ask me anything."
        description={
          <>
            A small, live prompt with pre-written answers to the questions I
            get most. Same vibe as the ⌘K palette — just inline. No model calls,
            no hallucinations.
          </>
        }
      />

      <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-2.5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            <Sparkles size={12} className="text-[var(--color-accent)]" />
            <span>
              {siteConfig.name.toLowerCase().replace(" ", "_")} / chat
            </span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-[var(--color-fg-subtle)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>online</span>
          </div>
        </div>

        <div className="px-4 py-5 md:px-6 md:py-6">
          <div className="flex items-start gap-3">
            <span className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              you
            </span>
            <p className="min-h-[1.5rem] flex-1 text-[15px] text-[var(--color-fg)]">
              {typed ? (
                typed
              ) : (
                <span className="text-[var(--color-fg-subtle)]">
                  Pick a question below, or press{" "}
                  <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1 font-mono text-[11px]">
                    ⌘K
                  </kbd>{" "}
                  for the full palette.
                </span>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.question}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 flex items-start gap-3 border-t border-dashed border-[var(--color-border)] pt-5"
              >
                <span className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {siteConfig.initials.toLowerCase()}
                </span>
                <div className="flex-1">
                  <p className="text-[15px] leading-relaxed text-[var(--color-fg)]">
                    {text}
                    {!done ? (
                      <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-[var(--color-accent)]" />
                    ) : null}
                  </p>
                  {done ? (
                    <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                      <button
                        type="button"
                        onClick={reset}
                        className="hover:text-[var(--color-fg-muted)]"
                      >
                        ← new question
                      </button>
                      <span>· pre-written answer</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]"
                    >
                      <Square size={10} /> stop
                    </button>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3">
          <p className="mb-2 px-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            suggested
          </p>
          <ul className="flex flex-wrap gap-2">
            {siteConfig.prompts.map((p) => (
              <li key={p.question}>
                <button
                  type="button"
                  onClick={() => run(p)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[13px] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
                >
                  <span>{p.question}</span>
                  <CornerDownLeft
                    size={12}
                    className="text-[var(--color-fg-subtle)] transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
