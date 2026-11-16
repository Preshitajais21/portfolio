import { useEffect } from "react";
import { projects } from "../data";
import WorkflowDiagram from "./WorkflowDiagram";

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-fg">Project not found.</p>
        <a href="#projects" className="mt-4 inline-block font-mono text-sm text-accent hover:underline">
          ← Back to portfolio
        </a>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <a href="#projects" className="font-mono text-xs text-accent hover:underline">
        ← Back to portfolio
      </a>

      <h1 className="font-display mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-xl text-lg text-muted">{project.blurb}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener"
            className="rounded border border-accent/60 px-2.5 py-1 font-mono text-[11px] text-accent hover:bg-accent/10"
          >
            View code ↗
          </a>
        )}
      </div>

      <section className="mt-10">
        <h2 className="font-mono text-xs tracking-widest text-accent">THE PROBLEM</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-fg/90 sm:text-base">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs tracking-widest text-accent">HOW IT WORKS</h2>
        <div className="mt-4">
          <WorkflowDiagram stages={project.stages} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs tracking-widest text-accent">IMPACT</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-fg/90 sm:text-base">{project.impact}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-mono text-xs tracking-widest text-accent">AT A GLANCE</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-fg/90">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-16 flex items-center justify-between border-t border-line pt-6">
        <a href={`#project-${prev.slug}`} className="min-w-0 font-mono text-xs text-muted hover:text-accent">
          ← {prev.title}
        </a>
        <a href={`#project-${next.slug}`} className="min-w-0 text-right font-mono text-xs text-muted hover:text-accent">
          {next.title} →
        </a>
      </nav>
    </article>
  );
}
