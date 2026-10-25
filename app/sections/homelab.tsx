import { Server } from "lucide-react";
import Reveal from "../components/reveal";
import Section from "../components/section";
import Terminal from "../components/terminal";
import { homelab } from "../data";

export default function Homelab() {
  return (
    <Section id="homelab" title="What's running at home" className="print:hidden">
      <Reveal>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">{homelab.intro}</p>
      </Reveal>

      <Reveal>
        <Terminal />
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {homelab.services.map(({ name, description }, i) => (
          <Reveal key={name} delay={i * 0.05} className="card group flex items-start gap-3 p-4 transition hover:border-accent/40">
            <Server className="mt-0.5 size-5 shrink-0 text-muted transition group-hover:text-accent" />
            <div>
              <p className="flex items-center gap-2 font-mono text-sm font-medium">
                {name}
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
