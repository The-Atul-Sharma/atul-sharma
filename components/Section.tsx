import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-5xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
