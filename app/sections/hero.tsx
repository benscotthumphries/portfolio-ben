import { ArrowDown, FileText, Mail } from "lucide-react";
import Image from "next/image";
import portrait from "../assets/portrait.jpg";
import { GitHubIcon, LinkedInIcon } from "../components/icons";
import Reveal from "../components/reveal";
import Typewriter from "../components/typewriter";
import { profile, socials } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-svh max-w-5xl items-center px-4 pt-16 sm:px-6 print:hidden">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1fr_auto]">
        <Reveal className="order-2 text-center md:order-1 md:text-left">
          <p className="font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 h-9 text-2xl text-muted sm:text-3xl">
            I&apos;m a <Typewriter words={profile.typewriter} />
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-bg transition hover:bg-accent/85"
            >
              <FileText className="size-4" /> View resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" /> Get in touch
            </a>
            <div className="ml-1 flex gap-1">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted transition hover:text-accent">
                <GitHubIcon className="size-6" />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted transition hover:text-accent">
                <LinkedInIcon className="size-6" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 mx-auto md:order-2">
          <div className="relative size-56 sm:size-72">
            <div className="absolute -inset-1 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(var(--color-accent),var(--color-accent-2),transparent_60%,var(--color-accent))] opacity-80 will-change-transform" />
            <Image
              src={portrait}
              alt={profile.name}
              priority
              placeholder="blur"
              sizes="(min-width: 640px) 288px, 224px"
              className="relative size-full rounded-full border-4 border-bg object-cover"
            />
          </div>
        </Reveal>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-accent sm:block">
        <ArrowDown className="size-6" />
      </a>
    </section>
  );
}
