import { GraduationCap } from "lucide-react";
import PrintButton from "../components/print-button";
import Reveal from "../components/reveal";
import Section from "../components/section";
import { education, experience, profile, skills, socials } from "../data";

export default function Resume() {
  return (
    <Section id="resume" title="Experience" className="print-plain print:flex print:flex-col">
      {/* Only shown when printing, so the PDF has a proper header above "Experience". */}
      <header className="mb-6 hidden text-center print:-order-1 print:block">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-sm">
          {profile.email} · {socials.linkedin.replace("https://www.", "")} · {socials.github.replace("https://", "")}
        </p>
      </header>

      <div className="-mt-6 mb-10 flex justify-end">
        <PrintButton />
      </div>

      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8 print:space-y-4 print:border-0 print:pl-0">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute top-2 -left-[calc(1.5rem+5.5px)] size-2.5 rounded-full bg-accent shadow-[0_0_12px] shadow-accent sm:-left-[calc(2rem+5.5px)] print:hidden" />
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-semibold print:text-base">{job.company}</h3>
                <p className="text-sm text-muted">{job.location}</p>
              </div>

              <div className="mt-3 space-y-5 print:mt-1 print:space-y-2">
                {job.roles.map((role) => (
                  <article key={role.title} className="card p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-medium text-accent">{role.title}</h4>
                      <p className="font-mono text-xs text-muted">{role.dates}</p>
                    </div>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-accent/60 print:mt-1 print:space-y-0.5 print:text-sm">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 print:mt-4">
        <Reveal className="card p-6">
          <h3 className="flex items-center gap-2 font-semibold">
            <GraduationCap className="size-5 text-accent print:hidden" /> Education
          </h3>
          <p className="mt-3 font-medium">{education.school}</p>
          <p className="text-muted">{education.degree}</p>
          <p className="text-muted">{education.minor}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {education.location} · {education.dates}
          </p>
        </Reveal>
      </div>

      <h3 className="mt-16 mb-6 text-2xl font-bold tracking-tight print:mt-4 print:mb-2 print:text-base">Skills</h3>
      <div className="grid gap-4 md:grid-cols-3 print:gap-1">
        {skills.map(({ category, items }, i) => (
          <Reveal key={category} delay={i * 0.1} className="card p-6">
            <h4 className="font-mono text-sm text-accent">{category}</h4>
            <ul className="mt-4 flex flex-wrap gap-2 print:mt-1 print:block">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white/5 px-3 py-1 text-sm transition hover:border-accent/50 hover:text-accent print:inline print:border-0 print:p-0 print:after:content-[',_'] print:last:after:content-none"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
