import type { ReactNode } from "react";
import Reveal from "./reveal";

export default function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-4 py-24 sm:px-6 ${className}`}>
      <Reveal>
        <p className="section-title print:hidden">{label}</p>
        <h2 className="mt-2 mb-10 text-3xl font-bold tracking-tight sm:text-4xl print:mb-4 print:text-xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
