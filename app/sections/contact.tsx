import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../components/icons";
import Reveal from "../components/reveal";
import Section from "../components/section";
import { profile, socials } from "../data";

export default function Contact() {
  return (
    <Section id="contact" title="Let's talk" className="print:hidden">
      <Reveal className="card relative overflow-hidden p-8 text-center sm:p-12">
        <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-accent/20 blur-3xl" />
        <p className="relative mx-auto max-w-xl text-lg text-muted">
          Whether it&apos;s a role, a project, or a homelab question, my inbox is open. {profile.availability}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-bg transition hover:bg-accent/85"
        >
          <Mail className="size-5" /> {profile.email}
        </a>
        <div className="relative mt-6 flex justify-center gap-2">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted transition hover:text-accent">
            <GitHubIcon className="size-6" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted transition hover:text-accent">
            <LinkedInIcon className="size-6" />
          </a>
        </div>
      </Reveal>

      <footer className="mt-16 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js and too many containers.
      </footer>
    </Section>
  );
}
