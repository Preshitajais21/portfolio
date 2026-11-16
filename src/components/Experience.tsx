import { experience } from "../data";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel index="02" label="Experience" />

        <ol className="mt-10 flex flex-col gap-10">
          {experience.map((job) => (
            <li key={job.role + job.org} className="grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr]">
              <div className="min-w-0">
                <p className="font-mono text-[13px] text-accent">{job.dates}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>
              <div className="min-w-0 border-l border-line pl-5 sm:pl-6">
                <h3 className="font-display text-lg font-semibold text-fg">{job.role}</h3>
                <p className="mt-0.5 text-sm text-muted">{job.org}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-fg/90">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
