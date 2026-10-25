import { Server } from "lucide-react";
import Reveal from "../components/reveal";
import Section from "../components/section";
import { homelab } from "../data";

export default function Homelab() {
  return (
    <Section id="homelab" label="03 · Homelab" title="Running my own infrastructure" className="print:hidden">
      <Reveal>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">{homelab.intro}</p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card overflow-hidden font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-yellow-400/80" />
            <span className="size-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-xs text-muted">ben@homelab: ~</span>
          </div>
          <div className="space-y-4 p-5">
            <p>
              <span className="text-accent">ben@homelab</span>
              <span className="text-muted">:~$</span> neofetch
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              {homelab.specs.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="text-accent-2">{label}</dt>
                  <dd className="text-fg/90">{value}</dd>
                </div>
              ))}
            </dl>
            <p>
              <span className="text-accent">ben@homelab</span>
              <span className="text-muted">:~$</span> <span className="animate-blink">▍</span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
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
      </div>
    </Section>
  );
}
