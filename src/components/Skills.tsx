import { skills, education } from "../data";
import { SectionLabel } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel index="04" label="Skills" />

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label} className="min-w-0">
              <h3 className="font-mono text-xs tracking-widest text-accent">
                {group.label.toUpperCase()}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-surface px-2.5 py-1 text-[13px] text-fg/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-mono text-xs tracking-widest text-accent">EDUCATION</h3>
          <ul className="mt-4 flex flex-col gap-4">
            {education.map((e) => (
              <li key={e.degree} className="min-w-0">
                <p className="font-display text-[15px] font-medium text-fg">{e.degree}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {e.school} · {e.meta}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
