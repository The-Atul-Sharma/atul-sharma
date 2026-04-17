"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `New message from ${name || "portfolio visitor"}`,
    );
    const body = encodeURIComponent(
      `Hi ${siteConfig.name.split(" ")[0]},\n\n${message}\n\n— ${name}\n${email}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <Section id="contact">
      <SectionHeading
        command="echo 'let's talk'"
        title="Let's build something."
        description="I'm happy to chat about senior and staff-level roles, interesting problems, or collaborations. I usually reply within a day."
      />

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
        >
          <Field id="name" label="Name" placeholder="Jane Doe" required />
          <Field
            id="email"
            label="Email"
            type="email"
            placeholder="jane@company.com"
            required
          />
          <Field
            id="message"
            label="Message"
            placeholder="Tell me a bit about what you're working on."
            textarea
            required
          />

          <div className="flex items-center justify-between pt-2">
            <p className="font-mono text-[11px] text-[var(--color-fg-subtle)]">
              Opens in your mail client.
            </p>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-fg)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_40px_-18px_rgba(125,211,252,0.45)] transition-shadow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_18px_50px_-18px_rgba(125,211,252,0.7)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">
                {status === "sent" ? "Sent" : "Send message"}
              </span>
              <ArrowUpRight
                size={14}
                className="relative transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="space-y-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-border-strong)]"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                &gt; direct
              </p>
              <p className="mt-2 text-[15px] text-[var(--color-fg)]">
                {siteConfig.email}
              </p>
            </div>
            <Mail
              size={18}
              className="text-[var(--color-fg-subtle)] transition-colors group-hover:text-[var(--color-fg)]"
            />
          </a>

          <ul className="space-y-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <li className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              &gt; elsewhere
            </li>
            {siteConfig.socials
              .filter((s) => !s.href.startsWith("mailto:"))
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-md px-2 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-fg)]"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-[12px] text-[var(--color-fg-subtle)] group-hover:text-[var(--color-fg-muted)]">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </motion.aside>
      </div>
    </Section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  textarea,
}: FieldProps) {
  const baseClass =
    "w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2.5 text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors focus:border-[var(--color-accent)]";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          required={required}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}
