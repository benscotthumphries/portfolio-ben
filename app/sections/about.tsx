import { LifeBuoy } from "lucide-react";
import Reveal from "../components/reveal";
import Section from "../components/section";
import { about, funFact, highlights } from "../data";

export default function About() {
  return (
    <Section id="about" title="The short version" className="print:hidden">
      <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="grid content-start gap-4">
          {highlights.map(({ value, label }) => (
            <div key={label} className="card p-5">
              <p className="gradient-text text-3xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <figure className="card relative mt-8 overflow-hidden p-6 sm:p-8">
          <div className="absolute -right-16 -bottom-16 size-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <LifeBuoy className="size-12 shrink-0 text-accent" strokeWidth={1.5} />
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">Fun fact</p>
              <blockquote className="mt-1 text-xl font-semibold sm:text-2xl">{funFact.headline}</blockquote>
              <figcaption className="mt-2 text-muted">{funFact.detail}</figcaption>
            </div>
          </div>
        </figure>
      </Reveal>
    </Section>
  );
}
