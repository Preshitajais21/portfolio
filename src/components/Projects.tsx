import { projects, type ProjectEntry } from "../data";
import { SectionLabel } from "./About";

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/50 sm:p-6">
      <h3 className="font-display text-lg font-semibold text-fg">{project.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.blurb}</p>

      <a
        href={`#project-${project.slug}`}
        className="mt-4 self-start font-mono text-xs text-accent hover:underline"
      >
        View case study →
      </a>

      <div className="mt-5 flex flex-wrap gap-2 pt-1">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel index="03" label="Projects" />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
