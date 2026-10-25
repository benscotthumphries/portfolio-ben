import Reveal from "../components/reveal";
import Section from "../components/section";
import { about, highlights } from "../data";

export default function About() {
  return (
    <Section id="about" label="01 · About" title="A little about me" className="print:hidden">
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
    </Section>
  );
}
