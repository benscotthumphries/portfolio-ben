import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../components/icons";
import Reveal from "../components/reveal";
import Section from "../components/section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="Things I've built" className="print:hidden">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(({ name, description, tags, href, source }, i) => (
          <Reveal key={name} delay={i * 0.1}>
            <article className="card group relative flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent/40">
              <h3 className="flex items-center justify-between font-semibold">
                {href ? (
                  // Stretched link: the whole card is clickable without nesting the Source link inside it.
                  <a href={href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                    {name}
                  </a>
                ) : (
                  name
                )}
                {href && <ArrowUpRight className="size-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent/80">
                  {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {source && (
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex shrink-0 items-center gap-1.5 text-xs text-muted transition hover:text-accent"
                  >
                    <GitHubIcon className="size-4" /> Source
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
