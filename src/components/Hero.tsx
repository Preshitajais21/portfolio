import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
        <p className="font-mono text-xs tracking-widest text-accent">PORTFOLIO / 2026</p>

        <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-lg text-muted sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-[#15100b] transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            View résumé
          </a>
          <a
            href="#contact"
            className="px-2 py-2.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
