import type { ReactNode } from "react";
import Reveal from "./reveal";

export default function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-4 py-24 sm:px-6 ${className}`}>
      <Reveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl print:mb-4 print:text-xl">
          <span className="mr-3 inline-block h-[0.6em] w-1.5 rounded-full bg-accent align-baseline print:hidden" />
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
