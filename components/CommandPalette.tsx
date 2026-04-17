"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Command,
  CornerDownLeft,
  FileText,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { siteConfig, type PromptItem } from "@/config/siteConfig";
import { useStreamingText } from "./useStreamingText";

type Mode = "nav" | "ask";

type NavItem = {
  id: string;
  kind: "nav" | "action" | "mode";
  label: string;
  hint: string;
  icon: React.ReactNode;
};

export const PALETTE_OPEN_EVENT = "palette:open";

export function openCommandPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PALETTE_OPEN_EVENT));
  }
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("nav");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<PromptItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelected(null);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    const onOpen = () => setIsOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(PALETTE_OPEN_EVENT, onOpen as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PALETTE_OPEN_EVENT, onOpen as EventListener);
    };
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen, mode]);

  const navItems = useMemo<NavItem[]>(
    () => [
      ...siteConfig.nav.map((n) => ({
        id: n.href,
        kind: "nav" as const,
        label: `Go to ${n.label}`,
        hint: n.href,
        icon: <ArrowRight size={14} />,
      })),
      {
        id: "resume",
        kind: "action",
        label: "Download résumé",
        hint: siteConfig.resumeUrl,
        icon: <FileText size={14} />,
      },
      {
        id: "mail",
        kind: "action",
        label: `Email ${siteConfig.email}`,
        hint: "mailto",
        icon: <Mail size={14} />,
      },
      {
        id: "ask",
        kind: "mode",
        label: "Ask me anything",
        hint: "AI-style Q&A",
        icon: <Sparkles size={14} />,
      },
    ],
    [],
  );

  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return navItems;
    return navItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q),
    );
  }, [query, navItems]);

  const filteredPrompts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return siteConfig.prompts;
    return siteConfig.prompts.filter((p) =>
      p.question.toLowerCase().includes(q),
    );
  }, [query]);

  const [lastKey, setLastKey] = useState(`${mode}::`);
  const currentKey = `${mode}::${query}`;
  if (currentKey !== lastKey) {
    setLastKey(currentKey);
    setActiveIndex(0);
  }

  const runNavItem = useCallback(
    (item: NavItem) => {
      if (item.id === "resume") {
        window.open(siteConfig.resumeUrl, "_blank", "noopener,noreferrer");
        close();
        return;
      }
      if (item.id === "mail") {
        window.location.href = `mailto:${siteConfig.email}`;
        close();
        return;
      }
      if (item.id === "ask") {
        setMode("ask");
        setQuery("");
        return;
      }
      if (item.kind === "nav") {
        const el = document.querySelector(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.location.hash = item.id;
        close();
      }
    },
    [close],
  );

  const onKeyNav = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const list = mode === "nav" ? filteredNav : filteredPrompts;
    if (!list.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % list.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + list.length) % list.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (mode === "nav") {
        runNavItem(filteredNav[activeIndex]);
      } else {
        setSelected(filteredPrompts[activeIndex]);
      }
    } else if (e.key === "Backspace" && mode === "ask" && !query && selected) {
      setSelected(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <button
            aria-label="Close command palette"
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-1 border-b border-[var(--color-border)] px-2 py-2">
              <ModeTab
                active={mode === "nav"}
                onClick={() => {
                  setMode("nav");
                  setSelected(null);
                  setQuery("");
                }}
                icon={<Command size={12} />}
                label="Navigate"
              />
              <ModeTab
                active={mode === "ask"}
                onClick={() => {
                  setMode("ask");
                  setQuery("");
                }}
                icon={<Sparkles size={12} />}
                label="Ask"
              />
              <span className="ml-auto hidden items-center gap-1 pr-2 font-mono text-[11px] text-[var(--color-fg-subtle)] sm:flex">
                <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5">
                  esc
                </kbd>
                <span>to close</span>
              </span>
            </div>

            <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3">
              {mode === "ask" ? (
                <Sparkles
                  size={16}
                  className="text-[var(--color-accent)]"
                  aria-hidden
                />
              ) : (
                <Search
                  size={16}
                  className="text-[var(--color-fg-subtle)]"
                  aria-hidden
                />
              )}
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyNav}
                placeholder={
                  mode === "ask"
                    ? "Ask about my work, stack, or availability…"
                    : "Search sections, actions…"
                }
                className="w-full bg-transparent text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none"
                aria-label={mode === "ask" ? "Ask a question" : "Search"}
              />
            </div>

            <div className="max-h-[52vh] overflow-y-auto">
              {mode === "nav" ? (
                <NavList
                  items={filteredNav}
                  activeIndex={activeIndex}
                  onHover={setActiveIndex}
                  onRun={runNavItem}
                />
              ) : selected ? (
                <AnswerView
                  prompt={selected}
                  onBack={() => setSelected(null)}
                />
              ) : (
                <PromptList
                  items={filteredPrompts}
                  activeIndex={activeIndex}
                  onHover={setActiveIndex}
                  onSelect={setSelected}
                />
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 font-mono text-[11px] text-[var(--color-fg-subtle)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1.5 py-0.5">
                    ↑↓
                  </kbd>
                  move
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1.5 py-0.5">
                    <CornerDownLeft size={10} />
                  </kbd>
                  select
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <User size={11} /> {siteConfig.name.toLowerCase().replace(" ", "_")}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ModeTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
        active
          ? "bg-[var(--color-surface)] text-[var(--color-fg)]"
          : "text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function NavList({
  items,
  activeIndex,
  onHover,
  onRun,
}: {
  items: NavItem[];
  activeIndex: number;
  onHover: (i: number) => void;
  onRun: (item: NavItem) => void;
}) {
  if (!items.length) {
    return (
      <p className="px-4 py-8 text-center text-sm text-[var(--color-fg-subtle)]">
        No matches.
      </p>
    );
  }
  return (
    <ul className="p-1.5">
      {items.map((item, i) => (
        <li key={item.id}>
          <button
            type="button"
            onMouseEnter={() => onHover(i)}
            onClick={() => onRun(item)}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
              i === activeIndex
                ? "bg-[var(--color-surface)] text-[var(--color-fg)]"
                : "text-[var(--color-fg-muted)]"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-fg-muted)]">
              {item.icon}
            </span>
            <span className="flex-1">{item.label}</span>
            <span className="font-mono text-[11px] text-[var(--color-fg-subtle)]">
              {item.hint}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function PromptList({
  items,
  activeIndex,
  onHover,
  onSelect,
}: {
  items: PromptItem[];
  activeIndex: number;
  onHover: (i: number) => void;
  onSelect: (p: PromptItem) => void;
}) {
  if (!items.length) {
    return (
      <p className="px-4 py-8 text-center text-sm text-[var(--color-fg-subtle)]">
        No suggestions match. Try a different phrasing.
      </p>
    );
  }
  return (
    <ul className="p-1.5">
      {items.map((p, i) => (
        <li key={p.question}>
          <button
            type="button"
            onMouseEnter={() => onHover(i)}
            onClick={() => onSelect(p)}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
              i === activeIndex
                ? "bg-[var(--color-surface)] text-[var(--color-fg)]"
                : "text-[var(--color-fg-muted)]"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
              <Sparkles size={12} />
            </span>
            <span className="flex-1">{p.question}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function AnswerView({
  prompt,
  onBack,
}: {
  prompt: PromptItem;
  onBack: () => void;
}) {
  const { text, done } = useStreamingText(prompt.answer, {
    charsPerTick: 3,
    tickMs: 14,
  });

  return (
    <div className="px-4 py-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        &gt; {prompt.question}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg)]">
        {text}
        {!done ? (
          <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-[var(--color-accent)]" />
        ) : null}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]"
        >
          ← back to questions
        </button>
        <span className="font-mono text-[11px] text-[var(--color-fg-subtle)]">
          pre-written · no model call
        </span>
      </div>
    </div>
  );
}
